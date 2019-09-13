import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromGuards from './guards';

import { DoorstyleComponent } from './pages/doorstyle/doorstyle.component';
import { DoorsComponent } from './pages/doors/doors.component';
import { MaterialComponent } from './pages/material/material.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { StainsComponent } from './pages/stains/stains.component';
import { ShareComponent } from './pages/share/share.component';

export const routes: Routes = [
  {
    path: ':mat',
    component: DoorstyleComponent,
    canActivate: [fromGuards.MatGuard, fromGuards.DoorstyleGuard, fromGuards.DoorsGuard]
  },
  {
    path: ':mat/:doorstyle',
    component: DoorsComponent,
    canActivate: [fromGuards.MatGuard, fromGuards.DoorstyleGuard, fromGuards.DoorsGuard]
  },
  {
    path: ':mat/:doorstyle/:door',
    component: ColorsComponent,
    canActivate: [fromGuards.MatGuard, fromGuards.DoorstyleGuard, fromGuards.DoorsGuard, fromGuards.ColorsGuard, fromGuards.StainsGuard]
  },
  {
    path: ':mat/:doorstyle/:door/:specie',
    component: StainsComponent,
    canActivate: [fromGuards.MatGuard, fromGuards.DoorstyleGuard, fromGuards.DoorsGuard, fromGuards.ColorsGuard, fromGuards.StainsGuard]
  },
  {
    path: ':mat/:doorstyle/:door/:specie/share',
    component: ShareComponent,
    canActivate: [fromGuards.MatGuard, fromGuards.DoorstyleGuard, fromGuards.DoorsGuard, fromGuards.ColorsGuard, fromGuards.StainsGuard]
  },
  {
    path: ':mat/:doorstyle/:door/:specie/:stain/share',
    component: ShareComponent,
    canActivate: [fromGuards.MatGuard, fromGuards.DoorstyleGuard, fromGuards.DoorsGuard, fromGuards.ColorsGuard, fromGuards.StainsGuard]
  },
  {
    path: '',
    component: MaterialComponent,
    canActivate: [fromGuards.MatGuard, fromGuards.DoorstyleGuard, fromGuards.DoorsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
