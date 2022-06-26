import { Component, OnInit } from '@angular/core';
import { EmployeeHttpService } from "../services/employee-http.service";

@Component({
  selector: 'app-employee-http-list',
  templateUrl: './employee-http-list.component.html',
  styleUrls: ['./employee-http-list.component.css']
})
export class EmployeeHttpListComponent implements OnInit {

  public employees = ([] as any[]);

  constructor(private employeehttpService: EmployeeHttpService) { }

  ngOnInit(): void {

    this.employeehttpService.getEmployees().subscribe(data => this.employees = data);
  }

}
