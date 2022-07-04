import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/components/about.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

// Config the routes 
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'concepts', component: ConceptsComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
