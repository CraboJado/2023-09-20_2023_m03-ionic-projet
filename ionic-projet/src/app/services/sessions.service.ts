import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";

import { Session } from '../models/session';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  
  private _api = environment.api.sessions;

  constructor(private _http: HttpClient) {
  
  }

  public getSessions(){
    return this._http.get<Session>(this._api).pipe(
      map( sessionsObj => Object.values(sessionsObj) )
    )
    
  }
}
