import { Injectable } from '@angular/core';

import { HttpClient , HttpHeaders , HttpResponse , HttpParams} from '@angular/common/http';
import {Observable, Subject} from "rxjs" ;
import { User } from 'src/model/model.user' ;
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { feedback } from 'src/model/model.feedback' ;

@Injectable()

export class AuthenticationService{
    private host:string="http://localhost:8080";
    private jwtToken ;
    private message  ;
    public postes;
    public sectionName = " ";
    public roles;

    sectionNameChangeEvent: Subject<string> = new Subject<string>();
    constructor (private http:HttpClient){
        
      this.sectionName = " ";

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
      return this.jwtToken

    }


  getPostes()
  {
    if(this.jwtToken==null)
         this.loadToken() ;
    return this.http.get(this.host+"/postes?projection=p2&size=120",{ headers : new HttpHeaders({ 'authorization' : this.jwtToken}) } ) ;
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

  getPostesSection()
  {
          if(this.jwtToken==null)
              this.loadToken() ;
          console.log("hahyaa    " + this.sectionName )       
          let params = new HttpParams()
              .set('sectionName',this.sectionName)

          return this.http.get(this.host+"/getPostes",{params: params} );
        
      }

    changeSectionName(nom){
      this.sectionName = nom;
      this.sectionNameChangeEvent.next(this.sectionName);
    }

}
