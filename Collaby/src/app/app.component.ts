import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { CookieService } from 'ngx-cookie-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { HttpService } from './services/http.service';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Collaby';

  constructor(private cookieService:CookieService, private _http: HttpService){

  }
  validToken:Boolean = false;

  logout(){
    this.cookieService.set('Token', '')
    console.log('Successfully logged out')
  }

  ngOnInit(){
    var tokenString = new String;
  
    try{
      tokenString = this.cookieService.get('Token') //check if the token cookie exists
      console.log(tokenString);
    
      if(tokenString != ""){

        this._http.checkToken().subscribe(data=>{
          
          if(!data.response){
            this.cookieService.set('Token', "");
            console.log("cookie is set to ''");
            alert("Loggin Session has expired")
          }else{
            this.validToken = true;
            console.log("Token is still valid")
          }
        })
      }else{
        console.log("token contains an empty value")
      }
      console.log("Test complete")

    }catch{
      console.log("Failed to grab token from cookie; a placeholder has been implemented")
      this.cookieService.set('Token', "")
    }
  }

}