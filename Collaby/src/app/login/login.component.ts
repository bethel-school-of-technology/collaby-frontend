import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lengthCheck() {
    let functionPassword = (<HTMLInputElement>document.getElementById("password")).value
    if (functionPassword.length <= 8 || functionPassword.length >= 20) {
      alert("Password length must be between 8 and 20 characters.")
    }
  }
}
