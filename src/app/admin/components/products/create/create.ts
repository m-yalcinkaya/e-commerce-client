import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../services/common/models/product';
import { Create_Product } from '../../../../contracts/create_product';
import {
  BaseComponent,
  SpinnerType,
} from '../../../../base-component/base-component';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  Alertify,
  MessageType,
  Position,
} from '../../../../services/admin/alertify';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private productService: Product,
    private alertify: Alertify
  ) {
    super(spinner);
  }

  ngOnInit(): void {}

  create(
    name: HTMLInputElement,
    stock: HTMLInputElement,
    price: HTMLInputElement
  ) {
    this.showSpinner(SpinnerType.BallBeat);
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

    this.productService.create(create_product, () => {
      this.hideSpinner(SpinnerType.BallBeat);
      this.alertify.message('Ürün başarıyla girilmiştir.', {
        messageType: MessageType.Success,
        dismissOthers: true,
        position: Position.TopRight,
      });
    });
  }
}
