import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentateursService } from 'src/app/api/presentateurs.service';
import { SessionsService } from 'src/app/api/sessions.service';
import { Presentateur } from 'src/app/model/presentateur';
import { Session } from 'src/app/model/session';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  speaker: Presentateur = {};
  list:Session[]=[];

  constructor(private route: ActivatedRoute,
    private _sessionService: SessionsService,
    private _presentateurService: PresentateursService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.speaker.id = res.get('id') as string;
      this._presentateurService.getPresentateurs()
      .subscribe(res=>{
        this.speaker=res[this.speaker.id as string];
        this._sessionService.getSessions()
        .subscribe(res=>{
          for(let key in res){
            let s:Session = res[key];
                       
            s.speakers?.forEach(sp=>{
                if(sp==this.speaker.id){
                  this.list.push(s);
                }
            });
            
           
          }
        });        
      });
    });
  }

}
