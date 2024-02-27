import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardResults]'
})
export class CardResultsDirective {
  constructor(private el: ElementRef) {
    this.opacity('');
    this.scale('');
    this.cursor('');
  }

  private opacity(show: string) {
    this.el.nativeElement.style.opacity = show;
  }

  private scale(up: string) {
    this.el.nativeElement.style.scale = up;
  }

  private cursor(pointer: string) {
    this.el.nativeElement.style.cursor = pointer;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.opacity('1.0');
    this.cursor('pointer');
    this.scale('0.9');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.opacity('1.0');
    this.cursor('pointer');
    this.scale('1.0');
  }
}
