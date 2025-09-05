import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { Product } from '../../services/common/models/product';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../base-component/base-component';

declare var $: any;

@Directive({
  selector: '[appDelete]',
  standalone: false,
})
export class Delete {
  constructor(
    private spinner: NgxSpinnerService,
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClient: Product
  ) {
    const img = _renderer.createElement('img');
    img.setAttribute('src', 'assets/images/delete.png');
    img.setAttribute('style', 'cursor: pointer;');
    img.width = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img);
  }

  @Input() id: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  @HostListener('click')
  onClick() {
    this.spinner.show(SpinnerType.BallBeat);
    const td: HTMLTableCellElement = this.element.nativeElement;
    this.httpClient.delete(this.id);
    $(td.parentElement).fadeOut(500, () => {
      this.callback.emit();
    });
  }
}
