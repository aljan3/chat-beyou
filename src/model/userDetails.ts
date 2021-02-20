import { Domaine } from 'src/model/module.domaine' ;
import { Specialite } from 'src/model/module.specialite' ;



export class UserDetails {
     justificatif:string="";
     horaire : string ="";
     biographie : string="" ;
     localisation : string="" ;
     domaine: Domaine = new Domaine();
     specialite: Specialite = new Specialite();

}
