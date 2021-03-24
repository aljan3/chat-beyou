import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from 'src/Services/authentication.service';
import { Router } from '@angular/router' ;
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {

  public sections ;
  constructor(private authService : AuthenticationService ,  private router:Router) { }

  ngOnInit(): void {

    this.authService.getSections()
    .subscribe(data=>{
    this.sections = data ;
      console.log(this.sections)
    }, err=>{
      console.log(err);
      this.router.navigateByUrl("/Connexion");
    });

  }


}
