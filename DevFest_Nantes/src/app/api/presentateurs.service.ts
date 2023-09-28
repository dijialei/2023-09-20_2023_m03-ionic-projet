import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresentateursService {

  constructor(private _http:HttpClient) { }

  getPresentateurs(){
    return this._http.get<any>('https://devfest-nantes-2018-api.cleverapps.io/speakers');
  }
}
