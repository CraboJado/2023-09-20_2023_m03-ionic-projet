import { Component } from '@angular/core';
import { SessionsComponent } from '../sessions/sessions.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sessions = SessionsComponent
  constructor() {}

}
