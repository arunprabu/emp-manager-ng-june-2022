import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  //ng g interceptor shared/interceptors/auth  
  constructor() {}

  // intercept all the subsequent http class manipulate the http req header with auth token
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    
    // access the token 
    const bearerToken = localStorage.getItem('authToken');
    console.log(bearerToken);

    // clone the req in order to modify the req header
    request = request.clone({ 
      //manipulate the http req header with auth token which is stored in bearerToken
      setHeaders: {
        Authorization: 'Bearer ' + bearerToken
      }
    });
    return next.handle(request);
  }
}
