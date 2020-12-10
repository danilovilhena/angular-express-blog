import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private _backendService: BackendService, private _router: Router) {
    this._backendService.getUser()
    .subscribe(
      data => {
        console.log(data)
        this.user = data
      },
      error => this._router.navigate(['/login'])
    )
  }

  ngOnInit(): void {
  }

}
