import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../services/sessions.service';
import { Session } from '../models/session';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent  implements OnInit {
  sessions!:Session[]

  constructor(private _sessionsService : SessionsService) { }

  ngOnInit() {
  
    this._sessionsService.getSessions().subscribe({
      next: sessionDatas => this.sessions = sessionDatas,
      error: err => console.log(err)
    })

  }

}
