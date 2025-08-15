import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})


export class CustomToastr {
  constructor(private toastr: ToastrService) {}

  message(message: string, title: string, options: Partial<Options>) {
    this.toastr[options.messageType](message, title, {
      positionClass: options.position,
      timeOut: options.timeOut
    })
  }
}


export class Options{
  messageType: MessageType;
  position: Position;
  timeOut: number;
}

export enum MessageType{
  Success = "success", 
  Info = "info",
  Warning = "warning",
  Error = "error"
}

export enum Position{
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right", 
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWidth = "toast-top-full-width",
  BottomFullWidth = "toast-bottom-full-width",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center"
}


