import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  BaseComponent,
  SpinnerType,
} from '../../../base-component/base-component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client-service';
import { Create_Product } from '../../../contracts/create_product';
import { List } from './list/list';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private httpClient: HttpClientService
  ) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallBeat);
  }

  @ViewChild(List) listComponent;

  createdProduct(createdProduct: Create_Product) {
    this.listComponent.getProducts();
  }
}
