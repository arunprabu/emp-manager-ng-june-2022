import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { CalcComponent } from './calc/calc.component';
import { CounterComponent } from './counter/counter.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AboutComponent,
        CalcComponent,
        CounterComponent,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has London as City', () => {
    expect(component.city).toBe('London');
  });

  // Now it is time to test async logic 
  // Approach #1 
  it('has John in personName [Testing Async] #1', fakeAsync(() => {
    component.ngOnInit();
    tick(2001);
    expect(component.personName).toBe('John');
  }));

  // Approach #2 
  it('has John in personName [Testing Async] #2', ((done) => {
    component.ngOnInit();
    setTimeout( () => {
      // detectChanges can be useful if you want to work with updates in HTML
      fixture.detectChanges(); 
      console.log('------------------');
      expect(component.personName).toBe('John');
      done();
    }, 2001);
  }));


});
