import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service'
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Post } from '../models/Post'
import { CreatePost } from '../models/CreatePost';
import { CookieService } from 'ngx-cookie-service';
import { Rating } from '../models/Rating';
import { CreateComment } from '../models/CreateComment';
import { Comment } from '../models/Comment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private _http: HttpService, private cookieService: CookieService, @Inject(DOCUMENT) document) { }

  posts: Post[]
  postArray: Post[]

  comments: Comment[]
  comment: Comment

  @Input() postToCreate: CreatePost = new CreatePost
  @Input() postRating: Rating = new Rating
  @Input() commentToCreate: CreateComment = new CreateComment

  submitPosts() {
    this._http.createPosts(this.postToCreate).subscribe(data => console.log(data.response));
    setTimeout(function () { window.location.replace('/'); }, 500);
  }

  deleteMyPost(post: Post) {
    //deletes post from database
    this._http.deletePost(post).subscribe(data => console.log(data.response));
    setTimeout(function () { window.location.replace('/'); }, 500);
  }

  submitRating() {
    this._http.ratePost().subscribe(data => console.log(data.response))
  }

  ngOnInit() {
    this._http.getTopRatedPosts().subscribe(data => {
      this.posts = data
      console.log(this.posts)
    })
  }


  viewComments(postId) {
    this._http.getComments(postId).subscribe(data => {
      this.comments = data;
      console.log(this.comments)
    })
  }

  submitComment(postId) {
    this.commentToCreate.PostId = postId
    this._http.createComment(this.commentToCreate).subscribe(data => alert(data.response))
  }
}