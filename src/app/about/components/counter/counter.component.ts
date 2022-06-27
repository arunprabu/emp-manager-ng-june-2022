import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent implements OnInit {

  counterValue = 0;
  message = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleIncrement(): void{
    if(this.counterValue < 10){
      this.counterValue += 1; 
    }else{
      this.message = 'Maximum Reached';
    }
  }

  handleDecrement(): void{
    if(this.counterValue > 0){
      this.counterValue -= 1; 
    }else{
      this.message = 'Minimum Reached';
    }
  }

}
