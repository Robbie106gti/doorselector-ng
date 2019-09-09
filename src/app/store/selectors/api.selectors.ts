import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import { ApiState } from '../reducers/api.reducer';
import { Load, Mat } from 'src/app/models/api';

export const getApiState = createSelector(
  fromFeature.getApiFeature,
  (apiState: ApiState) => apiState
);

export const stateMatAndFin = createSelector(
  getApiState,
  (apiState: ApiState) => apiState.matNfin
);

export const loadMatAndFin = createSelector(
  stateMatAndFin,
  (matNfin: { load: Load }) => matNfin.load
);

export const itemsMatAndFin = createSelector(
  stateMatAndFin,
  (matNfin: { load: Load, mats: [Mat] }) => matNfin.load.loaded ? matNfin.mats : []
);
