import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Conférence', url: '/home', icon: 'trophy' },
    { title: 'Sessions', url: '/sessions', icon: 'trail-sign' },
    { title: 'Présentateurs', url: '/presentateurs', icon: 'people' },
   
  ];
 
  constructor() {}
}
