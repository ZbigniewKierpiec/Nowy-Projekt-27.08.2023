import { Component, Input, OnInit } from '@angular/core';
import { Shower } from './shower';
import { Showers } from './showers';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.scss']
})
export class BathroomComponent implements OnInit {
 @Input() active:string;

  shower:Shower[]=Showers;
  constructor() { }

  ngOnInit(): void {
  }

}
