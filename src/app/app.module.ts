import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PowerComponent } from './components/power/power.component';
import {FormsModule} from '@angular/forms';
import { TemperatureTopComponent } from './components/temperature-top/temperature-top.component';
import { UsersRightComponent } from './components/users-right/users-right.component';
import { DevicesComponent } from './components/devices/devices.component';
import { TvComponent } from './components/tv/tv.component';
import { SkyComponent } from './components/sky/sky.component';
import { BathroomComponent } from './components/bathroom/bathroom.component';
import { More1Component } from './components/more1/more1.component';
import { More2Component } from './components/more2/more2.component';
import { AppleTvComponent } from './components/apple-tv/apple-tv.component';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from './components/swiper/swiper.component';




@NgModule({
  declarations: [AppComponent, PowerComponent, TemperatureTopComponent, UsersRightComponent, DevicesComponent, TvComponent, SkyComponent, BathroomComponent, More1Component, More2Component, AppleTvComponent, SwiperComponent],
  imports: [BrowserModule,FormsModule,SwiperModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
