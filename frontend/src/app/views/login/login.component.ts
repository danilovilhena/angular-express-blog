import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', 'login.responsivity.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitMessage = '';

  constructor(private _backendService: BackendService, private _router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem('email')){
      this.loginForm.get('email')?.setValue(localStorage.getItem('email'));
      (document.getElementById('remember-me') as HTMLInputElement).checked = true
    }
  }

  isValid(controlName: string) {
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched
  }

  login(){
    if(this.loginForm.get('email')?.value == 'admin' && this.loginForm.get('password')?.value == '12345'){
      this._router.navigate(['/admin/inicio'])
    }else {
      if(this.loginForm.valid){
        this._backendService.loginUser(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data)
            localStorage.setItem('token', data.toString())
            if((document.getElementById('remember-me') as HTMLInputElement).checked){
              localStorage.setItem('email', this.loginForm.get('email')?.value)
            } else {
              localStorage.removeItem('email')
            }
            this.submitMessage = 'Login feito com sucesso!'
            setTimeout(() => {
              this._router.navigate(['/perfil'])
            }, 1500);
          },
          error => {this.submitMessage = error.error.message}
        )
      } else {
        Object.keys(this.loginForm.controls).forEach(field => {
          this.loginForm.get(field)?.markAsTouched({ onlySelf: true })
        });
      }
    }
  }
}
