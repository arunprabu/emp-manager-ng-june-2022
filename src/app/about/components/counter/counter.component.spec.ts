import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default Value 0', ()=>{
    expect(component.counterValue).toEqual(0);
  });

  it('should increment and decrement counterValue', () => {
    // calling the event handler method
    component.handleIncrement(); 
    expect(component.counterValue).toEqual(1);

    // calling the event handler method
    component.handleDecrement();
    expect(component.counterValue).toEqual(0);
  });

  // Events from html 
  it('should increment value in html template thru click on increment btn', ()=>{
    // find the button element which has a css class 'incrementBtn'
    const counterCompHTML = fixture.debugElement;
    // triggering the event thru program.
    counterCompHTML.query(By.css('.incrementBtn')).triggerEventHandler('click', null);

    fixture.detectChanges();
    const valueOfCounterEl = counterCompHTML.query(By.css('span.counter')).nativeElement.innerText;
    expect(valueOfCounterEl).toEqual('1');
  });

  // TODO: Decrement value in html template thru click on decrement btn

  // TODO: should stop at 0 and show Minimum Reached upon decrement 
  // TODO: should stop at 10 and show Maximum Reached upon increment 

  // find an element and check whether it has css style (inline style)
  it('should have red bg in h2 element [CSS style]', () => {
    const counterCompHTML = fixture.nativeElement as HTMLElement;
    const bgColor =  counterCompHTML.querySelector('h2')?.style.backgroundColor;
    // expect(bgColor).toBe('red'); // Not recommended if you use #ff0000 or rgb(255, 0, 0)
    expect(bgColor).toBe('rgb(255, 0, 0)');
  });

  // TODO: testing whether para element (with msg class ) has css class 'redText' 






});
