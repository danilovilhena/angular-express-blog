import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css', './admin-posts.responsivity.css']
})
export class AdminPostsComponent implements OnInit {

  posts: any;
  
  constructor(private _backendService: BackendService, private _router: Router) {
    this._backendService.getAllPosts()
    .subscribe(
      data => {
        this.posts = data
        this.posts.sort((a:any, b:any) => { return b.creation_date - a.creation_date})
        console.log(this.posts)
      },
      error => console.log(error)
    )
  }

  ngOnInit(): void {
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
