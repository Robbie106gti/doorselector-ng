import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterState } from 'src/app/models/router';
import * as fromUi from './ui.reducer';
import * as fromApi from './api.reducer';
import * as fromUser from './user.reducer';

export interface State {
  uiState: fromUi.UiState;
  routerState: fromRouter.RouterReducerState;
  apiState: fromApi.ApiState;
  userState: fromUser.UserState;
}

export const reducers: ActionReducerMap<State> = {
  uiState: fromUi.reducer,
  routerState: fromRouter.routerReducer,
  apiState: fromApi.reducer,
  userState: fromUser.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getRouterFeature = createFeatureSelector<RouterState>('routerState');
export const getUiFeature = createFeatureSelector<fromUi.UiState>('uiState');
export const getApiFeature = createFeatureSelector<fromApi.ApiState>('apiState');
export const getUserFeature = createFeatureSelector<fromUser.UserState>('userState');

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    // console.log({ routerState });
    const url = routerState.url;
    const queryParams = routerState.root.queryParams;
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const params = route.params;
    const state = { url, params, queryParams };
    return state;
  }
}
