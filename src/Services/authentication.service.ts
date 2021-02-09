import { Injectable } from '@angular/core';

import { HttpClient , HttpHeaders , HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs" ;
@Injectable()

export class AuthenticationService{
    private host:string="http://localhost:8080";
    constructor (private http:HttpClient){

    }


   login(user)
  {
    return this.http.post(this.host+"/login",user,{observe : 'response'}) ;
  }

}
