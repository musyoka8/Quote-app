import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightquote]'
})
export class HighlightquoteDirective {

  constructor(private elem: ElementRef ) {}
  private quoteDeco(action: string ){
    // tslint:disable-next-line: whitespace
    this.elem.nativeElement.style.backroundColor='orange';
  }

}
