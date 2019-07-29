import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class ShareDataService {

  private usernameSource = new BehaviorSubject(null);
  private nicknameSource = new BehaviorSubject(false);
  currentUsername = this.usernameSource.asObservable();
  currentNicknameStatus = this.nicknameSource.asObservable();

  changeUsername(value: string) {
    this.usernameSource.next(value);
  }

  changeStatusNickname(value: boolean) {
    this.nicknameSource.next(value);
  }
}

