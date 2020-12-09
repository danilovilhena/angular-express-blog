import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }

  registerUser(body: any){
    return this._http.post('http://localhost:3000/users/register', body, {
      observe: 'body'
    })
  }
}
