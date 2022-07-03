import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  count: number = 0;
  counter: any;

  startCounter() {
    if(!this.counter) {
      this.counter = interval(1000).subscribe(() => {
            this.count++;
          });
    }
  }
  stopCounter() {
    this.counter.unsubscribe();
    this.counter = undefined;
    this.count = 0;
  }

  ngOnInit(): void {
  }

}
