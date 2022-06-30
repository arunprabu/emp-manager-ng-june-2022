import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

// setting up child routes / nested routes
const routes: Routes = [
  { path: 'employees', component: EmployeesComponent},
  { path: 'employees/add', component: AddEmployeeComponent},
  { path: 'employees/:id', component: EmployeeDetailsComponent} // id is the url param
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // registering child routes
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesRoutingModule { }
