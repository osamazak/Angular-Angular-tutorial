import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-app',
  templateUrl: './sms-app.component.html',
  styleUrls: ['./sms-app.component.css']
})
export class SmsAppComponent implements OnInit {

  constructor() { }

  public message:string = '';
  public maxcharCount:number = 250;

  ngOnInit(): void {
  }

}
