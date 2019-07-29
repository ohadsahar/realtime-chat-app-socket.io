import { ChatMenuComponent } from './core/components/chat-menu/chat-menu.component';
import { PubgRoomComponent } from './core/components/pubg-room/pubg-room.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LobbyComponent } from './core/components/lobby/lobby.component';
import {MatInputModule, MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    PubgRoomComponent,
    ChatMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
