import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {

  public username;
  public jwtToken;
  public roles;
  public myUser;

  constructor() { }

  ngOnInit(): void {
  }









  getUser(){
    this.jwtToken=localStorage.getItem('token') ;
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
    this.myUser = jwtHelper.decodeToken(this.jwtToken).user;
    this.username = this.myUser.username;
  }

}
