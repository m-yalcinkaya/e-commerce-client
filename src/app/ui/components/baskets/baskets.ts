import { Component, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { delay } from 'rxjs';
import {
  BaseComponent,
  SpinnerType,
} from '../../../base-component/base-component';

@Component({
  selector: 'app-baskets',
  standalone: false,
  templateUrl: './baskets.html',
  styleUrl: './baskets.scss',
})
export class Baskets extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallBeat);
  }
}
