import { Injectable } from '@angular/core';
import {Employee} from "../models/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employee:Employee = {
    sno:"7458SVF",
    name:"osama zaki",
    age:28,
    designation:"Full satck Php Developer ",
    doj:new Date(),
    salary:18000,
  }
  constructor() { }

  public getEmployee():Employee{
    return this.employee;
  }
}
