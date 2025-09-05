import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../../../services/common/models/product';
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
import { List_Product } from '../../../../contracts/list_product';
import { MatPaginator } from '@angular/material/paginator';

import { ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private productService: Product,
    private alertify: Alertify
  ) {
    super(spinner);
  }

  displayedColumns: string[] = [
    'name',
    'price',
    'stock',
    'createdDate',
    'updatedDate',
    'edit',
    'delete',
  ];

  dataSource: MatTableDataSource<any> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getProducts() {
    this.showSpinner(SpinnerType.BallBeat);
    const allProducts: { totalCount: number; products: List_Product[] } =
      await this.productService.read(
        this.paginator ? this.paginator.pageIndex : 0,
        this.paginator ? this.paginator.pageSize : 5,
        () => this.hideSpinner(SpinnerType.BallBeat),
        (errorMessage) =>
          this.alertify.message(errorMessage, {
            dismissOthers: true,
            messageType: MessageType.Error,
            position: Position.TopRight,
          })
      );

    var data = new MatTableDataSource<List_Product>(allProducts.products);
    this.dataSource = data;
    this.paginator.length = allProducts.totalCount;
  }

  async pageChanged() {
    await this.getProducts();
  }

  async ngOnInit() {
    await this.getProducts();
  }
}
