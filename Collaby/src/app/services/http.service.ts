import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Post } from '../models/Post';
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

  results = []

  constructor(private http: HttpClient) { }

  postUrl = 'https://localhost:5001/api/posts'

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://localhost:5001/api/posts?')
  }

  postPosts() {

    let jsonObj = JSON.stringify({ "Message": (<HTMLInputElement>document.getElementById("message")).value, "UserId": 1 })

    return this.http.post<any>(this.postUrl, jsonObj, httpOptions)
  }

  deletePost(post: Post) {
    let postBody = JSON.stringify(post)
    let url = `${this.postUrl}/delete`
    return this.http.post<Post>(url, postBody, httpOptions)
  }
}
