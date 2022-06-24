import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <p>Account Name: {{accountInfo?.name}}</p>
      <button (click)="handleSendDataToParent()">Send Data to Parent</button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  featureName = 'Child to Parent Comp Commn using @ViewChild()';
  // Step 0: Let's have the data in child comp -- we will send this data to parent comp later 
  accountInfo = {
    name: 'Steve',
    age: 25,
    skills: ['HTML', 'CSS', 'TS']
  };

  // Step 1: Let's create custom event 
  // Step 1.1 Create an object for EventEmitter class 
  @Output() accountLoaded = new EventEmitter(); // Step 1.2 Make it as custom event by using @Output() 

  constructor() { 
  }

  ngOnInit(): void {
  }

  handleSendDataToParent(){
    console.log('Before Triggering Custom Event');
    // Step 2: Trigger / Emit the Event thru program
    this.accountLoaded.emit(this.accountInfo); // Step 3: Send the data while emitting
  }

}
