import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CreatePost } from '../models/CreatePost';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { Login } from "../models/Login"
import { CreateUser } from '../models/CreateUser';
import { CookieService } from 'ngx-cookie-service';
import { Profile } from '../models/Profile'

/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':this.cookieService.get('Token')
  })
}*/

const apiUrl = 'https://localhost:5001/api/'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions: object;

  constructor(private http: HttpClient, private cookieService: CookieService) {

    const _httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': cookieService.get('Token')
      })
    }

    this.httpOptions = _httpOptions;
  }

  getToken(loginModel: Login) {
    let jsonObj = JSON.stringify(loginModel)
    return this.http.post<any>(apiUrl + 'login', jsonObj, this.httpOptions)
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(apiUrl + 'posts?', this.httpOptions)
  }

  getDrafts(): Observable<Post[]> {
    return this.http.get<Post[]>(apiUrl + 'posts/drafts', this.httpOptions)
  }

  createPosts(newPost: CreatePost) {
    let jsonObj = JSON.stringify(newPost);
    return this.http.post<any>(apiUrl + "posts", jsonObj, this.httpOptions);
  }

  createUser(user: CreateUser) {
    return this.http.post<any>(apiUrl + "users", JSON.stringify(user), this.httpOptions);
  }

  editPost(post: CreatePost) {
    let jsonObj = JSON.stringify(post);
    return this.http.put<any>(apiUrl + "posts", jsonObj, this.httpOptions);
  }

  deletePost(post: Post) {
    let postBody = JSON.stringify(post)
    let url = `${apiUrl + "posts"}/delete`
    return this.http.post<any>(url, postBody, this.httpOptions)
  }

  checkToken() {
    return this.http.get<any>(apiUrl + "login/confirmToken", this.httpOptions)
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(apiUrl + "users/profile", this.httpOptions)
  }

  getPostsOfUser(): Observable<Post[]> {
    return this.http.get<Post[]>(apiUrl + "posts", this.httpOptions)
  }
}
