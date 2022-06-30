import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  employeeData: any;
  dupEmployeeData: any;
  isUpdated = false;

  constructor( private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // Read URL Param - id 
    const empId = this.route.snapshot.paramMap.get('id');

    this.employeeService.getEmployeeById(empId)
      .subscribe( (res: any) => {
        this.employeeData = res;
      });
  }

  handleEditModalOpen(){
    this.dupEmployeeData = { ...this.employeeData };
  }

  handleUpdateEmployee(){
    // updated form data
    console.log(this.dupEmployeeData);
  }
}
