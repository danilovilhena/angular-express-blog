import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any;
  
  constructor(private _backendService: BackendService) {
    this._backendService.getAllPosts()
    .subscribe(
      data => {
        this.posts = data;
        this.posts.sort((a:any, b:any) => { return b.creation_date - a.creation_date})
        console.log(this.posts)
      },
      error => {console.log(error)}
    )
  }

  ngOnInit(): void {
  }

}
