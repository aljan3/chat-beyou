import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService} from 'src/Services/authentication.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  mode:number= 0 ;

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  let token = this.authService.loadToken();


  }
  onLogin(user)
  {
      this.authService.login(user)
      .subscribe(
          resp => {
            let jwt = resp.headers.get('authorization');
             this.authService.saveToken(jwt);
             console.log("hadi resp "  + resp) ;

            this.mode=2 ;
                  this.router.navigateByUrl("/postes");


          } ,
          err => {
            console.log(err) ;
            this.mode = 1;
          }
      )
  }
  catchError()
  {


  }

}

