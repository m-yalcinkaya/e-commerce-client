import { Component, OnInit } from '@angular/core';
import {
  Alertify,
  MessageType,
  Position,
} from '../../../services/admin/alertify';
import {
  BaseComponent,
  SpinnerType,
} from '../../../base-component/base-component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashbords',
  standalone: false,
  templateUrl: './dashbords.html',
  styleUrl: './dashbords.scss',
})
export class Dashbords extends BaseComponent implements OnInit {
  constructor(private alert: Alertify, spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallBeat);
  }
  /*
    m(){
      this.alert.message("Merhaba ben Mustafa Yalçınkaya!", {
        messageType: MessageType.Error,
        delay: 2,
        dismissOthers: true
      })
    }

    d(){
      this.alert.dismiss()
    }
*/
}
