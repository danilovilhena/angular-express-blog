import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitMessage = '';

  constructor(private _backendService: BackendService, private _router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      phone: new FormControl(null, this.phoneValidator),
      confirmPassword: new FormControl(null, this.passwordValidator)
    })

    this.registerForm.controls.password.valueChanges
    .subscribe( 
      x => this.registerForm.controls.confirmPassword.updateValueAndValidity() 
    )
  }

  ngOnInit(): void {
  }

  isValid(controlName: string){
    return this.registerForm.get(controlName)?.invalid && this.registerForm.get(controlName)?.touched
  }

  phoneValidator(control: AbstractControl){
    const re = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
    return re.test(control.value) ? null : { isError: true }
  }

  passwordValidator(control: AbstractControl){
    if(control && (control.value !== null || control.value !== undefined)){
      const confirmPasswordValue = control.value
      const passwordControl = control.root.get('password')
      if(passwordControl){
        const passwordValue = passwordControl.value
        if(passwordValue !== confirmPasswordValue || passwordValue === ''){
          return { isError: true }
        }
      }
    }
    return null;
  }

  register(){
    let checkbox = (document.getElementById('accept-terms') as HTMLInputElement)

    if(checkbox.checked && this.registerForm.valid){
      checkbox.style.removeProperty('outline')

      this._backendService.registerUser(this.registerForm.value)
      .subscribe(
        (data) => {
          this.submitMessage = "Cadastro feito com sucesso!"
          setTimeout(() => {
            this._router.navigate(['/login'])
          }, 1500);
        },
        (error) => {
          this.submitMessage = "E-mail já cadastrado."
        }
      )
    } else{
      if(!checkbox.checked){
        checkbox.style.setProperty('outline', '3px solid #ea0000', 'important')
        checkbox.addEventListener('click', () => {
          checkbox.style.removeProperty('outline')
        })
      }
      this.submitMessage = 'Preencha todos os campos acima.'
      Object.keys(this.registerForm.controls).forEach(field => {
        this.registerForm.get(field)?.markAsTouched({ onlySelf: true })
      });
    }
  }
}
