import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AddEmployeeComponent } from './add-employee.component';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should set isSubmitted to true', () => {
  //   component.handleAddEmployee();
  //   expect(component.isSubmitted).toBeTruthy();
  // });

  // let's learn about spyOn 
  it('should call the handleAddEmployee  ', () => {
    spyOn(component, 'handleAddEmployee');
    // find out submit button element 
    const btnEl = fixture.debugElement.query(By.css('.submitBtn')).nativeElement;
    btnEl.click();
    expect(component.handleAddEmployee).toHaveBeenCalled();
    // expect(component.handleAddEmployee).toHaveBeenCalledTimes(1);
  });

  it('has valid form when all inputs are properly filled', () => {
    component.addEmployeeForm.controls['name'].setValue('steve');
    component.addEmployeeForm.controls['phone'].setValue('12312321');
    component.addEmployeeForm.controls['email'].setValue('a@b.com');
    expect(component.addEmployeeForm.valid).toBeTruthy();
  } );

  it('has invalid form when all inputs are NOT properly filled', () => {
    component.addEmployeeForm.controls['name'].setValue('');
    component.addEmployeeForm.controls['phone'].setValue('12312321');
    component.addEmployeeForm.controls['email'].setValue('xyz');
    expect(component.addEmployeeForm.valid).toBeFalsy();
  } );



});
