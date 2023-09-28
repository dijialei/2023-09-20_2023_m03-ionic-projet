import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _http:HttpClient) { }

  getNotes(){
    return this._http.get<Note[]>('http://localhost:3000/notes');
  }
  getNoteById(id:string){
    return this._http.get<Note>('http://localhost:3000/notes/'+id);
  }
  update(note:Note){
    return this._http.put('http://localhost:3000/notes/'+note.id,note);
  }
  save(note:Note){
    return this._http.post('http://localhost:3000/notes',note);
  }
}
