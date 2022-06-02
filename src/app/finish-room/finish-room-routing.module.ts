import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishRoomPage } from './finish-room.page';

const routes: Routes = [
  {
    path: '',
    component: FinishRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishRoomPageRoutingModule {}
