import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.css']
})
export class ChangeUsernameComponent implements OnInit {

  constructor() { }

  public username:string = "";
  public clientname:string = "";

  ngOnInit(): void {
  }

  updateInput(event:any):void{
    this.username = event.target.value;
  }

}
