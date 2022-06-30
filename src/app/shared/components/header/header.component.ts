import { Component, OnInit } from '@angular/core';

// Decorator
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', // html 
  styleUrls: ['./header.component.css'] //css 
})
export class HeaderComponent implements OnInit {
  // ts
  constructor() { }

  ngOnInit(): void {
  }

  
}
