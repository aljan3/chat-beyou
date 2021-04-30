import { Router } from '@angular/router';
import { message } from './../../model/message';
import { Component, Input, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
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
  input;

  @Input() show?: boolean ;
message : string[]=[] ; 
//msgMap =  new Map() ; 
public packet ; 
chat:ChatBox = new ChatBox();
static Me: number =0;
public Inputreceiver ; 
  public  static MeConnected  ; 
  public  static receiver  ; 
  public ChatRecev ; 
  public contenu ; 
  public emetteur ; 
  public cont ; 
  public recep ; 
  public con ; 
  public conversations;
  public myUser;
  public jwtToken;
  public roles;
  public messages;
  public _subscription;
  public actif = true;
  



constructor(public  messageService: MessageService ,private router:Router, private authService : AuthenticationService ) {
  this.messages = this.messageService.messagesAffiches;
    this._subscription = messageService.messagesAffichesChangeEvent.subscribe((value) => { 
      this.messages = value;
      this.messages = this.messageService.messagesAffiches;
      console.log('hahome '+this.messages)
    });
}

@Input() receiver?: string ;

ngOnInit(): void {
  console.log("t7lat")
  ChatComponent.MeConnected = this.authService.getUser().username ;
  this.emetteur=this.authService.getUser().username ;  
  this.messages = this.messageService.messagesAffiches
 /*this.messageService.getChat(this.emetteur).subscribe(data=> {
   this.cont = data ; 
   console.log(data) ; 
 })*/
 //this.myUser = this.getUser();
 //Conversations
 this.authService.getConversations(this.emetteur).subscribe(data=>{
   this.conversations = data;
   console.log("dfffg " +this.conversations)
 },
  err=>{
    console.log("eee"+err)
  })

  this.messageService.setMessagesAffiches(this.messageService.Msgs.get(this.receiver!))

 
}

sendMessage() {
  if (this.input && this.receiver) {
    ChatComponent.receiver = this.receiver ; 
    this.packet = this.input + "*654648*" + this.receiver ; 
    this.messageService.receiver1 = this.receiver;
    this.messageService.sendMessage(this.packet);
    this.messageService.setMessagesAffiches(this.messageService.Msgs.get(this.receiver))
    
    this.messages = this.messageService.messagesAffiches

    console.log("les messages"+this.messages)

    console.log(ChatComponent.Me) ; 
    console.log(MessageService.M) ; 
    

   // for (  this.int = 0 ; this.int<this.messageService.msg.length  ; this.int++)
    //{
     //   console.log(this.messageService.msg[this.int]) ; 
   // }
   this.input = '';
   this.Inputreceiver='' ; 
  
    console.log("hi") ; 
   
  }
}
  saveChat()
  {
    console.log(this.ChatRecev) ; 
    this.emetteur=this.authService.getUser().username ; 
    console.log(this.contenu) ;
    if (this.ChatRecev && this.contenu )
    {
      
      this.messageService.saveChat(this.emetteur,this.ChatRecev,this.contenu).subscribe(data=>{
        console.log(data)
      });
     
    
    

    }
    this.ChatRecev='' ; 
    this.contenu='' ; 



  }
  openChat()
  {
    console.log(this.recep) ; 
    console.log(this.con) ; 
  }
  oncreate()
  {

  }
  active()
  {
    if(this.actif)
        document.getElementById('act')?.classList.add("active")
    else
      document.getElementById('act')?.classList.remove("active")

    this.actif = !this.actif
  }



 
 
   

  getUser(){
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
    this.myUser = jwtHelper.decodeToken(this.jwtToken).user;
    console.log("this is the user connecte "+this.myUser)
    return this.myUser;
  }

   

    
  
 
 
   

}
