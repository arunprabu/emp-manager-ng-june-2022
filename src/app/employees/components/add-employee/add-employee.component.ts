import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  // Step 1: Have the TS equivalent  of the form tag (FormGroup)
  addEmployeeForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // Step 1 Continues...
    this.addEmployeeForm = new FormGroup({
      // Step 2: Have the TS equivalents of the input tags (FormControl)
      // for Step 3 and 4: Refer HTML
      name: new FormControl('', Validators.required), // Step 5: Let's work on validation
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

}
