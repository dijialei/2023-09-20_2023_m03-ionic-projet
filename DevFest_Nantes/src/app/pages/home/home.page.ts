import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public folder!: string;
  constructor() {}

  ngOnInit() {
    this.folder = "Conférence";
  }

}
