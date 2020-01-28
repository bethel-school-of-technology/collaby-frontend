import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  postURL = 'https://localhost:5001/api/posts';

  submitPosts() {
    let postText = (<HTMLInputElement>document.getElementById("postText")).value
    this.http.post(this.postURL, postText)
    console.log("It works!")
  }

}
