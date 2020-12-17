import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }

  // User related
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

  // Post related
  createPost(body: any){
    return this._http.post('http://localhost:3000/posts/create', body, {
      observe: 'body'
    })
  }

  getAllPosts(){
    return this._http.get('http://localhost:3000/posts/get', {
      observe: 'body'
    })
  }

  getPostsByAuthor(id: string){
    return this._http.get(`http://localhost:3000/posts/author/${id}`, {
      observe: 'body'
    })
  }

  getPostsByTopic(topic: string){
    return this._http.get(`http://localhost:3000/posts/topic/${topic}`, {
      observe: 'body'
    })
  }

  getPostById(id: string){
    return this._http.get(`http://localhost:3000/posts/post/${id}`, {
      observe: 'body'
    })
  }

  removePost(id: string){
    return this._http.delete(`http://localhost:3000/posts/delete/${id}`)
  }
}