import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  BASE_URL = "https://vilhena-blog-backend.herokuapp.com";
  // BASE_URL = "http://localhost:3000";

  constructor(private _http: HttpClient) { }

  // User related
  getAllUsers(){
    return this._http.get(`${this.BASE_URL}/users/get`, {
      observe: 'body'
    })
  }

  getUserById(id: string){
    return this._http.get(`${this.BASE_URL}/users/get_id/${id}`, {
      observe: 'body'
    })
  }

  alterUser(id: string, body: any){
    return this._http.patch(`${this.BASE_URL}/users/patch/${id}`, body, {
      observe: 'body'
    })
  }

  removeUser(id: string){
    return this._http.delete(`${this.BASE_URL}/users/delete/${id}`)
  }

  registerUser(body: any){
    return this._http.post(`${this.BASE_URL}/users/register`, body, {
      observe: 'body'
    })
  }

  loginUser(body: any){
    return this._http.post(`${this.BASE_URL}/users/login`, body, {
      observe: 'body'
    })
  }

  getUser(){
    return this._http.get(`${this.BASE_URL}/users/user`, {
      observe: 'body',
      params: new HttpParams().append("token", localStorage.getItem("token")!)
    })
  }

  // Post related
  createPost(body: any){
    return this._http.post(`${this.BASE_URL}/posts/create`, body, {
      observe: 'body'
    })
  }

  getAllPosts(){
    return this._http.get(`${this.BASE_URL}/posts/get`, {
      observe: 'body'
    })
  }

  getPostsByAuthor(id: string){
    return this._http.get(`${this.BASE_URL}/posts/author/${id}`, {
      observe: 'body'
    })
  }

  getPostsByTopic(topic: string){
    return this._http.get(`${this.BASE_URL}/posts/topic/${topic}`, {
      observe: 'body'
    })
  }

  getPostById(id: string){
    return this._http.get(`${this.BASE_URL}/posts/post/${id}`, {
      observe: 'body'
    })
  }

  removePost(id: string){
    return this._http.delete(`${this.BASE_URL}/posts/delete/${id}`)
  }
}
