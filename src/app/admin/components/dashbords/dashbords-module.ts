import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashbords } from './dashbords';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Dashbords
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: Dashbords}
    ])
  ]
})
export class DashbordsModule { }
