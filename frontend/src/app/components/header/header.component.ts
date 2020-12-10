import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  isHome = document.location.pathname == '/';
  isAbout = document.location.pathname.includes('sobre');
  isTopics = document.location.pathname.includes('assunto');
  loggedIn = false;
  
  constructor(private _backendService: BackendService, private _router: Router) {
    this._backendService.getUser()
    .subscribe(
      data => {
        console.log(data)
        this.user = data
        this.loggedIn = true
      },
      error => console.log(error)
    )
  }

  ngOnInit(): void { 

  }

  logout(){
    localStorage.removeItem('token')
    this.loggedIn = false
    this._router.navigate(['/'])
  }

  encode(str: string){
    return encodeURIComponent(str)
  }
}
