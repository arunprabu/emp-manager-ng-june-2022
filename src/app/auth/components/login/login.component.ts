import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="row">
      <form class="col-md-4 offset-md-4" #loginForm="ngForm" (ngSubmit)="handleLogin(loginForm)">
        <h1 class="h3 mb-3 fw-normal">Please Login</h1>

        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput"  
          placeholder="name@example.com" name="email" ngModel>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" 
          placeholder="Password" name="password" ngModel>
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>

        <div class="mt-3">
          <p>Not Registered? <a routerLink="/signup">Signup Now for Free</a></p>
        </div>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  handleLogin(form: NgForm){
    console.log(form);

    console.log(form.value);
    this.authService.login(form.value)
      .subscribe( (res: any) => {
        console.log(res);
        if(res && res.token){
          alert('Logged in successfully!');
          // token can be saved in session storage, local storage or cookies 
          localStorage.setItem('authToken', res.token);
          this.router.navigateByUrl(this.activatedRoute.snapshot.queryParams['redirectTo']);
        }
      });
  }

}
