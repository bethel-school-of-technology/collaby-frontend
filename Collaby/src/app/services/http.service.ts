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

  postUrl = 'https://localhost:5001/api/posts'

  constructor(private http: HttpClient) { }

  getToken(loginModel:Login){
    let jsonObj = JSON.stringify(loginModel)

    return this.http.post<any>(apiUrl+'login', jsonObj, httpOptions)
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://localhost:5001/api/posts?')
  }

  postPosts(newPost: CreatePost) {
    newPost.UserId = 1;
    let jsonObj = JSON.stringify(newPost);
    return this.http.post<any>(this.postUrl, jsonObj, httpOptions);
  }

  deletePost(post: Post) {
    let postBody = JSON.stringify(post)
    let url = `${this.postUrl}/delete`
    return this.http.post<Post>(url, postBody, httpOptions)
  }
}
