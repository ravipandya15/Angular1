import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditcard]'
})
export class CreditcardDirective {

  constructor(private el :ElementRef) {
    console.log(el)
   }

  //  @HostListener()

}
