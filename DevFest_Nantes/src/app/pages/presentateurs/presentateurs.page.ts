import { Component, OnInit } from '@angular/core';
import { PresentateursService } from 'src/app/api/presentateurs.service';
import { Presentateur } from 'src/app/model/presentateur';

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.page.html',
  styleUrls: ['./presentateurs.page.scss'],
})
export class PresentateursPage implements OnInit {

speakerList:Presentateur[]=[];

  constructor(private _presentateur:PresentateursService) { }

  ngOnInit() {
    this._presentateur.getPresentateurs()
    .subscribe(res=>{
      for(let key in res){
        this.speakerList.push(res[key]);
      };
            
    });
  }

}
