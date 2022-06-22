import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {
  // ts 
  // ideal place for you to have public/private variables
  appName = 'Employee Manager App'; // interpolation 
  companyName = 'Cognizant Technologies Pvt Ltd'; // prop binding 
  courseName = "Angular 13"; // two way binding 
  
  // TODO: number, boolean, colors, profile is an obj with exp property, 
  // getExp should return exp property from profile obj 
  
  // for custom property binding
  // Step 3 of CPB: Let's have data in variable to be sent to app-cpb
  userData = {
    name: 'John',
    citiesVisited: ['Paris', 'Atlanta', 'Toronto', 'Stockholm']
  }

  dataReceivedFromParent: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  handleClickMe(){ // event binding 
    alert('clicked');
  }

  // Step 4 of CEB: Let's receive the data and then display in html by storing it in a local variable
  handleAccountLoaded(event: any){
    console.log(event);
    this.dataReceivedFromParent = event;
  }


}
