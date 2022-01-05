import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent{
  title = 'Login Form';
  loginForm= new FormGroup({
    user:new FormControl(''),
    password:new FormControl(''),
  })
  loginUser(){
    console.warn(this.loginForm.value)
  }
  get user(){
    return this.loginForm.get("user")
  }
  


}
