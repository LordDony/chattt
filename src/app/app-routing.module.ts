import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MessagesComponent } from './componentes/messages/messages.component';
import { UsersOnlineComponent } from './componentes/users-online/users-online.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'messages/:c_id',
    component:MessagesComponent
  },
  {
    path:'users-online',
    component:UsersOnlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
