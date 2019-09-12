import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import { ApiState } from '../reducers/api.reducer';
import { Load, Mat } from 'src/app/models/api';
import { Door } from 'src/app/models/doors';

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

export const stateDoorstyle = createSelector(
  getApiState,
  (apiState: ApiState) => apiState.doorstyles
);

export const loadDoorstyle = createSelector(
  stateDoorstyle,
  (doorstyle: { load: Load }) => doorstyle.load
);

export const itemsDoorstyles = createSelector(
  stateDoorstyle,
  (doorstyle: { load: Load, doorstyles: [Mat] }) => doorstyle.load.loaded ? doorstyle.doorstyles : []
);

export const stateDoors = createSelector(
  getApiState,
  (apiState: ApiState) => apiState.doors
);

export const loadDoors = createSelector(
  stateDoors,
  (doors: { load: Load }) => doors.load
);

export const itemsDoors = createSelector(
  stateDoors,
  fromFeature.getRouterFeature,
  (doors: { load: Load, doors: any[] }, router: any) => {
    let doors_array = doors.load.loaded ? doors.doors : [];
    const params = router.state.params;
    // console.log(params);
    doors_array = doors_array.filter((door: Door) => {
      if (!door.doorstyle_menu.toLocaleLowerCase().includes(params.doorstyle)) { return false; }
      return materials(params.mat, door);
    });
    // console.log(doors_array)
    return doors_array;
  }
);

function materials(mat, door) {
  let material = '';
  switch (mat) {
    case 'paints':
      material = 'painted';
      break;
    case 'woods':
      material = 'wood';
      break;
    case 'others':
      material = 'engineered euro materials gloss textured melamine';
      break;
  }
  if (material.includes(door.material_menu.toLowerCase())) {
    // console.log(material, door.material_menu.toLowerCase())
    return true;
  } else {
    return false;
  }
}
