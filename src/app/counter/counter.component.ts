import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { ICount, INewCount } from '../models/count';
import { CounterService } from '../shared/counter.service';

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

  constructor(private counterService: CounterService) { }

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

  addCount() {
    const count: INewCount = {
      counter: this.counter,
      children: this.children,
      teenagers: this.teenagers,
      adults: this.adults
    };
    this.counterService.addCount(count);
    console.log('posted', count);
  }

}
