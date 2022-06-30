import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorizerDirective } from '../directives/colorizer.directive';

import { ConceptsComponent } from './concepts.component';

xdescribe('ConceptsComponent', () => {
  let component: ConceptsComponent;
  let fixture: ComponentFixture<ConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptsComponent, ColorizerDirective]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have red <p>', () => {
  //   const p: HTMLElement = fixture.nativeElement.querySelectorAll('p')[0];
  //   const bgColor = p.style.backgroundColor;
  //   expect(bgColor).toBe('red');
  // });


  
});
