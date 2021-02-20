import { UserDetails } from 'src/model/userDetails' ;

export class User {
     nom:string="";
     prenom : string ="";
     username : string="" ;
     age : string="" ;
  	 email : string ="";
     sexe: string="" ;
  	 telephone: string="" ;
     password:string="" ;
     repassword:string="";
     codeInscription:string="";
     pays : string = "" ;
     ville : string = "" ;
     appUserDetails:UserDetails = new UserDetails();


}
