import { ShareDataService } from './core/services/share-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chat-real-time-app';
  loggedIn: boolean;
  constructor(private shareDataService: ShareDataService) {
  }

  ngOnInit() {
    this.shareDataService.currentNicknameStatus.subscribe(response => {
      this.loggedIn = response;
    });
  }
}
