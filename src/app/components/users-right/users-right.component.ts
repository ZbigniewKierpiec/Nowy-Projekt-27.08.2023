import { Component, OnInit } from '@angular/core';
import { Model } from '../users-right/model';
import { Models } from '../users-right/models';
import { Camera } from './cameras/camera';
import { Cameras } from './cameras/cameras';
import { Preset } from './presets/preset';
import { Presets } from './presets/presets';
import { Room } from './presets/room';
import { Rooms } from './presets/rooms';

@Component({
  selector: 'app-users-right',
  templateUrl: './users-right.component.html',
  styleUrls: ['./users-right.component.scss'],
})
export class UsersRightComponent implements OnInit {
  isActive: boolean = false;
  users: Model[] = Models;
  userName: string = 'John';
  userImage: string = 'assets/user.jpeg';
  cameraT: boolean = false;
  cameras: Camera[] = Cameras;
  cameraActive: boolean;
  cameraImage: string = 'assets/garden.jpg';
  cameraName: string = 'garden';
  dotActive: boolean = true;
  isSelected: any;
  presets: Preset[] = Presets;
  isSelectedPresets:string;
  rooms:Room[]=Rooms;
  constructor() {}

  user() {
    this.isActive = !this.isActive;
  }

  userChange(item: Model) {
    console.log(item);
    this.userName = item.name;
    this.userImage = item.image;
  }

  camera() {
    console.log('Dziala');
    this.cameraT = !this.cameraT;
  }

  cameraC(item: Camera) {
    console.log(item);
    this.cameraImage = item.image;
    this.cameraName = item.name;
    this.cameraActive = item.active;
    this.dotActive = item.active;
    this.isSelected = item.name;
  }

  startRecord(item: Camera) {
    console.log('Nagrywa');
    item.active = true;
  }
  stopRecording(item: Camera) {
    item.active = false;
  }

presetsClick(item:Preset){
console.log(item.name)
this.isSelectedPresets = item.name;
}

  ngOnInit(): void {}
}
