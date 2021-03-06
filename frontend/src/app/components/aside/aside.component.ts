import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css', './aside.responsivity.css']
})
export class AsideComponent implements OnInit {

  @Input() posts: any;
  topics: any = {};
  dates: any = {};
  
  constructor() { }

  ngOnInit(): void {
    this.formatTopics()
    this.formatDates()
  }

  formatTopics(){
    this.posts.forEach((post: any) => {
      post.topics.forEach((topic: any) => {
        if(this.topics[topic]){
          this.topics[topic] += 1
        } else {
          this.topics[topic] = 1
        }
      });
    });
    console.log(this.topics)
  }

  formatDates(){
    this.posts.forEach((post: any) => {
      let dateString = new Date(+post.creation_date).toLocaleDateString('pt-BR', {year: 'numeric', month: 'long'});
      dateString = dateString.charAt(0).toUpperCase() + dateString.slice(1)
      if(this.dates[dateString]){
        this.dates[dateString] += 1
      } else {
        this.dates[dateString] = 1
      }
    });
    console.log(this.dates)
  }

  keyDescOrder = (a: KeyValue<string,number>, b: KeyValue<string,number>): number => {
    return a.value > b.value ? -1 : (b.value > a.value ? 1 : 0);
  }

  slugify(str: string){
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();

    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaaeeeeiiiioooouuuunc------";
  
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
  
    str = str.replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  
    return str;
  }
}
