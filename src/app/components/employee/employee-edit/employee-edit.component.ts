import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  currentEmployee = null;
  message = '';

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEmployee(this.route.snapshot.paramMap.get('id'));
  }

  getEmployee(id): void {
    this.employeeService.get(id)
      .subscribe(
        data => {
          this.currentEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateEmployee(): void {
    this.employeeService.update(this.currentEmployee.id, this.currentEmployee)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The employee was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateActive(status): void {
    const data = {
      name: this.currentEmployee.name,
      address: this.currentEmployee.address,
      startDate: this.currentEmployee.startDate,
      endDate: this.currentEmployee.endDate,
      taxIs: this.currentEmployee.taxId,
      active: status
    };

    this.employeeService.update(this.currentEmployee.id, data)
      .subscribe(
        response => {
          this.currentEmployee.active = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  deleteEmployee(): void {
    this.employeeService.delete(this.currentEmployee.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error);
        });
  }

}
