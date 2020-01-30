import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'


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

  constructor(private http: HttpClient) { }

  postMessage;

  postURL = 'https://api.github.com/users/brandenkenn';

  ngOnInit() {
    let blog = this.http.get<any>(this.postURL)
    console.log(blog + " it works!")
  }

  submitPosts() {

  }

}
