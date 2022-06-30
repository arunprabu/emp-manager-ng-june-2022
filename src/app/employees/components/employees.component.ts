import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit {

  employeeList: any[] = [];

  constructor(private employeeService: EmployeeService) { // Dep Inj
    console.log('Inside constructor');
  }

  ngOnInit(): void { // lifecycle hook
    // whenever the comp comes into view this will be called
    // ideal place for us to send ajax req 
    console.log('Inside ngOnInit');

    this.employeeService.getEmployees()
      .subscribe( (res: any) => {
        console.log(res);
        this.employeeList = res;
      });
  }

}
