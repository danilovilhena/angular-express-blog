import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() items:any = [];
  pageOfItems: Array<any> = [];


  constructor() { }

  ngOnInit(): void {
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
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

  splitFirstParagraph(text: string){
    return text.split('\n')[0]
  }

}
