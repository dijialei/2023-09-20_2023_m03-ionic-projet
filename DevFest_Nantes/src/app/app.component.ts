import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Conférence', url: '/pages/home', icon: 'trophy' },
    { title: 'Sessions', url: '/pages/Sessions', icon: 'trail-sign' },
    { title: 'Présentateurs', url: '/pages/Présentateurs', icon: 'people' },
   
  ];
 
  constructor() {}
}
