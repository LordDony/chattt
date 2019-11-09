import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http:HttpClient, private auth:AuthService) { }

  getMessages(conversation_id:string){
    const endpoint = "http://localhost:3333/api/v1/messages/"+conversation_id;
    const user     = JSON.parse(localStorage.getItem('auth'));
    return this.http.get(endpoint,{
      headers:{
        "Authorization":'bearer '+user.token
      }
    });
  }

  sendMessage(message,user_id,conversation_id){
    const endpoint = "http://localhost:3333/api/v1/messages"
    const user     = JSON.parse(localStorage.getItem('auth'));
    return this.http.post(endpoint,{
      message:message,
      user_id:user_id,
      conversation_id:conversation_id
    },{
      headers:{
        "Authorization":'bearer '+user.token
      }
    });
  }
}
