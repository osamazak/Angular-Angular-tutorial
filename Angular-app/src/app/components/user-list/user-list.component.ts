import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import { User } from "../../models/User";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users:User[] = [] as User[];  constructor(private userService: UserService) { }

  public errorMessage:string | undefined = undefined;


  ngOnInit(): void {
    // this.userService.getUsers().subscribe((data) => {
    //   this.users = data;
    // });
  }

  public getUsersData(){
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    },(error) => {
      this.errorMessage = error;
    });
  }

}
