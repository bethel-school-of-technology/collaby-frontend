import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service'
import { Post } from '../models/Post'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http: HttpService) { }

  posts: Post[]

  postArray: Post[]



  submitPosts() {
    this._http.postPosts()
  }

  deleteMyPost(post: Post) {
    this.posts = this.posts.filter(p => p.id !== post.id)
    this._http.deletePost(post).subscribe();
    console.log('delete me')
  }

  ngOnInit() {
    this._http.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts)
    })
  }

}
