import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from 'src/Services/authentication.service';
import { User } from 'src/model/model.user' ;
import { feedback } from 'src/model/model.feedback' ;
import { UserDetails } from 'src/model/userDetails' ;
import { Router } from '@angular/router' ;
import { Domaine } from  'src/model/module.domaine' ;


@Component({
  selector: 'app-inscription-abonne',
  templateUrl: './inscription-abonne.component.html',
  styleUrls: ['./inscription-abonne.component.css']
})
export class InscriptionAbonneComponent implements OnInit {
  UserForm:User = new User();
  UserFormDetails : UserDetails = new UserDetails() ;
  //UserDomaine : Domaine = new Domaine() ;
  mode : number = 0 ;
  confirm : number = 0 ;
  codeInscription ;
  public pays ;
  public domaines ;
  public specialites;

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
   this.authService. getDomaines()
        .subscribe(data=>{
        this.domaines =data ;

        }, err=>{
          console.log(err);
          this.router.navigateByUrl("/Connexion");
        });

        //specialites
        this.authService. getSpecialites()
                .subscribe(data=>{
                this.specialites =data ;

                }, err=>{
                  console.log(err);
                  this.router.navigateByUrl("/Connexion");
                });
      }



  saveUser()
    {   /*this.UserDomaine.domaineName= this.UserForm.appUserDetails.domaine.domaineName ;*/
        /*this.UserFormDetails.justificatif= this.UserForm.appUserDetails.justificatif ;*/
       /* this.UserForm.appUserDetails = this.UserFormDetails ;*/
      /*  this.UserForm.appUserDetails.domaine=   this.UserDomaine ;*/
             // this.UserFormDetails.justificatif= this.UserForm.appUserDetails.justificatif ;
             // this.UserForm.appUserDetails = this.UserFormDetails ;


        this.authService.saveUserAbonne(this.UserForm)
       .subscribe(
              data => {
               console.log(data)
               this.mode= 1 ;

              } ,
              err => {
               console.log("yes") ;
              }
          )

     }


      getRandomString(length) {
         var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         var result = '';
         for ( var i = 0; i < length; i++ ) {
             result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
         }
         return result;
     }

     sendEmail()
     {
            this.codeInscription = this.getRandomString(80);

            this.UserForm.codeInscription= this.codeInscription ;

            let email =new feedback("eddahnajla@gmail.com",this.UserForm.email,"http://localhost:4200/confirmEmail?cd="+this.UserForm.codeInscription) ;
            this.saveUser();
            this.authService.sendEmail(email)
            .subscribe(
                        data => {
                         console.log(data)


                        } ,
                        err => {
                         console.log("error") ;
                        }
                    )

         }


     getDomaines()
     {

          this.authService.getDomaines()
                       .subscribe(data=>{
                       this.domaines =data ;

                       }, err=>{
                         console.log(err);
                       });
      }


     }






