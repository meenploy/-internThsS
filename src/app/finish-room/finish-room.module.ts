import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishRoomPageRoutingModule } from './finish-room-routing.module';

import { FinishRoomPage } from './finish-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FinishRoomPageRoutingModule
  ],
  declarations: [FinishRoomPage]
})
export class FinishRoomPageModule {}
