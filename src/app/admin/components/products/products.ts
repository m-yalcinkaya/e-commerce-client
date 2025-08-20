import { Component, OnInit } from '@angular/core';
import {
  BaseComponent,
  SpinnerType,
} from '../../../base-component/base-component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client-service';

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

    this.httpClient
      .get({
        controller: 'products',
      })
      .subscribe((data) => console.log(data));

    this.httpClient
      .get({
        controller: 'products',
      })
      .subscribe((data) => console.log(data));
  }
}
