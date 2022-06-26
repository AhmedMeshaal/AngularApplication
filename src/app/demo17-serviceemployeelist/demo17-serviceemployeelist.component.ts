import { Component, OnInit } from '@angular/core';

// import service in necessary component files - Declared as dependency
import { EmployeeService } from "../services/employee.service";

@Component({
  selector: 'app-demo17-serviceemployeelist',
  templateUrl: './demo17-serviceemployeelist.component.html',
  styleUrls: ['./demo17-serviceemployeelist.component.css']
})
export class Demo17ServiceemployeelistComponent implements OnInit {

  // define an empty local employees array which will hold employees data after service all
  public employees = ([] as any[]);

  // refer to service with local variable as dependency in constructor
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  //  on component initialization get values from service method
    // @ts-ignore
    this.employees = this.employeeService.getEmployees();
  }

}
