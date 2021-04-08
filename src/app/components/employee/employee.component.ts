import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees = [];
  currentEmployee = null;
  currentIndex = -1;
  active = null;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeeService.getAll()
      .subscribe(
        data => {
          this.employees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEmployees();
    this.currentEmployee = null;
    this.currentIndex = -1;
  }

  setActiveEmployee(employee, index): void {
    this.currentEmployee = employee;
    this.currentIndex = index;
  }

  removeAllEmployees(): void {
    this.employeeService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveEmployees();
        },
        error => {
          console.log(error);
        });
  }

  sortEmployees(active): void {
    console.log(this.employees)
    this.employees = this.employees.filter(employee => {
      employee.active == active;
    })
    console.log(this.employees)
    console.log(`Sorting ${active}`)
  }

  sortActive(): void {
    console.log(this.employees)
    this.employees = this.employees.filter(employee => {
      employee.active == true;
    })
    console.log(this.employees)
    console.log(`Sorting Active`)
  }
}
