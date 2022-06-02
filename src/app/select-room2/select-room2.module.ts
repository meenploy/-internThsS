import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectRoom2PageRoutingModule } from './select-room2-routing.module';

import { SelectRoom2Page } from './select-room2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SelectRoom2PageRoutingModule
  ],
  declarations: [SelectRoom2Page]
})
export class SelectRoom2PageModule {}
