import { Component, signal } from '@angular/core';
import { CustomToastr, MessageType, Options, Position } from './services/ui/custom-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  constructor(private toastr: CustomToastr) {
    toastr.message("Merhaba ben Mustafa Yalçınkaya. Bursa Uludag Üniversitesinden mezun oldum.",
       "Mustafa'dan Yeni Bildirim",
      {
        messageType: MessageType.Success,
        position: Position.TopRight,
        timeOut: 10000
      }
      )
  }

  protected readonly title = signal('ECommerceClient');
}
