import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr/>
      <app-menu>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <!-- Inline styles  -->
      <p class="copyrightText" 
        style="border: solid 1px green;">Copyright {{copyrightYear}} </p>
    </footer>
  `,
  // Internal styles */
  styles: [ 
    `
     .copyrightText{
       border: solid 1px red;
       color: #686868;
     } 
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  // ts 
  copyrightYear = 2022;

  constructor() { }

  ngOnInit(): void {
  }

}
