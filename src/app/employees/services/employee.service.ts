import { Injectable } from '@angular/core';

// Decorator
@Injectable({
  providedIn: 'root' // app module won't be updated because of this
})
export class EmployeeService {

  constructor() { }
}
