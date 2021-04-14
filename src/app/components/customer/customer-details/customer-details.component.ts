import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  currentCustomer = null;
  message = '';

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCustomer(this.route.snapshot.paramMap.get('phoneNumber'));
  }

  getCustomer(id): void {
    this.customerService.get(id)
      .subscribe(
        data => {
          this.currentCustomer = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCustomer(): void {
    this.customerService.update(this.currentCustomer.phoneNumber, this.currentCustomer)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The customer was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateActive(status): void {
    const data = {
      name: this.currentCustomer.name,
      address: this.currentCustomer.address,
      phoneNumber: this.currentCustomer.phoneNumber,
      zipCode: this.currentCustomer.zipCode
    };

    this.customerService.update(this.currentCustomer.phoneNumber, data)
      .subscribe(
        response => {
          this.currentCustomer.active = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  deleteCustomer(): void {
    this.customerService.delete(this.currentCustomer.phoneNumber)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/customers']);
        },
        error => {
          console.log(error);
        });
  }

}
