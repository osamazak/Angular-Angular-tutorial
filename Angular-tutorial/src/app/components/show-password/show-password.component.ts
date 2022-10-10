import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css']
})
export class ShowPasswordComponent implements OnInit {

  constructor() { }

  public inputType:string = 'password';

  ngOnInit(): void {
  }

  public updateInputType($event:any):void{
    ($event.target.checked) ? this.inputType = "text" : this.inputType = "password";
  }

}
