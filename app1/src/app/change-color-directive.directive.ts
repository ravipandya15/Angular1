import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeColorDirective]'
})
export class ChangeColorDirectiveDirective {

  
  //  constructor(){}
  @HostBinding('style.border') border : any;
  constructor(private el : ElementRef, private renderer : Renderer2) {

   }

   @HostListener('click') onclick(){
    alert('Hello')
  }
    @HostListener('mouseover') whenMouseEnter(){
    this.changeBgColor('red');
    this.border = '5px solid green';
  }
    @HostListener('mouseleave') whenMouseLeave(){
    this.changeBgColor('black')
  }
   changeBgColor(color:string){
     this.renderer.setStyle(this.el.nativeElement, 'color', color)
   }

}
