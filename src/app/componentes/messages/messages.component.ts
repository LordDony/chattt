import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  public conversation_id:string;
  private secretKey:string = 'secretkey_sic92019_j_d_n'
  public messages:any = [];
  public user:any = [];
  public message:any = {
    message:''
  }
  constructor( private route: ActivatedRoute, private messageS:MessagesService) { }

  ngOnInit() {
    this.conversation_id = this.route.snapshot.paramMap.get("c_id");
    this.user            = JSON.parse(localStorage.getItem('auth'));
    this.getMessages(this.conversation_id);
  }

  getMessages(conversation_id){
    this.messageS.getMessages(conversation_id).subscribe((res:any)=>{
      this.messages = res.data;
      console.log(this.messages)
    },(error)=>{
      console.log("error messages: "+error.message);
    });
  }

  onSendMessage(){
    let encrypted = this.encrypt(this.message.message);
    console.log(encrypted)
    this.messageS.sendMessage(encrypted,this.user.id,this.conversation_id).subscribe((res)=>{
      console.log(res)
      this.getMessages(this.conversation_id);
    },(error)=>{
      console.log("error: "+error.message);
    });
  }

  encrypt(message:string){
    return CryptoJS.AES.encrypt(message,this.secretKey).toString();
  }
  decrypt(message:string){
    let bytes = CryptoJS.AES.decrypt(message, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

}
