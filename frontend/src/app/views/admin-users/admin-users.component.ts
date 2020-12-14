import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css', './admin-users.responsivity.css']
})
export class AdminUsersComponent implements OnInit {

  users: any;
  
  constructor(private _backendService: BackendService, private _router: Router) {
    this._backendService.getAllUsers()
    .subscribe(
      data => {
        this.users = data
        console.log(this.users)
      },
      error => console.log(error)
    )
  }

  ngOnInit(): void {
  }

  encode(str: string){
    return encodeURIComponent(str)
  }

  removeUser(id: string){
    if(confirm("Você tem certeza que deseja remover esse usuário?")){
      this._backendService.removeUser(id)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      )
    }
  }
}
