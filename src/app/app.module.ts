import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { InscriptionAbonneComponent } from './inscription-abonne/inscription-abonne.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router' ;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService} from 'src/Services/authentication.service';
import { HeaderComponent } from './header/header.component';
import { ProfilComponent } from './home/profil/profil.component';
import { ContainerComponent } from './home/container/container.component';
import { PostComponent } from './home/post/post.component';
import { RightBarComponent } from './home/right-bar/right-bar.component';
import { ChatComponent } from './home/chat/chat.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({


  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    DeconnexionComponent,
    ConfirmemailComponent,
    InscriptionAbonneComponent,
    HeaderComponent,
    ProfilComponent,
    ContainerComponent,
    PostComponent,
    RightBarComponent,
    ChatComponent,
    MonProfilComponent,
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
