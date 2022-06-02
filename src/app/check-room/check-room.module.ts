import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckRoomPageRoutingModule } from './check-room-routing.module';

import { CheckRoomPage } from './check-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CheckRoomPageRoutingModule
  ],
  declarations: [CheckRoomPage]
})
export class CheckRoomPageModule {}
