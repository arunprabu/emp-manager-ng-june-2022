import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

// Main Switching Box
@NgModule({ // Decorator
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // AppModule should in turn be bootstrapped with a component  -- AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
