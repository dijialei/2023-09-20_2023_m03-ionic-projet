import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { Network } from '@capacitor/network';



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
  };
  net={
    connectionType:""
  };

  constructor() { }

  ngOnInit() {
    this.logDeviceInfo();
    this.getId();
    this.netType();
  }
  logDeviceInfo = async () => {
     this.info = await Device.getInfo();
  };
  
 
  getId=async () => {
    this.uuid=await Device.getId();
    
  };

   netType = async () => {
    this.net= await Network.getStatus();
  };


}
