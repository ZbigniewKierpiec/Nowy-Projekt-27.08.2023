import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-temperature-top',
  templateUrl: './temperature-top.component.html',
  styleUrls: ['./temperature-top.component.scss']
})
export class TemperatureTopComponent implements OnInit {
@Output() start:EventEmitter<boolean> = new EventEmitter<boolean>();
@Input() room:string;
@Input() active:boolean;


dropDown(){
this.active=!this.active;

this.start.emit(this.active)

}







  constructor() { }

  ngOnInit(): void {
  }

}
