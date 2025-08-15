import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './admin/layout/layout';
import { Dashbords } from './admin/components/dashbords/dashbords';
import { Home } from './ui/components/home/home';
import { LayoutModule } from './admin/layout/layout-module';

const routes: Routes = [
  {
    path: "admin", component: Layout, children: [
      {path: "", component: Dashbords},
      {path: "customers", loadChildren: ()=> import("./admin/components/customers/customers-module")
        .then(module => module.CustomersModule)},
      {path: "orders", loadChildren: ()=> import("./admin/components/orders/orders-module")
        .then(module => module.OrdersModule)},
      {path: "products", loadChildren: ()=> import("./admin/components/products/products-module")
        .then(module => module.ProductsModule)}
    ]
  },
  {path: "", component: Home},
  {path: "basket", loadChildren: ()=> import("./ui/components/baskets/baskets-module")
    .then(module => module.BasketsModule)},
  {path: "products", loadChildren: ()=> import("./ui/components/products/products-module")
    .then(module => module.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
