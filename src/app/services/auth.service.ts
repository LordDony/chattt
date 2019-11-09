import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(user:any){
    return this.http.post("http://localhost:3333/api/v1/auth/login",{
      email:user.email,
      password:user.password
    });
  }

  auth(data:any){
    localStorage.setItem('auth',JSON.stringify(data));
  }


  usersOnline(){
    const user = JSON.parse(localStorage.getItem('auth'));
    const endpoint = "http://localhost:3333/api/v1/users-online/"+user.id;
    return this.http.get(endpoint,{
      headers:{
        "Authorization":'bearer '+user.token
      }
    });
  }

  logout(user:any){
    const endpoint = "http://localhost:3333/api/v1/auth/logout";
    return this.http.post(endpoint,{
      user_id:user.id
    },{
      headers:{
        "Authorization":'bearer '+user.token
      }
    })
  }
}
