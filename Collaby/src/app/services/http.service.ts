import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CreatePost } from '../models/CreatePost';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { Login } from "../models/Login"
import { CreateUser } from '../models/CreateUser';

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


  constructor(private http: HttpClient) { }

  getToken(loginModel:Login){
    let jsonObj = JSON.stringify(loginModel)
    return this.http.post<any>(apiUrl+'login', jsonObj, httpOptions)
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(apiUrl+'posts?')
  }

  getDrafts(): Observable<Post[]> {
    return this.http.get<Post[]>(apiUrl+'posts/drafts')
  }

  createPosts(newPost: CreatePost) {
    newPost.UserId = 1;
    let jsonObj = JSON.stringify(newPost);
    return this.http.post<any>(apiUrl+"posts", jsonObj, httpOptions);
  }

  createUser(user:CreateUser){
    return this.http.post<any>(apiUrl+"users", JSON.stringify(user), httpOptions);
  }

  editPost(post:Post){
    post.UserId = 1;
    let jsonObj = JSON.stringify(post);
    return this.http.put<any>(apiUrl+"posts", jsonObj, httpOptions);
  }
  
  deletePost(post: Post) {
    let postBody = JSON.stringify(post)
    let url = `${apiUrl+"posts"}/delete`
    return this.http.post<Post>(url, postBody, httpOptions)
  }
}
