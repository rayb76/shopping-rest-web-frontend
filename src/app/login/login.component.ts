/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username = 'Shopper'
  password = 'genius'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  name: any;
  route: any;

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit(){


    }


  handleLogin(){
    // console.log(this.username);
     //if(this.username==="Shopper" && this.password === 'genius') {
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
        //Redirect to Welcome Page
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      } else {
        this.invalidLogin = true
      }
    }

  }



