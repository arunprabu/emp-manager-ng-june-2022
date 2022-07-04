import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

// config child/nested route
const productsRoutes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: ':id', component: ProductsDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes) // registering child/nested route
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
