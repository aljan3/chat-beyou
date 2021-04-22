import { ContainerComponent } from './home/container/container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { InscriptionAbonneComponent} from './inscription-abonne/inscription-abonne.component' ;
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';



const appRoutes:Routes= [
  { path:"inscription",component: InscriptionComponent } ,
   { path:"Connexion",component: ConnexionComponent } ,
{ path:"confirmEmail",component: ConfirmemailComponent }  ,
{ path :"inscription/abonne" , component : InscriptionAbonneComponent  } ,

    { path:"accueil",component: ContainerComponent } ,
    { path:"profil",component: MonProfilComponent } ,
    { path : "logout" , component : DeconnexionComponent }, 
   
    { path:"",
    redirectTo: "/Connexion",
    pathMatch:'full'
    },


] ;

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
