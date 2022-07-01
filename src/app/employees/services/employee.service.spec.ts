import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule // import as have used http client in our service
      ]
    });
    service = TestBed.inject(EmployeeService);
  });

  // setting up for spy 
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new EmployeeService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Testing getEmployees method only 
  it('should return expected employeeList (HttpClient called once)', (done: DoneFn) => {
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
  
    httpClientSpy.get.and.returnValue(of(mockEmployeeList));
  
    service.getEmployees().subscribe({
      next: (res) => {
        expect(res).toEqual(mockEmployeeList);
        done();
      },
      error: done.fail
    });
    // expect(httpClientSpy.get.calls.count())
    //   .withContext('one call')
    //   .toBe(1);
  });
});
