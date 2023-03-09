import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';

import { Device } from './devices/device';
import { Devices } from './devices/devices';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  @Output() send: EventEmitter<string> = new EventEmitter<string>();
  devices: Device[] = Devices;
  check: boolean;
  activeDevice;


  constructor(private device:DevicesService) {}



  checked(item: Device) {
    this.check = !this.check;
    item.status = this.check;
  }

  deviceActive(item: Device) {
    this.activeDevice = item.name;
    this.send.emit(item.name);
    console.log('zbyszek czwartek' + item.name)
    let zee={
      name:item.name,
      status:item.status,
      icon:item.icon

    }
  this.device.onDevicesSend.emit(zee)
  }

  ngOnInit(): void {
    this.device.onDeviceActive.subscribe(r=>{
      this.activeDevice = r;
    })
  }

  }










