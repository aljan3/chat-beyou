// Declare SockJS and Stomp
declare var SockJS;
declare var Stomp;
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { ChatComponent } from 'src/app/home/chat/chat.component';
import { message } from 'src/model/message';
import { ChatBox } from 'src/model/ChatBox' ; 
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable()

export class MessageService{
constructor( private http:HttpClient ) {
    this.initializeWebSocketConnection();
    //this. initializeWebSocketConnection1(); 

  }
  public stompClient;
  public msg: any[]=[];
  public msgReceived: any[]=[];
  public username ; 
  public index ; 
  public   indexValue ; 
  public msgMap =  new Map() ; 
  public sender ; 
  public receiver1 ; 
  public static M =0 ; 

 
  private host:string="http://localhost:8081";
  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8081/socket';
    
    const ws = new SockJS(serverUrl);
    ws.withCredentials=true ; 
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/message',(Packet) => {
        console.log("ded" + that.index)
        if (ChatComponent.Me==1 ) 
        {
             that.index =  Packet.body.indexOf("*654648*");
             
            
             that.indexValue=Packet.body.substring(0, that.index) ; 
          
          //that.msg.push(message.body);
          console.log(that.indexValue) ; 
          //that.msg.push(that.indexValue);
          that.msg.push("hi");
          console.log(that.msg) ; 

         

// that.msgMap.set('messages' , that.msg ) ; 
        } 
        else 
        {    
          that.index =  Packet.body.indexOf("*654648*");
          console.log(that.index+"index") ; 
             that.indexValue=Packet.body.substring(that.index+8, Packet.body.length) ; 
            if (that.indexValue==ChatComponent.MeConnected)
          {
            that.index =  Packet.body.indexOf("*654648*");
            that.indexValue=Packet.body.substring(0, that.index) ; 
            console.log(that.indexValue) ; 
            //that.msgReceived.push(message.body) ;
            that.msgReceived.push("hey")
            //that.msgReceived.push(that.indexValue)
            
          }
             
        } 
       /* else if ( ChatComponent.receiver==ChatComponent.MeConnected)
        {
            MessageService.M = 1 ; 
            that.y= 1 ; 
        }
        */
         if  ( Packet.body)
        {
          ChatComponent.Me=0 ; 
          that.indexValue='' ; 


         

        }
      
        
       
       
      });
    }) ; 
 
    
  } 
 /* initializeWebSocketConnection1( ) {
    const serverUrl = 'http://localhost:8081/socket';
    const ws1 = new SockJS(serverUrl);
    ws1.withCredentials=true ; 
    this.stompClient = Stomp.over(ws1);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/topic/broadcast',(username) => {
        
        if (username.body) {
        
        console.log(username.body) ; 

        }  

      });
    }) ; 
 
    
  }*/

 
  sendMessage(Packet) {
     
    ChatComponent.Me= 1 ; 
  /* ChatComponent.receiver = receiver ; 
    console.log(ChatComponent.receiver) ; 
    console.log(ChatComponent.MeConnected) ; 
*/
    //this.msgMap.set('messages' , message ) ; 
     
   /* this.sender= sender ; 
    this.msgMap.set('sender',this.sender) ; 
    this.msgMap.set('receiver', this.receiver) ; */
    this.stompClient.send('/app/send/message' ,{}, Packet );
    console.log(this.msg); 
    console.log(this.msgReceived) ;
    console.log(this.indexValue);  


    //this.stompClient.send('/app/send/receiver' ,{}, receiver );

    //this.stompClient.send('/app/send/receiver' ,{}, receiver );

   // console.log(this.msgMap) ; 
   
  }
    saveChat(emetteur,recepteur,contenu)
    {
      console.log("recepteur "+recepteur) ; 
      console.log("emetteur "+emetteur) ; 
      console.log("contenu "+contenu) ; 
      let params = new HttpParams()
      .set('contenu',contenu)
      .set('recepteur',recepteur)
      .set('emetteur',emetteur) ; 
      console.log(params) ; 

      console.log("im here also ") ; 
      return this.http.get("http://localhost:8081/saveChat",{params: params} ) ; 
     
    }
    getChat(emetteur)
    {
      let params = new HttpParams()
      .set('emetteur',emetteur) ; 
      return this.http.get("http://localhost:8081/getChat",{params:params}) ; 
    }     

  }