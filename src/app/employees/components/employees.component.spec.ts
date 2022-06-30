import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EmployeeService } from '../services/employee.service';

import { EmployeesComponent } from './employees.component';

// Mock data for employeeList
const mockEmployeeList = [
  {
    id: 1,
    name: 'Leanne Graham',
    phone: '1-770-736-8031 x56442'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    phone: '010-692-6593 x09125'
  }
];

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesComponent ],
      imports: [
        HttpClientModule,
      ],
      providers: [
        { 
          provide: EmployeeService,
          useValue: {
            // mocking service data
            getEmployees: () => of(mockEmployeeList),
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    employeeService = TestBed.inject(EmployeeService); // important as we inject this service in our comp 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* 3 Challenges or Disadvantages of Testing with Direct API request 
    1. time consuming 
    2. backend might not be stable / may still be in development 
    3. data inconsistencies may be there 

    So, we are NOT going to send real ajax requests from out test spec. 
    Solution is to mock -- Let's go with MOCKING API CALLS 
  */

  it('should have employeeList from service [MOCKING API]', () => {
    expect(component.employeeList).toEqual(mockEmployeeList);
  });

});
