import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loadData$$: Subscription = new Subscription();
  items: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadData$$ = timer(1000).subscribe(_ => {
      this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    });
  }


  ngDestroy(){
    this.loadData$$.unsubscribe();
  }
}
