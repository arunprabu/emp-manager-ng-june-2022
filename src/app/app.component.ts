import { Component } from '@angular/core';

// Decorator 
@Component({
  selector: 'app-root', // the whole comp is exposed in a selector - an element selector
  templateUrl: './app.component.html', // html -template is  mandatory - only one
  styleUrls: ['./app.component.css'] // css - optional -- can be multiple
})
export class AppComponent {
  // ts
  title = 'emp-manager-june-2022';
}
