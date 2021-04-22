import { Component, OnInit } from '@angular/core';
import { ChatBox } from 'src/model/ChatBox';
import { AuthenticationService } from 'src/Services/authentication.service';
import { MessageService } from 'src/Services/Message.service';
import { ChatComponent } from '../home/chat/chat.component';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  public cont ; 
  emetteur ; 
  constructor()
  {

  }
  ngOnInit(): void {

   
   }
   

    
  
 
 
   

}
