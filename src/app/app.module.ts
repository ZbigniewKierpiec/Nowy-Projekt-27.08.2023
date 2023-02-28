import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PowerComponent } from './components/power/power.component';
import { TemperatureTopComponent } from './components/temperature-top/temperature-top.component';
import { UsersRightComponent } from './components/users-right/users-right.component';


@NgModule({
  declarations: [AppComponent, PowerComponent, TemperatureTopComponent, UsersRightComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
