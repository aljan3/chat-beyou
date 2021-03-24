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
  public postes;
  constructor(private authService : AuthenticationService ,  private router:Router) { }

  ngOnInit() {

    
    //postes
    this.authService.getPostes()
    .subscribe(data=>{
    this.postes =data ;

    }, err=>{
      console.log(err);
      this.router.navigateByUrl("/Connexion");
    });
  }

}
