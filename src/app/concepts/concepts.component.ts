import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit {
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
  dataAccessFromChild = '';

  @ViewChild(CebComponent, { static: false}) cebData!: CebComponent;

  constructor(private cd: ChangeDetectorRef ) { 

  }

  ngOnInit(): void {
    // when @ViewChild with static true we can read cebData here
  }

  ngAfterViewInit(): void {
    // when @ViewChild with static false we can read cebData here
    // parent comp has to Wait till child component's data are set up 
    this.dataAccessFromChild = this.cebData.accountInfo.name;
    this.cd.detectChanges();
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
