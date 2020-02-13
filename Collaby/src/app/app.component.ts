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
import { HttpClientModule } from '@angular/common/http'
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
  responseString:string = "";
  tokenString:string = "";

  logout(){
    this.cookieService.set('Token', null)
  }
  
  //handleError(error: HttpErrorResponse){
  //  console.log("problem?");
  //  return throwError(error);
  //}

  ngOnInit(){
  
    try{
      this.tokenString = this.cookieService.get('Token') //check if the token cookie exists
      console.log(this.tokenString)
    
      if(this.tokenString != ""){

        this._http.checkToken().subscribe(data=>{
          this.responseString = data.response

          if(this.responseString != "Token is still valid"){
            this.cookieService.set('Token', "");
            console.log("cookie is set to ''");
            //alert("Loggin Session has expired")
          }else{
            this.validToken = true;
            console.log(data.response)
          }
        })
          //this.cookieService.set('Token', this.tokenString)
      }
      console.log("Test complete")

    }catch{
      this.cookieService.set('Token', "")
      console.log("cookieValue is set to ''")
    }
  }
}