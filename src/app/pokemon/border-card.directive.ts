import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: "[pokemonBorderCard]",
})
export class BorderCardDirective {
  private initialColor: string="#f5f5f5";
  private defaultColor: string="#005688";
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input("pokemonBorderCard") borderColor: string; // ALIAS

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor); 
    this.setHeight(280);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + "px";
  }

  private setBorder(color: string) {
    let border = `solid 4px ` + color;
    this.el.nativeElement.style.border = border;
  }
}
