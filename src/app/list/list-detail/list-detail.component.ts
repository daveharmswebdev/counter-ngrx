import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CounterService } from '../../shared/counter.service';
import { ICount } from '../../models/count';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  countIndex: number;
  count: ICount;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private counterService: CounterService
  ) { }

  ngOnInit() {
    this.countIndex = this.route.snapshot.params['id'];
    this.counterService.getCountById(this.countIndex).subscribe(
      count => this.count = count
    );
  }

  editCount(count) {
    this.counterService.updateCount(count)
      .then(() => this.router.navigate(['/list']));
  }

  removeCount(id) {
    console.log(id);
    this.counterService.removeCount(id)
      .then(() => this.router.navigate(['/list']));
  }

}
