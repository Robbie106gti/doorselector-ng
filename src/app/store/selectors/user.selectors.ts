import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import { UserState } from '../reducers/user.reducer';

export const getUserState = createSelector(
  fromFeature.getUserFeature,
  (state: UserState) => state
);

export const getSavedDoors = createSelector(
  getUserState,
  (state: UserState) => state.savedDoors
);

