import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: 'home',
    loadChildren: () => import('./home-template/home-template.module').then( m => m.HomeTemplatePageModule)
  },
  {
    path: 'form-template',
    loadChildren: () => import('./form-template/form-template.module').then( m => m.FormTemplatePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'form-template2',
    loadChildren: () => import('./form-template2/form-template2.module').then( m => m.FormTemplate2PageModule)
  },
  {
    path: 'cart-dialog-template',
    loadChildren: () => import('./cart-dialog-template/cart-dialog-template.module').then( m => m.CartDialogTemplatePageModule)
  },
  {
    path: 'addaccount',
    loadChildren: () => import('./addaccount/addaccount.module').then( m => m.AddaccountPageModule)
  },
  {
    path: 'select-room',
    loadChildren: () => import('./select-room/select-room.module').then( m => m.SelectRoomPageModule)
  },
  {
    path: 'select-room2',
    loadChildren: () => import('./select-room2/select-room2.module').then( m => m.SelectRoom2PageModule)
  },
  {
    path: 'check-room',
    loadChildren: () => import('./check-room/check-room.module').then( m => m.CheckRoomPageModule)
  },
  {
    path: 'finish-room',
    loadChildren: () => import('./finish-room/finish-room.module').then( m => m.FinishRoomPageModule)
  },
  {
    path: 'cart-finish',
    loadChildren: () => import('./cart-finish/cart-finish.module').then( m => m.CartFinishPageModule)
  },

  
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
