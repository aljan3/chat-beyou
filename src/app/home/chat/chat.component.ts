import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ChatBox } from 'src/model/ChatBox';
import { AuthenticationService } from 'src/Services/authentication.service';
import { MessageService } from 'src/Services/Message.service';

@Component({
  selector: 'app-home-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
title = 'websocket-frontend';
input;

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
  public username;
  public receiver;



constructor(public  messageService: MessageService , private authService : AuthenticationService ) {
}

ngOnInit(): void {
  //ChatComponent.MeConnected = this.authService.getUser().username ;
  this.emetteur=this.authService.getUser().username ;  

 //Conversations
 console.log("im here")
 this.authService.getConversations(this.emetteur).subscribe(data=>{
   this.conversations = data;
   console.log("conversations "+this.conversations)
   //console.log("imad "+this.conversations[0].users[1].username != this.authService.getUser().username)
 },err=>{
    console.log("eee"+err)
  })
 
  

}

sendMessage() {
  if (this.input && this.Inputreceiver) {
    ChatComponent.receiver = this.Inputreceiver ; 
    this.packet = this.input + "*654648*" + this.Inputreceiver ; 
    this.messageService.sendMessage(this.packet);
    console.log(this.messageService.msg) ; 
   
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
  openChat(users)
  {
    users.forEach(u => {
      if(u.username != this.emetteur)
        this.receiver = u.username;
    });
  }
  oncreate()
  {

  }



 
 
   

  getUser(){
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
    this.myUser = jwtHelper.decodeToken(this.jwtToken).user;
    console.log("this is the user connecte "+this.myUser)
    return this.myUser;
  }

}
