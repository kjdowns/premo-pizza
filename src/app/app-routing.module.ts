import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './compenents/product/product.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { EmployeeOrdersComponent } from './components/employee/employee-orders/employee-orders.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddOrdersComponent } from './components/orders/add-orders/add-orders.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'employees', component: EmployeeComponent},
  {path: 'employees/add', component: EmployeeAddComponent},
  { path: 'employees/orders/:id', component: EmployeeOrdersComponent },
  {path: 'employees/:id', component: EmployeeEditComponent},
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/add', component: AddCustomerComponent },
  { path: 'customers/:phoneNumber', component: CustomerDetailsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/add', component: AddOrdersComponent },
  { path: 'products', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
