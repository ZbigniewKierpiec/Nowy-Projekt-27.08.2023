import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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




@NgModule({
  declarations: [AppComponent, PowerComponent, TemperatureTopComponent, UsersRightComponent, DevicesComponent, TvComponent, SkyComponent, BathroomComponent, More1Component],
  imports: [BrowserModule, BrowserAnimationsModule,FormsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
