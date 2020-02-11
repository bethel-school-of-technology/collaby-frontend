import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private cookieService:CookieService, private _http: HttpService){

    try{
      var tokenString = cookieService.get('Token') //check if the token cookie exists

      if(tokenString != null){
        _http.checkToken().subscribe(data=>console.log(data.response)) //check if token is still valid
      }

    }catch{
      cookieService.set('Token', null)
    }
  }
  
  logout(){
    this.cookieService.set('Token', null)
  }

}
