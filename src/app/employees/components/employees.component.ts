import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEmployee } from '../models/iemployee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit, OnDestroy {

  employeeList: IEmployee[] = [];
  $employeesSubscription!: Subscription;

  constructor(private employeeService: EmployeeService) { // Dep Inj
    console.log('Inside constructor');
  }

  ngOnInit(): void { // lifecycle hook
    // whenever the comp comes into view ngOnInit() will be called
    // ideal place for us to send ajax req 
    console.log('Inside ngOnInit');
    this.$employeesSubscription = this.employeeService.getEmployees()
      .subscribe( (res: IEmployee[]) => {
        console.log(res);
        this.employeeList = res;
      });
  }

  ngOnDestroy(){
    // whenever the comp goes out of the view ngOnDestroy() will be called
    // ideal place for you to remove data, clear interval, clear timeout, unsubscribe
    console.log('Inside ngOnDestroy');
    if(this.employeeList && this.employeeList.length > 0){
      this.employeeList.length = 0; // clearing the array
    }
    this.$employeesSubscription.unsubscribe();
  }

}
