import { Component, OnInit } from '@angular/core';
import { ConversationsService } from 'src/app/services/conversations.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-online',
  templateUrl: './users-online.component.html',
  styleUrls: ['./users-online.component.scss']
})
export class UsersOnlineComponent implements OnInit {
  
  public conversations:any = [];
  public user:any = [];
  public usersOnline:any = [];
  constructor(private conversationS:ConversationsService,private auth: AuthService, private router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('auth'))
    this.getConversations();
    this.getUsersOnLine();
  }

  getConversations(){
    this.conversationS.getConversations().subscribe((res:any) => {
      this.conversations = res.data;
      console.log(this.conversations)
    });
  }

  getUsersOnLine(){
    this.auth.usersOnline().subscribe((res:any)=>{
      this.usersOnline = res.users;
    })
  }

  onNewConversation(user:any){
    const user_one = this.user.id;
    const user_two = user.id;

    this.conversationS.addConversation(user_one,user_two).subscribe((res:any) => {
        this.router.navigate(['/messages/'+res.id]);
    },error => alert(error.message));
  }

}
