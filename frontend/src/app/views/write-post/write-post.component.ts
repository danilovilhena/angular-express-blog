import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

declare var $: any;

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css', './write-post.responsivity.css']
})
export class WritePostComponent implements OnInit {

  user: any;
  topics: any;
  postForm: FormGroup;
  submitMessage = '';

  constructor(private _backendService: BackendService, private _router: Router) {
    this._backendService.getUser()
    .subscribe(
      data => {
        console.log(data)
        this.user = data
      },
      error => this._router.navigate(['/login'])
    )

    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      topics: new FormControl(null, Validators.required),
      imageURL: new FormControl(null, Validators.required)
    })
    
  }
  
  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    $(".selectpicker").selectpicker();
  }

  isValid(controlName: string){
    return this.postForm.get(controlName)?.invalid && this.postForm.get(controlName)?.touched
  }

  reset(){
    this.postForm.reset()
    $('.selectpicker').selectpicker('deselectAll');
  }

  submit(){
    let body = this.postForm.value
    body.author_name = this.user.name
    body.author_id = this.user._id
    console.log(body)
    if(this.postForm.valid){
      this._backendService.createPost(body)
      .subscribe(
        (data) => {
          this.submitMessage = "Post feito com sucesso!"
          setTimeout(() => {
            this._router.navigate(['/perfil'])
          }, 1500);
        },
        (error) => {
          this.submitMessage = "Erro ao criar seu post."
        }
      )
    }
  }
}
