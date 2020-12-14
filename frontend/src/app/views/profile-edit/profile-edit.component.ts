import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css', './profile-edit.responsivity.css']
})
export class ProfileEditComponent implements OnInit {
  profileForm: FormGroup;
  user: any;
  submitMessage = ''

  constructor(private _backendService: BackendService, private _router: Router) {
    this.profileForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null, Validators.email),
      phone: new FormControl(null, this.phoneValidator),
      description: new FormControl(null),
      linkedin: new FormControl(null),
      instagram: new FormControl(null),
      github: new FormControl(null),
      site: new FormControl(null),
    })

    this._backendService.getUser()
    .subscribe(
      data => {
        this.user = data
        this.profileForm.get('name')?.setValue(this.user.name)
        this.profileForm.get('email')?.setValue(this.user.email)
        this.profileForm.get('phone')?.setValue(this.user.phone)
        this.profileForm.get('description')?.setValue(this.user.description)
        this.profileForm.get('linkedin')?.setValue(this.user.linkedin)
        this.profileForm.get('instagram')?.setValue(this.user.instagram)
        this.profileForm.get('github')?.setValue(this.user.github)
        this.profileForm.get('site')?.setValue(this.user.site)
      },
      error => this._router.navigate(['/login'])
    )

    setTimeout(() => {
      this._backendService.getUserById(this.user._id)
      .subscribe(
        data => {
          this.user = data
          this.profileForm.get('name')?.setValue(this.user.name)
          this.profileForm.get('email')?.setValue(this.user.email)
          this.profileForm.get('phone')?.setValue(this.user.phone)
          this.profileForm.get('description')?.setValue(this.user.description)
          this.profileForm.get('linkedin')?.setValue(this.user.linkedin)
          this.profileForm.get('instagram')?.setValue(this.user.instagram)
          this.profileForm.get('github')?.setValue(this.user.github)
          this.profileForm.get('site')?.setValue(this.user.site)
        },
        error => console.log(error)
      )
    }, 100);
  }

  isValid(controlName: string){
    return this.profileForm.get(controlName)?.invalid && this.profileForm.get(controlName)?.touched
  }
  

  phoneValidator(control: AbstractControl){
    const re = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
    return re.test(control.value) ? null : { isError: true }
  }

  ngOnInit(): void {
  }

  reset(){
    this.profileForm.get('name')?.setValue(this.user.name)
    this.profileForm.get('email')?.setValue(this.user.email)
    this.profileForm.get('phone')?.setValue(this.user.phone)
    this.profileForm.get('description')?.setValue(this.user.description)
    this.profileForm.get('linkedin')?.setValue(this.user.linkedin)
    this.profileForm.get('instagram')?.setValue(this.user.instagram)
    this.profileForm.get('github')?.setValue(this.user.github)
    this.profileForm.get('site')?.setValue(this.user.site)
    this.submitMessage = ''
  }

  save(){
    if(this.profileForm.valid){
      this._backendService.alterUser(this.user._id, this.profileForm.value)
      .subscribe(
        data => {
          console.log(data)
          this.submitMessage = 'Mudanças salvas com sucesso.'
        },
        error => {
          console.log(error)
          this.submitMessage = 'Mudanças salvas com sucesso.'
        }
      )
    } else {
      Object.keys(this.profileForm.controls).forEach(field => {
        this.profileForm.get(field)?.markAsTouched({ onlySelf: true })
      });
      this.submitMessage = 'Ocorreu um erro ao salvar as mudanças.'
    }
  }

}
