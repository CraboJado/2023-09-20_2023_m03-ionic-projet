import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Speaker } from '../models/speaker';
import { map } from 'rxjs/operators';

interface Speakers {
  [key:string]: Speaker
}

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  private _api = environment.api.speakers;

  constructor(private _http: HttpClient) { }

  public getSpeakers(ids:number[]){
    return this._http.get<Speakers>(this._api).pipe(
            map( speakersObj => { 
              const speakers = Object.values(speakersObj);
              const speakersByids :Speaker[] = [];
              ids.forEach( id => {
                const arr = speakers.filter( speaker => {
                              if(typeof(speaker.id) === 'string'){
                                speaker.id = parseInt(speaker.id);
                              }
                              return speaker.id === id
                        });
                speakersByids.push(...arr);
              })
              return speakersByids.map( speaker => {
                speaker.photoUrl = `https://devfest2018.gdgnantes.com/${speaker.photoUrl}`;
                speaker.companyLogo = `https://devfest2018.gdgnantes.com/${speaker.companyLogo}`;
                return speaker;
              });
            })
          )
  }

  // public getSpeakers(){

  //   return this._http.get<Speakers>(this._api).pipe(
  //           map( speakersObj => { 
  //             const sessions = Object.values(speakersObj);
     
  //             return  sessions ;
  //           })
  //         )
  // }

  public getSpeakerById(id:number){
   return this._http.get<Speakers>(this._api).pipe(
      map( speakersObj => Object.values(speakersObj)
                          .filter(speaker => {
                            if(typeof(speaker.id) === 'string'){
                              speaker.id = parseInt(speaker.id);
                            }
                            return speaker.id === id
                          })
                          .map(speaker => {
                            speaker.photoUrl = `https://devfest2018.gdgnantes.com/${speaker.photoUrl}`;
                            speaker.companyLogo = `https://devfest2018.gdgnantes.com/${speaker.companyLogo}`;
                            return speaker;
                          })[0]
          ) 
        )
  }
}
