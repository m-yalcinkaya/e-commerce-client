import { Injectable } from '@angular/core';
declare var alertify: any


@Injectable({
  providedIn: 'root'
})
export class Alertify {
  constructor() {}

  message(message: string, options: Partial<AlertifyOptions>){
    alertify.set('notifier','delay', options.delay);
    alertify.set('notifier','position', options.position);
    const ms = alertify[options.messageType](message);
    if(options.dismissOthers)
        ms.dismissOthers()
  }


  dismiss() {
    alertify.dismissAll()
  }
  
}

export enum MessageType{
  Error ="error", 
  Message = "message", 
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}


export enum Position{
  TopRight= "top-right",
  TopCenter= "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"
}

export class AlertifyOptions{
  messageType: MessageType;
  position: Position = Position.BottomRight;
  delay: number = 3;
  dismissOthers: boolean = false;
}



