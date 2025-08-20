import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client-service';
import { Create_Product } from '../../../contracts/create_product';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(private httpClientService: HttpClientService) {
    this.httpClientService
      .get({
        controller: 'products',
      })
      .subscribe((met) => console.log(met));
  }

  create(product: Create_Product, successCallBack?: any) {
    this.httpClientService
      .post(
        {
          controller: 'products',
        },
        product
      )
      .subscribe((result) => {
        successCallBack();
      });
  }
}
