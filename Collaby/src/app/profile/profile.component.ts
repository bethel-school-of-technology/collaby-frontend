import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Profile } from '../models/Profile'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _http: HttpService) { }

  profile: any
  imgUrl:string = null

  userPosts

  ngOnInit() {
    this._http.getProfile().subscribe(data => {
      this.profile = data;
      console.log(this.profile)
    })
    this._http.getPostsOfUser().subscribe(data => {
      this.userPosts = data;
      console.log(this.userPosts)
    })
  }
}
