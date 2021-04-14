import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  products = [
    {
        "productId": 2,
        "item": "Soda",
        "details": "2L Bottle",
        "price": 3.25
    },
    {
        "productId": 3,
        "item": "Breadsticks",
        "details": "8 per pack",
        "price": 2.5
    },
    {
        "productId": 4,
        "item": "Pizza - Small Pepperoni",
        "details": "8in",
        "price": 7.35
    },
    {
        "productId": 5,
        "item": "Pizza - Medium Pepperoni",
        "details": "12in",
        "price": 9.35
    },
    {
        "productId": 6,
        "item": "Pizza - Large Pepperoni",
        "details": "18in",
        "price": 14.0
    },
    {
        "productId": 7,
        "item": "Pizza - Small House Special",
        "details": "8in",
        "price": 8.5
    },
    {
        "productId": 8,
        "item": "Pizza - Medium House Special",
        "details": "12in",
        "price": 10.5
    },
    {
        "productId": 9,
        "item": "Pizza - Large House Special",
        "details": "18in",
        "price": 16.0
    },
    {
        "productId": 11,
        "item": "Pizza - Update Test",
        "details": "18in",
        "price": 16.0
    }
]
  order = {
    customer: null,
    employee: null,
    timestamp: null,
    subtotal: 0,
    discount: 0,
    total: 0
  }
  submitted = false;

  currentNumber = '0';
  firstOperand = null;
  operator = null;
  quantity = 1;
  waitForSecondNumber = false;

  constructor(private productService: ProductService,
              private orderService: OrderService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private orderProductService: OrderProductService,
              private router: Router) { }

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
    console.log(JSON.stringify(this.order))
    this.order.total = Number(this.order.total);
    console.log(JSON.stringify(this.order.customer.values));
    // this.orderService.create(this.order)
    //   .subscribe(data => {
    //     console.log(data);
    //   })
  }

  // Calculator Methods

  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
    }
    this.products.forEach(item => {
      if (item.price == Number(v)){
        this.selectedProducts.push(item);
      }
    })
    this.order.subtotal += Number(v);
    console.log(this.selectedProducts);
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  private doCalculation(op , secondOp){
    switch (op){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp; 
      case '=':
      return secondOp;
    }
  }

  public getOperation(op: string){
    console.log(op);

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }

  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
    this.selectedProducts = [];
    this.order = {
      customer: null,
      employee: null,
      timestamp: null,
      subtotal: 0,
      discount: 0,
      total: 0
    }
  }

  public productMenu(){
    this.router.navigate(['/products']);
  }
}
