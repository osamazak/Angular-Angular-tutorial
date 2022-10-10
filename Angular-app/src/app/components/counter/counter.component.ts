import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  public count:number = 0;

  ngOnInit(): void {
  }

  public incrementCounter():void{
    this.count = this.count + 1;
  }
  public decrementCounter():void{
    this.count =(this.count - 1 > 0) ? this.count - 1 : 0;
  }

}
