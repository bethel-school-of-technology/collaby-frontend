import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CreatePost } from '../models/CreatePost';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { Login } from "../models/Login"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
const apiUrl = 'https://localhost:5001/api/'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  results = []

  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(apiUrl+'posts')
  }

  postPosts() {

    let jsonObj = JSON.stringify({ "Message": (<HTMLInputElement>document.getElementById("message")).value, "Title": (<HTMLInputElement>document.getElementById("title")).value , "UserId": 1 })
    return this.http.post<any>(apiUrl+'posts', jsonObj, httpOptions)
  }

  getToken(loginModel:Login){
    let jsonObj = JSON.stringify(loginModel)

    return this.http.post<any>(apiUrl+'login', jsonObj, httpOptions)
  }
}
