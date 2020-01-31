import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://localhost:5001/api/posts')
  }
  postPosts() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let postObj =
      { "message": "test post frontend" }
    let jsonObj = JSON.stringify(postObj)
    console.log(JSON.stringify(postObj))
    this.http.post<any>('https://localhost:5001/api/posts', jsonObj, httpOptions)
  }
}
