import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr/>
      <app-menu></app-menu>
      <p>Copyright 2022 </p>
    </footer>
  `,
  styles: [ 
  ]
})
export class FooterComponent implements OnInit {
  // ts 
  constructor() { }

  ngOnInit(): void {
  }

}
