import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {
  @Output() scrollEnd = new EventEmitter();

  constructor() {}

  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.scrollEnd.emit();
    }
  }
}
