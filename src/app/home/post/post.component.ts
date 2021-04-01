import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from 'src/Services/authentication.service';

@Component({
  selector: 'app-home-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  public sections ;
  public sectionName;
  public postes;
  public _subscription;

  public username;
  public jwtToken;
  public roles;
  public myUser;

  constructor(private authService : AuthenticationService ,  private router:Router ) {
    this.sectionName = authService.sectionName;
    this._subscription = authService.sectionNameChangeEvent.subscribe((value) => { 
      this.sectionName = value;
      this.authService.getPostesSection()
          .subscribe(data=>{
          this.postes =data ;
          }, err=>{
            this.router.navigateByUrl("/Connexion");
          });
    });

    

   }

  ngOnInit() {
    //postes
    this.authService.getPostesSection()
    .subscribe(data=>{
    this.postes =data ;
    }, err=>{
      this.authService.logout();
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
