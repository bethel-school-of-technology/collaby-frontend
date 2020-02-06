import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service'
import { CreatePost } from '../models/CreatePost'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Post } from '../models/Post'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http: HttpService) { }

  posts: Post[]

  submitPosts() {
    this._http.postPosts().subscribe(data=>console.log(data.response));
  }

  ngOnInit() {
    this._http.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts)
    })
  }
}