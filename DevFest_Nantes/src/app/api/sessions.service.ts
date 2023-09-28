import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../model/session';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private _http:HttpClient) { 
  }
  getSessions(){
    return this._http.get<any>('https://devfest-nantes-2018-api.cleverapps.io/sessions');
  }
 
}
