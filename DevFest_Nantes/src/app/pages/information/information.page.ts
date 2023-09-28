import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';



@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  info={
    operatingSystem:"",
    osVersion:"",
    model:""
  };
  uuid={
    identifier:""
  }

  constructor() { }

  ngOnInit() {
    this.logDeviceInfo();
    this.getId();
  }
  logDeviceInfo = async () => {
     this.info = await Device.getInfo();
  };
  
  logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();
  
    console.log(info);
  };
  getId=async () => {
    this.uuid=await Device.getId();
    console.log(this.uuid);
    
  }

}
