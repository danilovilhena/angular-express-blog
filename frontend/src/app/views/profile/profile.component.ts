import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  posts: any;

  constructor(private _backendService: BackendService, private _router: Router) {
    this._backendService.getUser()
    .subscribe(
      data => {
        console.log(data)
        this.user = data
      },
      error => this._router.navigate(['/login'])
    )

    setTimeout(() => {
      this._backendService.getUserById(this.user._id)
      .subscribe(
        data => {
          this.user = data
        },
        error => console.log(error)
      )

      this._backendService.getPostsByAuthor(this.user._id)
      .subscribe(
        data => {
          this.posts = data
          this.posts.sort((a:any, b:any) => { return b.creation_date - a.creation_date})
        },
        error => console.log(error)
      )
    }, 100);
  }

  ngOnInit(): void {
  }
  
  encode(str: string){
    return encodeURIComponent(str)
  }

  formatDate(date: string){
    let localDate = new Date(+date).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return localDate
  }

  calculateReadTime(text: string){
    let minutes = text.split(/\s/g).length / 200;
    let readTime = Math.ceil(minutes);
    return readTime;
  }

  splitFirstParagraph(text: string){
    return text.split('\n')[0]
  }

  removePost(id: string){
    if(confirm("Você tem certeza que deseja remover essa postagem?")){
      this._backendService.removePost(id)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      )
    }
  }
}
