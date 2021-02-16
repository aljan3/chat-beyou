import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient, HttpParams  , HttpHeaders , HttpResponse} from '@angular/common/http';

import { Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-confirmemail',
  templateUrl: './confirmemail.component.html',
  styleUrls: ['./confirmemail.component.css']
})
export class ConfirmemailComponent implements OnInit {

  private host:string="http://localhost:8080";
   firstParam:any;

  constructor(private route: ActivatedRoute, private http:HttpClient  ) { }

  ngOnInit(): void {

           this.firstParam = this.route.snapshot.queryParamMap.get('cd');
          this.checkCodeInscription(this.firstParam);
    }

    checkCodeInscription(codeInscription : string){
    let params = new HttpParams().set("cd",codeInscription);

let chihaja = this.http.get(this.host+"/checkCodeInscription", { params: params } )
 .subscribe(data=>{
 console.log(data)
 });

       return chihaja

    }

}



