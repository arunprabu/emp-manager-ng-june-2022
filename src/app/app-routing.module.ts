import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/components/about.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AddEmployeeComponent } from './employees/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/components/employee-details/employee-details.component';
import { EmployeesComponent } from './employees/components/employees.component';
import { HomeComponent } from './home/home.component';

// Config the routes 
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'concepts', component: ConceptsComponent },
  { path: 'employees', component: EmployeesComponent},
  { path: 'employees/add', component: AddEmployeeComponent},
  { path: 'employees/:id', component: EmployeeDetailsComponent}, // id is the url param
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
