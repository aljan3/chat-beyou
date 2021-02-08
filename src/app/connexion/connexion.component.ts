import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from 'src/Services/authentication.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  mode:number= 0 ;

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }
  login(user)
  {
      this.authService.login(user)
      .subscribe(
          resp => {
            let jwt = resp.headers.get('authorization');
            console.log(jwt);
          } ,
          err => {
            this.mode = 1;
          }
      )
  }

}

