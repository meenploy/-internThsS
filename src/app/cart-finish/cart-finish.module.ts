import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartFinishPageRoutingModule } from './cart-finish-routing.module';

import { CartFinishPage } from './cart-finish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartFinishPageRoutingModule
  ],
  declarations: [CartFinishPage]
})
export class CartFinishPageModule {}
