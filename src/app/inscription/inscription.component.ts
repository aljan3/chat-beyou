import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from 'src/Services/authentication.service';
import { User } from 'src/model/model.user' ;


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  UserForm:User = new User();
  mode : number = 0 ;
  constructor(private authService:AuthenticationService ) { }

  ngOnInit(): void {
  }
  saveUser()
  {

      this.authService.saveUser(this.UserForm)
     .subscribe(
            data => {
             console.log(data)
             this.mode= 1 ;

            } ,
            err => {
             console.log("error") ;
            }
        )

    }





  }


