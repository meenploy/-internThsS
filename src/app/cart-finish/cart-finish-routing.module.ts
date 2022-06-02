import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartFinishPage } from './cart-finish.page';

const routes: Routes = [
  {
    path: '',
    component: CartFinishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartFinishPageRoutingModule {}
