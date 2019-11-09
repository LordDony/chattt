import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { MessagesComponent } from './componentes/messages/messages.component';
import { UsersOnlineComponent } from './componentes/users-online/users-online.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    UsersOnlineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
