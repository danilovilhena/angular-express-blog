import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-article',
  templateUrl: './main-article.component.html',
  styleUrls: ['./main-article.component.css']
})
export class MainArticleComponent implements OnInit {

  @Input() post:any = {};

  constructor() { }

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
}
