import { Component, OnInit } from '@angular/core';
import { Speaker } from '../models/speaker';
import { ActivatedRoute } from '@angular/router';
import { SpeakersService } from '../services/speakers.service';
import { SessionsService } from '../services/sessions.service';
import { Session } from '../models/session';

@Component({
  selector: 'app-detail-presentator',
  templateUrl: './detail-presentator.component.html',
  styleUrls: ['./detail-presentator.component.scss'],
})
export class DetailPresentatorComponent  implements OnInit {
  speaker:Speaker = {};
  sessionsBySpeaker : Session[] = []

  constructor( private _activateRoute: ActivatedRoute,
               private _speakersService: SpeakersService,
               private _sessionService: SessionsService) { }

  ngOnInit() {
    const id = this._activateRoute.snapshot.params['id'];
    this._speakersService.getSpeakerById( parseInt(id) )
      .subscribe( speaker => {
        this.speaker = speaker;
      })
    
    this._sessionService.getSessionsById( parseInt(id) )
    .subscribe (sessionsBySpeaker => {
      this.sessionsBySpeaker = sessionsBySpeaker
      console.log(sessionsBySpeaker)
    })
  }
}
