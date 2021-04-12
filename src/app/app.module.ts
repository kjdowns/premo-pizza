import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { EmployeeOrdersComponent } from './components/employee/employee-orders/employee-orders.component';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './shared/material.module';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    CustomerComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    OrdersComponent,
    EmployeeOrdersComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
