import { Injectable } from '@angular/core';


import { HttpClient , HttpHeaders , HttpResponse , HttpParams} from '@angular/common/http';
import {Observable, Subject} from "rxjs" ;
import { User } from 'src/model/model.user' ;
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { feedback } from 'src/model/model.feedback' ;
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()

export class AuthenticationService{
    private host:string="http://localhost:8080";
    private jwtToken ;
    private message  ;
    public postes;
    public sectionName = " ";
    public roles:Array<any>=[];
    public myUser;
    public username ; 

    sectionNameChangeEvent: Subject<string> = new Subject<string>();

    constructor (private http:HttpClient){
        
      this.sectionName = " ";

    }   

   login(user)
  {
    this.loadToken();
    return this.http.post(this.host+"/login",user,{observe : 'response'}) ;
  }

  logout(){
    this.jwtToken = null;
    localStorage.removeItem('token');
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
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(jwt).roles;
    this.myUser = jwtHelper.decodeToken(jwt).user.username;
    console.log("hahdo user  ",this.myUser);

  }

  loadToken()
    {
      this.jwtToken=localStorage.getItem('token') ;
      
      return this.jwtToken

    }

    //get User From Token
    getUser(){
      console.log(this.loadToken())
      let jwtHelper = new JwtHelperService();
      this.roles = jwtHelper.decodeToken(this.loadToken()).roles;
      this.myUser = jwtHelper.decodeToken(this.loadToken()).user;
      return this.myUser;
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

    addPoste(form , username){
      let params = new HttpParams()
      .set('sectionName', form.sectionName)
      .set('contenu',form.contenu)
      .set('username',username);
      console.log("params  ",params)
      return this.http.get("http://localhost:8080/addPoste",{params: params} )
    }

    

}
