import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/Services/authentication.service';
import { MessageService } from 'src/Services/Message.service';
import { ChatComponent } from '../chat/chat.component';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  emetteur ; 
  cont ; 

  constructor(public  messageService: MessageService,private authService : AuthenticationService ) { }
  

  ngOnInit(): void {
    this.emetteur=this.authService.getUser().username ;  
    
  }

}
