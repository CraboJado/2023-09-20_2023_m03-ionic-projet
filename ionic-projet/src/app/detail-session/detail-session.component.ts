import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionsService } from '../services/sessions.service';
import { Session } from '../models/session';
import { Speaker } from '../models/speaker';
import { SpeakersService } from '../services/speakers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detail-session',
  templateUrl: './detail-session.component.html',
  styleUrls: ['./detail-session.component.scss'],
})
export class DetailSessionComponent  implements OnInit {

  session:Session = {};
  speakersByids:Speaker[] = [];

  isModalOpen = false;
  mesNotes:string ="";

  constructor( private _activateRoute: ActivatedRoute,
               private _sessionsService: SessionsService,
               private _speakersService: SpeakersService ) { }

  ngOnInit() {
    const id = this._activateRoute.snapshot.params['id'];
    this._sessionsService.getSessionById( parseInt(id) ).subscribe({
      next: session => {
        this.session = session;
        if(session.speakers){
          this._speakersService.getSpeakers(session.speakers).subscribe({
            next: speakers =>{
              this.speakersByids = speakers
            },
            error: err => console.log(err)
          })
        
      }
    },
      error: err => console.log( err )
    })

  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  onSubmit(f: NgForm){
    this.mesNotes = f.value.note
    this.setOpen(false)
  }


}
