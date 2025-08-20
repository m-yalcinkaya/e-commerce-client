import { Component, OnInit } from '@angular/core';
import {
  BaseComponent,
  SpinnerType,
} from '../../../base-component/base-component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallBeat);
  }
}
