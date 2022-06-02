import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectRoom2Page } from './select-room2.page';

const routes: Routes = [
  {
    path: '',
    component: SelectRoom2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRoom2PageRoutingModule {}
