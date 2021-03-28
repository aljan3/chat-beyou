import { RightBarComponent } from './../accueil/right-bar/right-bar.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService} from 'src/Services/authentication.service';
import { Router } from '@angular/router' ;





@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.css']
})
export class PostesComponent implements OnInit {

  public sections ;
  public sectionName;
  public postes;
  public _subscription;
  constructor(private authService : AuthenticationService ,  private router:Router ) {
    this.sectionName = authService.sectionName;
    this._subscription = authService.sectionNameChangeEvent.subscribe((value) => { 
      this.sectionName = value;
      console.log("hazd  "+this.sectionName); 
      this.authService.getPostesSection()
          .subscribe(data=>{
          this.postes =data ;
            console.log(this.postes)
          }, err=>{
            console.log(err);
            this.router.navigateByUrl("/Connexion");
          });
    });
   }

  ngOnInit() {
    //postes
    this.authService.getPostesSection()
    .subscribe(data=>{
    this.postes =data ;
      console.log(this.postes)
    }, err=>{
      console.log(err);
      this.router.navigateByUrl("/Connexion");
    });
  }

  /*public changePostes(){
    this.postes = this.rightBar.getPostesSection();
  }
*/



}
