import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  isHome = document.location.pathname.includes('home');
  isUsers = document.location.pathname.includes('usuarios');
  isPosts = document.location.pathname.includes('posts');

  constructor() { }

  ngOnInit(): void {
  }

}
