import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.scss']
})
export class SkyComponent implements OnInit {
@Input() active:string;
  constructor() { }

  ngOnInit(): void {
  }

}
