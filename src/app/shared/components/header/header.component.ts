import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';

// Decorator
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', // html 
  styleUrls: ['./header.component.css'] //css 
})
export class HeaderComponent implements OnInit {
  
  cartCount = 0;
  
  constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
    // Lets subscribe to the cart data service
    this.cartDataService.latestCartItems.subscribe( (cartItems: any[]) => {
      console.log(cartItems);
      this.cartCount = cartItems.length;
    });
  }

}
