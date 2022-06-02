import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckRoomPage } from './check-room.page';

const routes: Routes = [
  {
    path: '',
    component: CheckRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckRoomPageRoutingModule {}
