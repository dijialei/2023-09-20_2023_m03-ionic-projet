import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NotesService } from 'src/app/api/notes.service';
import { SessionsService } from 'src/app/api/sessions.service';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  note: Note = {};
  text: string = "";
  instance:boolean=true;

  constructor(private _noteService: NotesService,
    private route: ActivatedRoute,
    private router: Router,
    private _sessionService: SessionsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.note.id = res.get('id') as string;

      this._noteService.getNoteById(this.note.id).subscribe({
        next: res => {
          this.note = res;
          this.text = this.note.note as string;
        },
        error: e => {
          this._sessionService.getSessions().subscribe(res => {
            for (let key in res) {
              if (key == this.note.id) {
                this.note.titre = res[key].title;
              };
            };
            if (!this.note.titre) {
              this.router.navigateByUrl('/note');
            }else{
              this.instance=false;
            }
          });

        }
      });

    });
  }

  save() {
    if(this.instance){
      this.note.note = this.text;
    this._noteService.update(this.note).subscribe(res => {
      this.router.navigateByUrl('/note');
    });
    }else{
      this.note.note = this.text;
      this._noteService.save(this.note).subscribe(res=>{
        this.instance=true;
        this.router.navigateByUrl('/note');
      });
    }

  }
}
