import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isHome = document.location.pathname == '/';
  isAbout = document.location.pathname.includes('sobre');
  isTopics = document.location.pathname.includes('assunto');
  loggedIn = false;
  
  constructor() { }

  ngOnInit(): void { 

  }
}
