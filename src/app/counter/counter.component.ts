import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { ICount } from '../models/count';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  children = 0;
  teenagers = 0;
  adults = 0;
  counter = 'Dave';

  constructor() { }

  ngOnInit() {
  }

  setCounter() {
    console.log(this.counter);
  }

  addChild() { this.children++; }
  removeChild() { this.children--; }
  addTeen() { this.teenagers++; }
  removeTeen() { this.teenagers--; }
  addAdult() { this.adults++; }
  removeAdult() { this.adults--; }

}
