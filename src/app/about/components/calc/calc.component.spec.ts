import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has Calculator as heading in h2', () => {
    const calcCompHTML = fixture.nativeElement as HTMLElement;
    expect(calcCompHTML.querySelector('h2')?.textContent)
      .toContain('Calculator');
  });

  it('adds two numbers properly', () => {
    // sometimes multiple expectations are needed
    expect(component.add(10, 20)).toEqual(30);
    expect(component.add(5, 7)).toEqual(12);
  });

  it('adds two numbers and returns with return type number', () => {
    // checking the return type
    expect(component.add(10, 20)).not.toBeNaN();
  });


});
