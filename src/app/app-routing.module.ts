import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PostesComponent } from './postes/postes.component';



const appRoutes:Routes= [
  { path:"inscription",component: InscriptionComponent } ,
   { path:"Connexion",component: ConnexionComponent } ,
   { path:"postes",component: PostesComponent } ,


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
