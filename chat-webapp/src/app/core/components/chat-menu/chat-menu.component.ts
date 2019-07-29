import { ShareDataService } from './../../services/share-data.service';
import { NgForm } from '@angular/forms';
import { WebSocketService } from './../../services/web-socket.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-menu',
  templateUrl: 'chat-menu.component.html',
  styleUrls: ['./chat-menu.component.css']
})

export class ChatMenuComponent implements OnInit {

  selected: string;

  constructor(private webSocketService: WebSocketService, private shareDataService: ShareDataService, private router: Router) {
    this.selected = '';
  }

  ngOnInit() { }

  enterForm(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const data = { username: form.value.username, room: this.selected };
    this.shareDataService.changeUsername(form.value.username);
    this.webSocketService.emit('join', data);
    this.changeRoom(this.selected);
  }

  changeRoom(room: string) {
    if (room === 'Pubg') {
      this.router.navigate(['/pubg']);
    }
    if (room === 'Lobby') {
      this.router.navigate(['/lobby']);
    }
  }

}
