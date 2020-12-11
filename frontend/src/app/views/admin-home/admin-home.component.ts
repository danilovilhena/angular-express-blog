import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  users: any;
  posts: any;
  
  constructor(private _backendService: BackendService, private _router: Router) {
    this._backendService.getAllUsers()
    .subscribe(
      data => {
        this.users = data
        console.log(this.users)
      },
      error => console.log(error)
    )

    this._backendService.getAllPosts()
    .subscribe(
      data => {
        this.posts = data
        console.log(this.posts)
      },
      error => console.log(error)
    )
  }

  ngOnInit(): void {
  }

}
