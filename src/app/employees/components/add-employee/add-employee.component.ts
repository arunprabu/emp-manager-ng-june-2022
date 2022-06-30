import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  // Step 1: Have the TS equivalent  of the form tag (FormGroup)
  addEmployeeForm!: FormGroup;
  isSaved = false;

  constructor(private employeeService: EmployeeService ) { // 1. connect with the service using dep injection

  }

  ngOnInit(): void {
    // Step 1 Continues...
    this.addEmployeeForm = new FormGroup({
      // Step 2: Have the TS equivalents of the input tags (FormControl)
      // for Step 3 and 4: Refer HTML
      name: new FormControl('steve', Validators.required), // Step 5: Let's work on validation
      phone: new FormControl('123423', Validators.required),// For step 6 : Refer HTML -- to display validation message
      email: new FormControl('s@t.com', [Validators.required, Validators.email]) // we can add multiple validators too
    });
  }

  handleAddEmployee(): void {
    console.log(this.addEmployeeForm);
    // form data
    console.log(this.addEmployeeForm.value);
    // 2. send the above form data to the service 
    this.employeeService.createEmployee(this.addEmployeeForm.value)
      .subscribe( (res: any) => {
        //console.log(res); // 3. get the res from the service 
        if(res && res.id){
          this.isSaved = true;
        }
      });
  }

}
