import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from 'src/Services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  public sections ;
  public sectionName;
  public postes;
  public _subscription;

  public username;
  public jwtToken;
  public roles;
  public myUser;
//Constructeur
  constructor(private authService : AuthenticationService ,  private router:Router ) {
    this.sectionName = authService.sectionName;
    this._subscription = authService.sectionNameChangeEvent.subscribe((value) => { 
      this.sectionName = value;
      this.authService.getPostesSection()
          .subscribe(data=>{
          this.postes =data ;
          }, err=>{
            this.router.navigateByUrl("/Connexion");
          });
    });
   }
//On Init
  ngOnInit() {
    //postes
    this.authService.getPostesSection()
    .subscribe(data=>{
    this.postes =data ;
    console.log("les posts : ", data)
    }, err=>{
      this.authService.logout();
         this.router.navigateByUrl("/Connexion");
    });
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

//ajouter Poste
  addPoste(form, username){
    this.authService.addPoste(form, username).subscribe(data =>{
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Votre poste est publié !',
        showConfirmButton: false,
        timer: 1500
      })
      //postes
        this.authService.getPostesSection()
        .subscribe(data=>{
          document.getElementById('pop')?.classList.remove("active");
          document.getElementById('popp')?.classList.remove("wrapper");
          document.getElementById('popp')?.classList.remove("overlay");
        this.postes =data ;
        }, err=>{
          this.authService.logout();
            this.router.navigateByUrl("/Connexion");
        });
      
    }, err=>{
      console.log(err);
    });
  }

  //commenter Poste
  commenterPoste(form,username){
    this.getUser();
    this.authService.commenterPoste(form.contenu,this.username, form.idPoste).subscribe(
      data=>{
        //postes
        this.authService.getPostesSection()
        .subscribe(data=>{
        this.postes =data ;
        }, err=>{
          this.authService.logout();
            this.router.navigateByUrl("/Connexion");
        });
      }
    )
    
  }



  getUser(){
    this.jwtToken=localStorage.getItem('token') ;
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
    this.myUser = jwtHelper.decodeToken(this.jwtToken).user;
    this.username = this.myUser.username;
  }
}
