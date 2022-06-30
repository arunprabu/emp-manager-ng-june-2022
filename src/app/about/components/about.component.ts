import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  city = '';
  personName = '';
  
  constructor(){}

  ngOnInit(): void {
    this.city = 'London';

    setTimeout( () => {
      this.personName = 'John';
    }, 2000); // 1 sec delay
  }

}
