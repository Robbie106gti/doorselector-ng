import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NcSidebarComponent } from './ui/nc-sidebar/nc-sidebar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers, effects, CustomSerializer } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer, RouterState } from '@ngrx/router-store';
import { MatComponent } from './components/cards/mat/mat.component';
import { MaterialComponent } from './pages/material/material.component';
import { DoorstyleComponent } from './pages/doorstyle/doorstyle.component';
import { DoorComponent } from './components/cards/door/door.component';
import { DoorsComponent } from './pages/doors/doors.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ColorsComponent } from './pages/colors/colors.component';
import { StainsComponent } from './pages/stains/stains.component';
import { ColorComponent } from './components/cards/color/color.component';
import { SdoorComponent } from './components/selected/sdoor/sdoor.component';

@NgModule({
  declarations: [
    AppComponent,
    NcSidebarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MatComponent,
    MaterialComponent,
    DoorstyleComponent,
    DoorsComponent,
    DoorComponent,
    ColorsComponent,
    ColorComponent,
    StainsComponent,
    SdoorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([...effects]),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
