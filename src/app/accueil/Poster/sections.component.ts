import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService} from 'src/Services/authentication.service';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {


  public sections ;
  public sectionName =" ";
  public _subscription;

  constructor(private authService : AuthenticationService ,  private router:Router ) {

    this.sectionName = authService.sectionName;
    this._subscription = authService.sectionNameChangeEvent.subscribe((value) => { 
      this.sectionName = value;
    });

   }
  ngOnInit(): void {

    //sections
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
