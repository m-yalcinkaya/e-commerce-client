import { Component, OnInit } from '@angular/core';
import { Alertify, MessageType, Position } from '../../../services/admin/alertify';

@Component({
  selector: 'app-dashbords',
  standalone: false,
  templateUrl: './dashbords.html',
  styleUrl: './dashbords.scss'
})
export class Dashbords implements OnInit{
  constructor(private alert: Alertify) {}

  ngOnInit(): void {
    }

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

}



