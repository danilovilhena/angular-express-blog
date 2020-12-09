import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email = '';

  constructor(private _backendService: BackendService, private _router: Router) {
    this._backendService.getUser()
    .subscribe(
      data => {
        console.log(data)
        this.email = data.toString()
      },
      error => this._router.navigate(['/login'])
    )
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }

}
