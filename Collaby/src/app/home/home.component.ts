import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Access-Control-Allow-Origin': 'https://localhost:5001',
  //     'userId': '0'
  //   })
  // };

  constructor(private _http: HttpService) { }

  posts: Object;

  ngOnInit() {
    this._http.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts)
    })
  }

  submitPosts() {
    this._http.postPosts()
  }

}
