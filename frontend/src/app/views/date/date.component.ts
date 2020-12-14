import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css', './date.responsivity.css']
})
export class DateComponent implements OnInit {

  year = '';
  month = '';
  date = '';
  posts: any;

  constructor(private _route: ActivatedRoute, private _location: Location, private _backendService: BackendService) {
    this._route.params.subscribe((params: Params) => {
      this.year = params.year;
      this.month = this.capitalize(params.month);
      this.date = this.month + " de " + this.year
      console.log(this.year, this.month)
    });

    this._backendService.getAllPosts()
    .subscribe(
      data => {
        this.posts = data; 
        this.formatPosts(); 
        this.posts.sort((a:any, b:any) => { return b.creation_date - a.creation_date})
      },
      error => console.log(error)
    )
  }

  ngOnInit(): void {
  }

  navigateBack(){
    this._location.back();
  }

  capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  formatPosts(){
    let formattedPosts: any = [];
    this.posts.forEach((post: any) => {
      let dateString = new Date(+post.creation_date).toLocaleDateString('pt-BR', {year: 'numeric', month: 'long'});
      dateString = dateString.charAt(0).toUpperCase() + dateString.slice(1)

      if(dateString.includes(this.month) && dateString.includes(this.year)){
        formattedPosts.push(post)
      }
    });
    this.posts = formattedPosts;
  }
}
