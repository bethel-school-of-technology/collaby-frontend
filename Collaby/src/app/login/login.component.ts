import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../models/Login';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service'
import { CreateUser } from '../models/CreateUser';
import { Password } from '../models/Password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  cookieValue:string;
  @Input() loginModel:Login = new Login;
  @Input() user:CreateUser = new CreateUser;
  @Input() pass:Password = new Password;
  

  constructor( private cookieService: CookieService, private _http: HttpService ) { }

  ngOnInit() {
  }

  passwordCheck() {

    var confirmation:boolean[] = [false,false,false]

    if(this.pass.Pass != this.pass.ConfirmPass){
      return "The Confirmation Password does not match the initial Password."
    }else{
      let functionPassword = this.pass.Pass;

      if (functionPassword.length <= 8 || functionPassword.length >= 20) {
        return "Password length must be between 8 and 20 characters."
      
      }else{
        let i = 0
        while(i < functionPassword.length){
          let asciiVal = functionPassword.charCodeAt(i) //grabbing the ascii value of each character

          if(48 <= asciiVal && 57 >= asciiVal){ //confirm if password has a number
            confirmation[0] = true
          }
          else if(65 <= asciiVal && 90 >= asciiVal){ //confirm if password has an uppercase
            confirmation[1] = true
          }
          else if(97 <= asciiVal && 122 >= asciiVal){ //confirm if password has a lowercase
            confirmation[2] = true
          }
          if(confirmation[0] == true && confirmation[1] == true && confirmation[2] == true){
            return null;
          }
          i++
        }
        return "Your password is missing either a number, captial letter, or lowercase letter"
      }
    }
  }
  
  addUser(){
    var response = this.passwordCheck()
    if(response != null){
      return alert(response)
    }
    else{
      this.user.Password = this.pass.Pass
      this._http.createUser(this.user).subscribe(data=>console.log(data.response))
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