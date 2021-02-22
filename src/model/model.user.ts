import { UserDetails } from 'src/model/userDetails' ;
import { Domaine } from 'src/model/module.domaine' ;


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
     domaineName:string = "";
     specialiteName:string ="";


}
