import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // exposed in an attribute selector
})
export class ColorizerDirective {

  divEl: any;
  // Step 1: Let's find out the element in which the appColorizer is used 
  // Step 2: Change the bg color, text color of the element.

  @HostBinding('style.border') border: string = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {  // dependency injection
    console.log('Inside Contructor');
    console.log(this.elRef.nativeElement); //  the element in which the appColorizer is used 

    // Change the bg color, text color of the element.
    this.divEl = this.elRef.nativeElement;
    // changing bg color using js -- Not Recommended
    // divEl.style.backgroundColor = 'red';
    // divEl.style.color = '#fff';
    // divEl.style.height = '200px';

    // changing bg color using Angular's Renderer2 - Recommended
    this.renderer.setStyle(this.divEl, 'background-color', 'red');
    this.renderer.setStyle(this.divEl, 'color', '#fff');
    this.renderer.setStyle(this.divEl, 'height', '200px');

    const newPara = this.renderer.createElement('p');
    this.renderer.setStyle(newPara, 'float', 'right');
    this.renderer.setStyle(newPara, 'font-size', '10px');
    const poweredByText = this.renderer.createText('Powered by Colorizer Directive');
    this.renderer.appendChild(newPara, poweredByText); 
    this.renderer.appendChild(this.divEl, newPara);
  }

  // Handle Events - click, mouseover, mouseout
  @HostListener('click', ['$event.target'])
  handleClick(targetEl: any){
    console.log(targetEl); // will show on what element you clicked inside the div 
    this.renderer.setStyle(targetEl, 'background-color', 'yellow');
    this.renderer.setStyle(targetEl, 'color', '#000');

    const newSpan = this.renderer.createElement('span');
    this.renderer.setStyle(newSpan, 'font-size', '12px');
    const developedByText = this.renderer.createText('Developed by Arun');
    this.renderer.appendChild(newSpan, developedByText); 
    this.renderer.appendChild(this.divEl, newSpan);

    this.border = 'dashed 5px #000';
  }

  // TODO: work on mouseover change bg color to light green 
  // TODO: work on mouseout change bg color back to red

  


}
