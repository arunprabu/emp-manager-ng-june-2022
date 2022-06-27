import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from './about/components/about.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { CalcComponent } from './about/components/calc/calc.component';
import { CounterComponent } from './about/components/counter/counter.component';

// Main Switching Box
@NgModule({ // Decorator
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    EmployeesComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    CalcComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  // AppModule should in turn be bootstrapped with a component  -- AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
