import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';

// Config the routes 
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'concepts', component: ConceptsComponent },
  { path: 'employees', component: EmployeesComponent},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
