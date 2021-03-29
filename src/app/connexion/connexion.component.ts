import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService} from 'src/Services/authentication.service';
import { HttpErrorResponse} from '@angular/common/http'
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  response;
  isSuccess = 0;
  token;

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
        this.token = this.authService.loadToken();
        if(this.token!=null ){ 
          this.router.navigateByUrl("/accueil");
      }
  }

  onLogin(user)
  {

      this.authService.login(user)
      .subscribe(
          resp => {
            let jwt = resp.headers.get('authorization');
            this.response = resp;
            if(this.response.body != null)
                this.response = this.response.body.message

           console.log("hadi jwt ", jwt);

           this.isSuccess = 1;
            console.log(this.isSuccess)
            
            if(jwt!=null ){ 
                this.authService.saveToken(jwt);
                this.router.navigateByUrl("/accueil");
            }
            
          } 
      )
  }
  
  catchError()
  {


  }

}

