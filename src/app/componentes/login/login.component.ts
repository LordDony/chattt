import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user:any = {
    email:'',
    password:''
  }
  public message = null;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onLogin(){
    this.auth.login(this.user).subscribe(res => {
      this.auth.auth(res);
      this.router.navigate(['users-online']);
    },error => {
      console.log(error.message);
      this.message  = error.message;
    });
  }

}
