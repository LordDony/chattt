import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  constructor(private http:HttpClient) { }

  getConversations(){
    const user = JSON.parse(localStorage.getItem('auth'))
    const endpoint = "http://localhost:3333/api/v1/conversations/"+user.id;
    return this.http.get(endpoint,{
      headers:{
        "Authorization":"bearer "+user.token
      }
    });
  }

  addConversation(user_one, user_two){ 
    const user = JSON.parse(localStorage.getItem('auth'))
    const endpoint = "http://localhost:3333/api/v1/conversations";
    return this.http.post(endpoint,{
      user_one:user_one,
      user_two:user_two
    },{
      headers:{
        "Authorization":"bearer "+user.token
      }
    })
  }
}
