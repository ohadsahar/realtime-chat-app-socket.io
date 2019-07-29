import { LobbyComponent } from './core/components/lobby/lobby.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PubgRoomComponent } from './core/components/pubg-room/pubg-room.component';


const routes: Routes = [
  {path: 'pubg', component: PubgRoomComponent},
  {path: 'lobby', component: LobbyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
