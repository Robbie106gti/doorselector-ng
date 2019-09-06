import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoorstyleComponent } from './pages/doorstyle/doorstyle.component';
import { DoorsComponent } from './pages/doors/doors.component';
import { MaterialComponent } from './pages/material/material.component';

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
    path: 'home',
    component: MaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
