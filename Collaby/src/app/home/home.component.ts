import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service'

import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Post } from '../models/Post'
import { CreatePost } from '../models/CreatePost';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http: HttpService, private cookieService:CookieService) { }

  posts: Post[]

  postArray: Post[]

  @Input() postToCreate: CreatePost = new CreatePost

  submitPosts() {
    this._http.createPosts(this.postToCreate).subscribe(data=>console.log(data.response))
  }

  deleteMyPost(post: Post) {
    //deletes post from UI
    this.posts = this.posts.filter(p => p.Id == post.Id)
    //deletes post from database
    this._http.deletePost(post).subscribe(data=>console.log(data.response));
  }
  
  ngOnInit() {
    console.log(this.cookieService.get('Token'))
    this._http.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts)
    })
  }
}