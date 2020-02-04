import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';

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

  post: Object

  postUrl = 'https://localhost:5001/api/posts'

  getPosts() {
    return this.http.get('https://localhost:5001/api/posts')
  }

  postPosts() {

    let jsonObj = JSON.stringify({ "Message": (<HTMLInputElement>document.getElementById("message")).value, "UserId": 1 })

    return this.http.post<any>(this.postUrl, jsonObj, httpOptions).subscribe()
  }
}
