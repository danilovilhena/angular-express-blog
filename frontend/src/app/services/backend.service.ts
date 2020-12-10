import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }

  getAllUsers(){
    return this._http.get('http://localhost:3000/users/get', {
      observe: 'body'
    })
  }

  getUserById(id: string){
    return this._http.get(`http://localhost:3000/users/get_id/${id}`, {
      observe: 'body'
    })
  }

  alterUser(id: string, body: any){
    return this._http.patch(`http://localhost:3000/users/patch/${id}`, body, {
      observe: 'body'
    })
  }

  removeUser(id: string){
    return this._http.delete(`http://localhost:3000/users/delete/${id}`)
  }

  registerUser(body: any){
    return this._http.post('http://localhost:3000/users/register', body, {
      observe: 'body'
    })
  }

  loginUser(body: any){
    return this._http.post('http://localhost:3000/users/login', body, {
      observe: 'body'
    })
  }

  getUser(){
    return this._http.get('http://localhost:3000/users/user', {
      observe: 'body',
      params: new HttpParams().append("token", localStorage.getItem("token")!)
    })
  }
}
