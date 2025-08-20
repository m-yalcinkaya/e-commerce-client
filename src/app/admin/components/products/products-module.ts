import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from './products';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Create } from './create/create';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BaseComponent } from '../../../base-component/base-component';

@NgModule({
  declarations: [Products, Create],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Products }]),
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class ProductsModule {}
