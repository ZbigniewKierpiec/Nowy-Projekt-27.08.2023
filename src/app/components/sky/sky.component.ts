import { Icon } from './../power/model';
import { Device } from './../devices/devices/device';
import { Devices } from './../devices/devices/devices';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.scss'],
})
export class SkyComponent implements OnInit {
  @Input() active:string;
  @Output() check: EventEmitter<boolean> = new EventEmitter<boolean>();
  skyActive: boolean = true;

  constructor(private devices: DevicesService) {}

  sky() {
    this.skyActive = false;
    this.check.emit(this.skyActive);
    this.devices.onDeviceActive.emit('');
  }

  ngOnInit(): void {}
}
