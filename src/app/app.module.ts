import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router' ;
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService} from 'src/Services/authentication.service';
import { PostesComponent } from './postes/postes.component';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { HeaderComponent } from './header/header.component';
import { InscriptionAbonneComponent} from './inscription-abonne/inscription-abonne.component';
import { DomainesComponent } from './domaines/domaines.component' ;


@NgModule({


  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    PostesComponent,
    ConfirmemailComponent,
    HeaderComponent,
    InscriptionAbonneComponent,
    DomainesComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule ,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
