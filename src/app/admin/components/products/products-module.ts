import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from './products';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Create } from './create/create';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { List } from './list/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@NgModule({
  declarations: [Products, Create, List],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Products }]),
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatPaginator,
  ],
})
export class ProductsModule {}
