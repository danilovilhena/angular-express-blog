import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css', './article.responsivity.css']
})
export class ArticleComponent implements OnInit {

  id = '';
  post: any;
  author: any;
  constructor(private _route: ActivatedRoute, private _location: Location, private _backendService: BackendService) {}


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params.id;
    });

    this._backendService.getPostById(this.id)
    .subscribe(
      data => this.post = data,
      error => console.log(error)
    )
    
    setTimeout(() => {
      this._backendService.getUserById(this.post.author_id)
      .subscribe(
        data => this.author = data,
        error => console.log(error)
      )
    }, 200);

  }

  navigateBack(){
    this._location.back();
  }

  // Utilitários de exibição
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

  formatTopics(arr: Array<String>){
    let string = ''
    arr.forEach((el) => {
      string += "#" + el.toLowerCase() + " "
    })
    console.log(string)
    return string;
  }

  formatDescription(string: string){
    return string.replace(/(?:\r\n|\r|\n)/g, '<br>')
  }

  encode(str: string){
    return encodeURIComponent(str)
  }
}
