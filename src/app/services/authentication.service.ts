import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable( )

export class AuthenticationService{
    private host:string="http://localhost:8080";
    constructor (private http:HttpClient){

    }


   login(user:any)
  {
    return this.http.post(this.host+"/Connexion",user,{observe : 'response'}) ;
  }

}
