import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {

  constructor() {
    this.updatTime();
  }


  public tourName:string = "Elephant";
  public tourImage4:string = "/assets/img/4.jpg";
  public tourImage3:string = "/assets/img/3.jpg";
  public tourImage2:string = "/assets/img/2.jpg";
  public tourImage1:string = "/assets/img/1.jpg";
  public time:string = new Date().toLocaleTimeString();

  ngOnInit(): void {
  }

  public getDate():string {
    return new Date().toLocaleDateString();
  }
  public updatTime() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    },1000);
  }

}
