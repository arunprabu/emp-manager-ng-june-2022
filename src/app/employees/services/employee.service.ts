import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root' // app module won't be updated because of this
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  // create employee
  createEmployee(formData: any){ // 1. get the form data from the comp ts 
    console.log(formData);
    // 2. send the form data to the rest api 
    // 2.1 What's the REST API Endpoint? https://jsonplaceholder.typicode.com/users
    // 2.2 What's the Http Method? POST 
    // 2.3 What's the REST API Client tool? HttpClient
    return this.http.post('https://jsonplaceholder.typicode.com/users', formData)
      .pipe( map((res: any) => { // 3. get the res from the rest api 
        console.log(res);
        return res; // 4. send the res to the comp ts 
      }));
  }

  // list employees
  getEmployees() {
    console.log('Inside getEmployees');

    // send the req to the REST API 
    // REST API Endpoint? https://jsonplaceholder.typicode.com/users
    // Http Method? GET
    // REST API Client tool? HttpClient
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe( map((res: any) => { // get the res from the rest api 
        console.log(res);
        return res; // send the res to the comp ts 
      }));

  }

  // fetch employee details
  getEmployeeById(empId: any){
    console.log(empId);
    const empIdApiUrl = 'https://jsonplaceholder.typicode.com/users/' + empId;
    return this.http.get(empIdApiUrl)
      .pipe( map((res: any) => { // get the res from the rest api 
        console.log(res);
        return res; // send the res to the comp ts 
      }));
  }


  // https://jsonplaceholder.typicode.com/users/1  -- PUT 

  // https://jsonplaceholder.typicode.com/users/1   -- DELETE


}
