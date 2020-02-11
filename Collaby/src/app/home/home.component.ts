import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service'

import { Message } from '@angular/compiler/src/i18n/i18n_ast';

import { Post } from '../models/Post'
import { CreatePost } from '../models/CreatePost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http: HttpService) { }

  posts: Post[]

  postArray: Post[]

  @Input() postToCreate: CreatePost = new CreatePost

  submitPosts() {
    this._http.postPosts(this.postToCreate)
    console.log("working")
  }

  deleteMyPost(post: Post) {
    //deletes post from UI
    this.posts = this.posts.filter(p => p.Id == post.Id)
    //deletes post from database
    this._http.deletePost(post).subscribe();
  }

  ngOnInit() {
    this._http.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts)
    })
  }

}
