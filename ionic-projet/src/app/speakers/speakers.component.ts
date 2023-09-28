import { Component, OnInit } from '@angular/core';
import { Speaker } from '../models/speaker';
import { SpeakersService } from '../services/speakers.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent  implements OnInit {
  speakers:Speaker[] = [];

  constructor(private _speakerService : SpeakersService) { }

  ngOnInit() {
    this._speakerService.getAllSpeakers()
      .subscribe( speakers => this.speakers = speakers)
  }

}
