import { PostesComponent } from './../postes/postes.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService} from 'src/Services/authentication.service';
import { Router } from '@angular/router' ;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {


  public sections ;
  public sectionName =" ";
  public _subscription;
  public username;

  constructor(private authService : AuthenticationService ,  private router:Router ) {

    this.sectionName = authService.sectionName;
    this._subscription = authService.sectionNameChangeEvent.subscribe((value) => { 
      this.sectionName = value;
    });

   }


  ngOnInit(): void {
    //username from jwt
    this.username = this.authService.getUser().username;
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

  addPoste(form, username){
      this.authService.addPoste(form, username).subscribe(data =>{
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Votre poste est publié !',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          window.location.reload()
        }, 2000);
        
      }, err=>{
        console.log(err);
      });
  }

}
