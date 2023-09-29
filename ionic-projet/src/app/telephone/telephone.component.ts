import { Component, OnInit } from '@angular/core';
import { Device, DeviceId, DeviceInfo } from '@capacitor/device';
import { ConnectionStatus, Network } from '@capacitor/network';


@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.scss'],
})
export class TelephoneComponent  implements OnInit {
  info:DeviceInfo = {
    model: '',
    platform: 'ios',
    operatingSystem: 'ios',
    osVersion: '',
    manufacturer: '',
    isVirtual: false,
    webViewVersion: ''
  };
  id:DeviceId = {
    identifier: ''
  };
  status:ConnectionStatus = {
    connected: false,
    connectionType: 'unknown'
  };

   constructor() { 

  }


   ngOnInit() {
    this.logDeviceInfo()

  }

  async logDeviceInfo (){
    this.info = await Device.getInfo() ;
    this.id = await Device.getId() ;
    this.status = await Network.getStatus() ;
  }

  

}
