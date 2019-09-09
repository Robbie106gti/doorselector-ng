import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoorstyleComponent } from './pages/doorstyle/doorstyle.component';
import { DoorsComponent } from './pages/doors/doors.component';
import { MaterialComponent } from './pages/material/material.component';
import * as fromGuards from './guards';

export const routes: Routes = [
  {
    path: 'doorstyle',
    component: DoorstyleComponent
  },
  {
    path: 'doors',
    component: DoorsComponent
  },
  {
    path: '',
    component: MaterialComponent,
    canActivate: [fromGuards.MatGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
