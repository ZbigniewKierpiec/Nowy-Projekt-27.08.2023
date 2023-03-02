import { Component, OnInit, Output , EventEmitter } from '@angular/core';

import { Device } from './devices/device';
import { Devices } from './devices/devices';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  @Output()  send:EventEmitter<string> = new EventEmitter<string>();
  devices: Device[] = Devices;
  check: boolean;
  activeDevice;
  checked(item:Device) {
      this.check =! this.check;
      item.status = this.check;
  }

  deviceActive(item:Device){
     this.activeDevice = item.name;
     this.send.emit(item.name)
  }

  constructor() {}

  ngOnInit(): void {

  }
}
