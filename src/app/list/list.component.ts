import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';
import { Observable } from 'rxjs/Observable';
import { ICount } from '../models/count';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  counts$: Observable<ICount>;

  constructor(private counterService: CounterService) {
    this.counts$ = this.counterService.getCounts();
  }

  ngOnInit() {
    this.counts$.subscribe(
      counts => console.log(counts)
    );
  }

}
