import { Injectable } from '@angular/core';

import { HttpClient , HttpHeaders , HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs" ;
import { User } from 'src/model/model.user' ;
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class AuthenticationService{
    private host:string="http://localhost:8080";
    private jwtToken ;
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
  saveToken(jwt)
  {
    localStorage.setItem('token', jwt);
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
  sendEmail()
  {

  }


}
