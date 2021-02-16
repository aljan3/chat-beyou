import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from 'src/Services/authentication.service';
import { User } from 'src/model/model.user' ;
import { feedback } from 'src/model/model.feedback' ;
import { UserDetails } from 'src/model/userDetails' ;


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  UserForm:User = new User();
  mode : number = 0 ;
  confirm : number = 0 ;
  codeInscription ;

  constructor(private authService:AuthenticationService ) { }

  ngOnInit(): void {
  }

  saveUser()
  {
      this.UserForm.appUserDetails.justificatif = ""
      this.authService.saveUser(this.UserForm)
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
          this.UserForm.appUserDetails = new UserDetails();
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


}
