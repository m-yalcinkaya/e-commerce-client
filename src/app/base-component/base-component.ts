import { NgxSpinnerService, Spinner } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}

  showSpinner(spinner: SpinnerType) {
    this.spinner.show(spinner);

    setTimeout(() => this.hideSpinner(spinner));
  }

  hideSpinner(spinner: SpinnerType) {
    this.spinner.hide(spinner);
  }
}

export enum SpinnerType {
  'BallSquareClockwiseSpin' = 's1',
  'BallBeat' = 's2',
  'BallAtom' = 's3',
}
