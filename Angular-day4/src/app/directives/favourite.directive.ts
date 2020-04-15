import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appFavourite]'
})
export class FavouriteDirective {
  @Input() dataResult: any;
  constructor(el: ElementRef) { }

  @HostListener('click', ['$event.target'])
  onClick(ele: any) {
    if (ele.nodeName === 'I') {
      this.dataResult.isToken = !this.dataResult.isToken;
      this.dataResult.isToken ? this.dataResult.amount += 1 : this.dataResult.amount -= 1;
      if(this.dataResult.isToken) {
        ele.style.color = 'red';
      } else {
        ele.style.color = 'grey';
      }
    }
  }
}
