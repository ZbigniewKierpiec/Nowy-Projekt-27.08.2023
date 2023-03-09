import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-apple-tv',
  templateUrl: './apple-tv.component.html',
  styleUrls: ['./apple-tv.component.scss']
})
export class AppleTvComponent implements OnInit {
  @Output() check:EventEmitter<boolean> = new EventEmitter<boolean>();
  appleTvActive:boolean= true;
  constructor() { }

  ngOnInit(): void {
  }

}
