import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PostesComponent } from './postes/postes.component';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import {  HeaderComponent } from './header/header.component';
import { InscriptionAbonneComponent} from './inscription-abonne/inscription-abonne.component' ;
import {  DomainesComponent  } from './domaines/domaines.component';
import {  AfficherPostesComponent  } from './afficher-postes/afficher-postes.component';






const appRoutes:Routes= [
  { path:"inscription",component: InscriptionComponent } ,
   { path:"Connexion",component: ConnexionComponent } ,
   { path:"postes",component: PostesComponent } ,
{ path:"confirmEmail",component: ConfirmemailComponent }  ,
{ path :"inscription/abonne" , component : InscriptionAbonneComponent  } ,
{ path : "domaines" , component : DomainesComponent } ,
{ path : "afficherPoste" , component : AfficherPostesComponent } ,





   { path:"",
    redirectTo: "/Connexion",
    pathMatch:'full'
    }

] ;

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
