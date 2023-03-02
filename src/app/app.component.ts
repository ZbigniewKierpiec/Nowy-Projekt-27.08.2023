import { Component, OnInit } from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';
import { Model } from '../app/components/temperature-top/model';
import { Models } from '../app/components/temperature-top/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Model[] = Models;
  active: boolean;
  room: string = 'Living Room';
  isSelected;
  panelSelected:string;
  dropDown(event: any) {
    console.log(event);
    this.active = event;
  }

  check(item: any) {
    console.log(item);
    this.room = item.item;

    this.active = false;

    this.isSelected = item;
  }


panel(event){
console.log(event)
this.panelSelected = event;
}

checkPanelType(item){
 console.log(item)
}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
