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
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent

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
