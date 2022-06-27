import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  template: `
   <div>
    <h2>My Calculator App - [Refer Spec file] | Testing Method, Return Type and HTML Text</h2>
   </div>
  `,
  styles: [
  ]
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  add(a: number, b: number): number {
    return a + b;
  }

}
