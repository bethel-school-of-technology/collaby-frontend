import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { Post } from '../models/Post';
import { CreatePost } from '../models/CreatePost'

import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postUrl = 'https://localhost:5001/api/posts'

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://localhost:5001/api/posts?')
  }

  postPosts(newPost: CreatePost) {
    newPost.UserId = 1;
    let jsonObj = JSON.stringify(newPost);
    return this.http.post<string>(this.postUrl, jsonObj, httpOptions).subscribe();
  }

  deletePost(post: Post) {
    let postBody = JSON.stringify(post)
    let url = `${this.postUrl}/delete`
    return this.http.post<Post>(url, postBody, httpOptions)
  }
}
