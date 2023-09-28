import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";

import { Session } from '../models/session';
import { Observable, filter, map ,from} from 'rxjs';

interface Sessions {
  [key:string]: Session
}

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  
  private _api = environment.api.sessions;
  

  constructor(private _http: HttpClient) {

  }

  public getSessions(){
    return this._http.get<Sessions>(this._api).pipe(
      map( sessionsObj => Object.values(sessionsObj) )
    )
  }

  public getSessionById(id:number){
   return this._http.get<Sessions>(this._api).pipe(
      map( sessionsObj => Object.values(sessionsObj)
                          .filter(session => session.id === id)[0] ) 
        )
  }

}
