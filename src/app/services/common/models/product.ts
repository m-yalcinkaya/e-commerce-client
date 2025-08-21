import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client-service';
import { Create_Product } from '../../../contracts/create_product';
import { error } from 'node:console';
import { HttpErrorResponse } from '@angular/common/http';

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

  create(product: Create_Product, successCallBack?: any, errorCallBack?: any) {
    this.httpClientService
      .post(
        {
          controller: 'products',
        },
        product
      )
      .subscribe(
        (result) => {
          successCallBack();
        },
        (errorResponse: HttpErrorResponse) => {
          const _error: Array<{ key: string; value: Array<string> }> =
            errorResponse.error;
          let message = '';
          _error.forEach((v, index) => {
            v.value.forEach((_v, _index) => {
              message += `${_v}<br>`;
            });
          });
          errorCallBack(message);
        }
      );
  }
}
