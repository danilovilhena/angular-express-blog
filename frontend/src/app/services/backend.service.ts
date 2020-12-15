import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }

  // User related
  getAllUsers(){
    return this._http.get('https://vilhena-blog-backend.herokuapp.com/users/get', {
      observe: 'body'
    })
  }

  getUserById(id: string){
    return this._http.get(`https://vilhena-blog-backend.herokuapp.com/users/get_id/${id}`, {
      observe: 'body'
    })
  }

  alterUser(id: string, body: any){
    return this._http.patch(`https://vilhena-blog-backend.herokuapp.com/users/patch/${id}`, body, {
      observe: 'body'
    })
  }

  removeUser(id: string){
    return this._http.delete(`https://vilhena-blog-backend.herokuapp.com/users/delete/${id}`)
  }

  registerUser(body: any){
    return this._http.post('https://vilhena-blog-backend.herokuapp.com/users/register', body, {
      observe: 'body'
    })
  }

  loginUser(body: any){
    return this._http.post('https://vilhena-blog-backend.herokuapp.com/users/login', body, {
      observe: 'body'
    })
  }

  getUser(){
    return this._http.get('https://vilhena-blog-backend.herokuapp.com/users/user', {
      observe: 'body',
      params: new HttpParams().append("token", localStorage.getItem("token")!)
    })
  }

  // Post related
  createPost(body: any){
    return this._http.post('https://vilhena-blog-backend.herokuapp.com/posts/create', body, {
      observe: 'body'
    })
  }

  getAllPosts(){
    return this._http.get('https://vilhena-blog-backend.herokuapp.com/posts/get', {
      observe: 'body'
    })
  }

  getPostsByAuthor(id: string){
    return this._http.get(`https://vilhena-blog-backend.herokuapp.com/posts/author/${id}`, {
      observe: 'body'
    })
  }

  getPostsByTopic(topic: string){
    return this._http.get(`https://vilhena-blog-backend.herokuapp.com/posts/topic/${topic}`, {
      observe: 'body'
    })
  }

  getPostById(id: string){
    return this._http.get(`https://vilhena-blog-backend.herokuapp.com/posts/post/${id}`, {
      observe: 'body'
    })
  }

  removePost(id: string){
    return this._http.delete(`https://vilhena-blog-backend.herokuapp.com/posts/delete/${id}`)
  }
}
