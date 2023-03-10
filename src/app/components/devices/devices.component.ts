
import { transition } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';
import { SwiperOptions } from 'swiper';

import SwiperCore, {
  Navigation,
  Scrollbar,
  Autoplay,

  A11y,
  Virtual,
  EffectFade,
  EffectCoverflow,
  EffectCube,
  EffectFlip,
} from 'swiper/core';








import { Device } from './devices/device';
import { Devices } from './devices/devices';
SwiperCore.use([Navigation, A11y]);
SwiperCore.use([Virtual]);
SwiperCore.use([EffectCoverflow]);
SwiperCore.use([EffectCube]);
SwiperCore.use([EffectFlip]);
SwiperCore.use([EffectFade]);
SwiperCore.use([Autoplay]);

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
  config: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 10,
    speed: 500,
    navigation: false,
    autoplay: false,
    longSwipes:true,
    longSwipesMs:800,
  






    effect: 'slide',
    pagination: { clickable: false },
    scrollbar: { draggable: false },
    virtual: true,
  };



  constructor(private device: DevicesService) {}

  checked(item: Device) {
    this.check = !this.check;
    item.status = this.check;
  }

  deviceActive(item: Device) {
    this.activeDevice = item.name;
    this.send.emit(item.name);
    console.log('zbyszek czwartek' + item.name);
    let zee = {
      name: item.name,
      status: item.status,
      icon: item.icon,
    };
    this.device.onDevicesSend.emit(zee);
  }

  ngOnInit(): void {
    this.device.onDeviceActive.subscribe((r) => {
      this.activeDevice = r;
    });
  }
}
