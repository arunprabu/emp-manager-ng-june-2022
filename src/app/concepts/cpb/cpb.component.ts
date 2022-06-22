import { Component, Input, OnInit } from '@angular/core';

// Decorator
@Component({
  selector: 'app-cpb',
  template: `
    <div class="card">
      <div class="card-body">
        <p>Visited Cities: {{cities}}</p>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Parent to Child comp communication - Custom Property Binding 
  // Step 1: Let's have a public variable and make it a custom property
  @Input() cities: string[] = []; // Step 1 continues .. Let's make it a custom property using @Input()

  // Refer concepts.comp.html for step 2

  constructor() { }

  ngOnInit(): void {
  }

}
