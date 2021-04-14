import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { OrderProductService } from 'src/app/services/order-product.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.scss']
})
export class AddOrdersComponent implements OnInit {

  employees = [];
  customers = [];
  selectedProducts = [];
  order = {
    customer: null,
    employee: null,
    timestamp: null,
    subtotal: 0,
    discount: 0,
    total: 0
  }
  submitted = false;

  constructor(private productService: ProductService,
              private orderService: OrderService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private orderProductService: OrderProductService) { }

  ngOnInit(): void {
    this.retrieveEmployees();
    this.retrieveCustomers();
  }

  retrieveEmployees(){
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

  retrieveCustomers(){
    this.customerService.getAll()
      .subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  newOrder(): void {
    this.submitted = false;
    this.order = {
      customer: null,
      employee: null,
      timestamp: null,
      subtotal: 0,
      discount: 0,
      total: 0
    };
  }

  saveOrder(){
    console.log(this.order)
  }
}
