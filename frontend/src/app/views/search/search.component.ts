import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  posts: any;
  query = '';

  constructor(private _route: ActivatedRoute, private _backendService: BackendService, private _location: Location) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.query = params.query;
    });

    this._backendService.getAllPosts()
    .subscribe(
      data => {
        this.posts = data
        let formattedPosts: any = []
        this.posts.forEach((post: any) => {
          let title = this.slugify(post.title)
          if(title.includes(this.query)){
            formattedPosts.push(post)
          }
        });
        this.posts = formattedPosts
        this.posts.sort((a:any, b:any) => { return b.creation_date - a.creation_date})
      },
      error => console.log(error)
    )
  }

  navigateBack(){
    this._location.back();
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
