import { Component, OnInit } from '@angular/core';

import { SessionsService } from 'src/app/api/sessions.service';
import { Session } from 'src/app/model/session';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {

  sessionList:Session[]=[];

  constructor(private _sessionService : SessionsService) { }

  

  ngOnInit() {
    this._sessionService.getSessions().subscribe(res=>{
            for(let key in res){
              this.sessionList.push(res[key]);
            };
          
                      
    });
  }

}
