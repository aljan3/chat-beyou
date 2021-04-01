import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/model/model.user';
import { AuthenticationService } from 'src/Services/authentication.service';

@Component({
  selector: 'app-home-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public user:User = new User();
  public username;
  public jwtToken;
  public roles;
  public myUser;
  public sections;

  constructor(private authService : AuthenticationService ,  private router:Router) {
  }

  ngOnInit(): void {
    this.getUser();

    //sections
    this.authService.getSections()
    .subscribe(data=>{
    this.sections = data ;
      console.log(this.sections)
    }, err=>{
      console.log(err);
      this.router.navigateByUrl("/Connexion");
    });


  }

  


  getUser(){
    this.jwtToken=localStorage.getItem('token') ;
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
    this.myUser = jwtHelper.decodeToken(this.jwtToken).user;
    this.username = this.myUser.username;
  }

}
