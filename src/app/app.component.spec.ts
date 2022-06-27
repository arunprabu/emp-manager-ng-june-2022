//all unit testing files will be with extn spec.ts 


// TestBed - Configures and initializes environment for unit testing
import { TestBed } from '@angular/core/testing'; 
import { RouterTestingModule } from '@angular/router/testing';
// The comp is taken for testing 
import { AppComponent } from './app.component'; // GIVEN
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';

// TEST PATTERN: GIVEN, WHEN, THEN (ARRANGE, ACT, ASSERT- AAA)
// group of related test spec - test suite 
describe('AppComponent', () => {
  // will be exec'd before each test spec is exec'd 
  beforeEach(async () => {
    // the following one is similar to app module 
    await TestBed.configureTestingModule({ // Test Bed is configured 
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, // App comp is taken for testing
        HeaderComponent,
        FooterComponent,
        MenuComponent
      ],
    }).compileComponents();
  });

  // test spec #1 / test case 
  it('should create the app', () => {
    // loading the comp for testing - WHEN
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // taking up comp ts class for testing 
    
    // THEN, 
    expect(app).toBeTruthy();
  });

  it('should have a variable appName with value "Emp Manager"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // taking up app.comp.ts class for testing 

    expect(app.appName).toBe('Emp Manager');
  });

  // it('should render appName in h1', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges(); // Triggers a change detection cycle for the component.
  //   const appCompHTML = fixture.nativeElement as HTMLElement; // Taking up app.comp.html for testing 

  //   expect(appCompHTML.querySelector('h1')?.textContent).toBe('Emp Manager');
  // });

 
});
