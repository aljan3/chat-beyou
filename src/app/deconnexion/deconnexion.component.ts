import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/Services/authentication.service';
import { Router } from '@angular/router' ;


@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router:Router) { }

  ngOnInit(): void {

      this.authService.logout();
      this.router.navigateByUrl("/Connexion")


  }

}
