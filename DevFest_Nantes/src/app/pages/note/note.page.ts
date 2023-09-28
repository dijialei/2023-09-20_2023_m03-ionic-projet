import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/api/notes.service';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  list:Note[]=[];

  constructor(private _noteService:NotesService) { }

  ngOnInit() {
    this._noteService.getNotes().subscribe(res=>{
      this.list= res;
            
    });
  }

}
