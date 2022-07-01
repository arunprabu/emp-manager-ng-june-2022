import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  login(formData: any){
    console.log(formData);

    // REST API URL: https://reqres.in/api/login 
    // Http Method: POST 
    return this.http.post('https://reqres.in/api/login', formData)
      .pipe( map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  isAuthenticated(){
    if(localStorage.getItem('authToken')){ // logged in
      return true;
    }else{ // not logged in
      return false; 
    }
  }
  
}
