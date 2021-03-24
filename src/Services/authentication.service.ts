import { Injectable } from '@angular/core';

import { HttpClient , HttpHeaders , HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs" ;
import { User } from 'src/model/model.user' ;
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { feedback } from 'src/model/model.feedback' ;

@Injectable()

export class AuthenticationService{
    private host:string="http://localhost:8080";
    private jwtToken ;
    private message  ;
    public roles;
    constructor (private http:HttpClient){

    }


   login(user)
  {
    this.loadToken();
    return this.http.post(this.host+"/login",user,{observe : 'response'}) ;

  }
  saveUser(UserForm:User)
    {
       let headers = new HttpHeaders();
       //headers.append('Authorization',this.jwtToken);
      return this.http.post(this.host+"/register",UserForm);
    }
    //abonne
    saveUserAbonne(UserForm:User)
        {
           let headers = new HttpHeaders();
           //headers.append('Authorization',this.jwtToken);
          return this.http.post(this.host+"/registerAbonne",UserForm);
        }
  saveToken(jwt)
  {
    localStorage.setItem('token', jwt);
    //let jwtHelper = new JwtHelper();
    //this.roles = jwtHelper.decodeToken(this.jwtToken).roles;

  }

  loadToken()
    {
      this.jwtToken=localStorage.getItem('token') ;
    }


  getPostes()
  {
    if(this.jwtToken==null)
         this.loadToken() ;
    return this.http.get(this.host+"/postes",{ headers : new HttpHeaders({ 'authorization' : this.jwtToken}) } ) ;
   }
  sendEmail(Email:feedback)
  {
    return this.http.post(this.host+"/feedback",Email);
  }
  getPays()
  {
    if(this.jwtToken==null)
             this.loadToken() ;
        return this.http.get(this.host+"/payses",{ headers : new HttpHeaders({ 'authorization' : this.jwtToken}) } ) ;

  }
  getDomaines()
  {     if(this.jwtToken==null)
                  this.loadToken() ;
        return this.http.get(this.host+"/domaines") ;
  }


  getSpecialites()
  {     if(this.jwtToken==null)
            this.loadToken() ;
        return this.http.get(this.host+"/specialites" ) ;
  }

  getSections()
  {     if(this.jwtToken==null)
            this.loadToken() ;
        return this.http.get(this.host+"/sections" ) ;
  }

}
