import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from 'src/Services/authentication.service';
import { Router } from '@angular/router' ;
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-domaines',
  templateUrl: './domaines.component.html',
  styleUrls: ['./domaines.component.css']
})
export class DomainesComponent implements OnInit {
   public domaines ;
  constructor( private authService : AuthenticationService ,  private router:Router) { }

  ngOnInit() {
      this.authService. getDomaines()
      .subscribe(data=>{
      this.domaines =data ;

      }, err=>{
        console.log(err);
        this.authService.logout();
        this.router.navigateByUrl("/Connexion");
      });
    }


}
