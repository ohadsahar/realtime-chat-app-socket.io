import { ShareDataService } from './../../services/share-data.service';
import { NgForm } from '@angular/forms';
import { MessageInterface } from './../../../shared/models/message-array.model';
import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';


@Component({
  selector: 'app-pubg-room',
  templateUrl: './pubg-room.component.html',
  styleUrls: ['./pubg-room.component.css']
})

export class PubgRoomComponent implements OnInit {

  messageArray: MessageInterface[];
  selectedValue: string;
  wellcomeMessage: string;
  typing: string;
  username: string;

  constructor(private webSocketService: WebSocketService, private shareDataService: ShareDataService) {
    this.messageArray = [];
    this.wellcomeMessage = '';
  }

  ngOnInit() {
    this.shareDataService.changeStatusNickname(true);
    this.onLoadComponent();
  }

  onLoadComponent() {
    this.shareDataService.currentUsername.subscribe(response => {
      this.username = response;
    });

    this.startSocketing();
  }

  startSocketing() {
    this.webSocketService.listen('new message').subscribe((data) => {
      this.messageArray.push(data.message);
    });
    this.webSocketService.listen('new user joined').subscribe((data) => {
      this.wellcomeMessage = data.message;
    });
    this.webSocketService.listen('new typing').subscribe((data) => {
      this.typing = data.message;
    });
    this.webSocketService.listen('no more typing').subscribe((data) => {
      this.typing = data.message;
    });
  }
  newMessage(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const data = { username: this.username, message: form.value.message, room: 'Pubg' };
    this.webSocketService.emit('send message', data);
  }

  typyingMessage($event) {
    const data = { username: this.username, room: 'Pubg' };
    if ($event.target.value !== '') {
      this.webSocketService.emit('typing', data);
    } else {
      this.webSocketService.emit('stop typing', data);
    }
  }

}
