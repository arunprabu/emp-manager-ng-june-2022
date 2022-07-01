import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutComponent } from './about/components/about.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { CalcComponent } from './about/components/calc/calc.component';
import { CounterComponent } from './about/components/counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';

// Main Switching Box
@NgModule({ // Decorator
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    CalcComponent,
    CounterComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EmployeesModule,
    ProductsModule,
    AppRoutingModule,
  ],
  providers: [],
  // AppModule should in turn be bootstrapped with a component  -- AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
