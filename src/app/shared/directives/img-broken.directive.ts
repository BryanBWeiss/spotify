import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
@HostListener('error') handlError(): void{
 const elNative = this.elHost.nativeElement
  console.log('imagen rota -->', this.elHost);
  elNative.src = '../../../assets/images/off.png'
}
  constructor(private elHost: ElementRef) {
    console.log(this.elHost);
   }
  
}
