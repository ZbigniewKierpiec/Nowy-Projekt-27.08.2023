import { Component, Input, OnInit } from '@angular/core';
import { Shower } from './shower';
import { Showers } from './showers';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.scss'],
})
export class BathroomComponent implements OnInit {
  @Input() active: string;

  shower: Shower[] = Showers;
  isActive?;
  isBrick: number = 0;
  isOn? = false;
  temperature: number = 16;
  pressure: number = 50;
  more1:boolean=false;
  more2:boolean=false;

  activeItem(item: Shower) {
    this.isActive = item.name;
  }

  smole() {
    console.log('dziala smole');

    if (this.isBrick === 0) {
      this.isBrick = 0;
    } else {
      this.isBrick--;
    }
    console.log(this.isBrick);
  }

  big() {
    if (this.isBrick === 3) {
      this.isBrick = 3;
    } else {
      this.isBrick++;
    }
    console.log(this.isBrick);
  }

  on() {
    this.isOn = !this.isOn;
  }

  temp(temp: string) {
    if (temp === '+') this.temperature++;
    else {
      this.temperature--;
    }
  }

  pressureC(status: string) {
    if (status == 'up') {
      this.pressure++;
      if (this.pressure > 100) {
        this.pressure = 100;
      }
    } else if (status == 'down') {
      this.pressure--;
      if (this.pressure <= 0) {
        this.pressure = 0;
      }
    }
  }


  setMore(){
    this.more1 =true;
    console.log('dziala')
  }
  setMore2(){
    this.more2 = true;
  }


  test(){
this.more1 = false;

  }
  test2(){
    this.more2 = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
