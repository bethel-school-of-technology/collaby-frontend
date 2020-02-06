import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../models/Login';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  cookieValue:string;
  @Input() loginModel:Login = new Login;
  

  constructor( private cookieService: CookieService, private _http: HttpService ) { }

  ngOnInit() {
  }

  lengthCheck() {
    let functionPassword = (<HTMLInputElement>document.getElementById("password")).value
    if (functionPassword.length <= 8 || functionPassword.length >= 20) {
      alert("Password length must be between 8 and 20 characters.")
    }
  }

  login(){
    this._http.getToken(this.loginModel).subscribe(data=>{data.token})
  }

  createCookie(){

    this.cookieService.set( 'Test', 'Hello World' );
    //this.cookieSerive.set('Token',"Bearer:"+getToken())
    this.cookieValue = this.cookieService.get("Test")
  }

}