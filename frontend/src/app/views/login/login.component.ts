import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// TODO: Salvar no local storage o remember me
  loginForm: FormGroup;

  constructor(private _backendService: BackendService, private _router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  isValid(controlName: string) {
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched
  }

  login(){
    if(this.loginForm.valid){
      this._backendService.loginUser(this.loginForm.value)
      .subscribe(
        data => {
          console.log(data)
          localStorage.setItem('token', data.toString())
          this._router.navigate(['/profile'])
        },
        error => {console.log(error)}
      )
    } else {
      Object.keys(this.loginForm.controls).forEach(field => {
        this.loginForm.get(field)?.markAsTouched({ onlySelf: true })
      });
    }
  }
}
