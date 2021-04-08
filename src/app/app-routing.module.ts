import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeComponent},
  {path: 'employees/add', component: EmployeeAddComponent},
  {path: 'employees/:id', component: EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
