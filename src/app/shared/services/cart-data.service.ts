import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  //Step 1: have default cart items  - 
  private currentCartItems: any[] = [ {
    id: 2,
    name: 'Cheese',
    category: 'Dairy',
    price: '$6.38'
  }];

  // Step2: Let's work on to create an observable. so that any comp can subscribe to it.
  // in order to do it, create an obj of BehaviorSubject with default cart items 
  private cartItemsList = new BehaviorSubject(this.currentCartItems); 
  
  // Step3: cartItemsList should be become subscribable. 
  latestCartItems: Observable<any[]> = this.cartItemsList.asObservable();

  constructor() { 
  }

  updateCart(pdt: any){
    console.log(pdt);
    // update the cart items 
    // let's now work on updating cart itmes array over observable
    this.latestCartItems.pipe( take(1)).subscribe( ( value: any ) => {
      console.log(value); // array of obj -- existing cart items 

      const newCartList = [ ...value, pdt ];
      console.log(newCartList);
      this.cartItemsList.next(newCartList);
    });
  }
}
