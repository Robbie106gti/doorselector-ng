import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import { ApiState } from '../reducers/api.reducer';
import { Load, Mat } from 'src/app/models/api';
import { Door } from 'src/app/models/door';
import { Color } from 'src/app/models/color';
import { Stain } from 'src/app/models/stain';

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
  (doors: { load: Load, doors: [Door] }, router: any) => {
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

export const getDoor = createSelector(
  stateDoors,
  fromFeature.getRouterFeature,
  (doors: { load: Load, doors: [Door] }, router: any) => {
    let doors_array = doors.load.loaded ? doors.doors : [];
    const params = router.state.params;
    // console.log(params);
    doors_array = doors_array.filter((door: Door) => {
      if (door.alt_menu === params.door) { return true; }
      return false;
    });
    // console.log(doors_array)
    return doors_array[0];
  }
);

export const stateColors = createSelector(
  getApiState,
  (apiState: ApiState) => apiState.colors
);

export const loadColors = createSelector(
  stateColors,
  (colors: { load: Load }) => colors.load
);

export const itemsColors = createSelector(
  stateColors,
  fromFeature.getRouterFeature,
  (colors: { load: Load, colors: [Color] }, router: any) => {
    let colors_array = colors.load.loaded ? colors.colors : [];
    const params = router.state.params;
    colors_array = colors_array.filter((color: Color) => {
      if (color[params.door] !== '1') {
        return false;
      }
      return true;
    });
    return colors_array;
  }
);

export const getColor = createSelector(
  stateColors,
  fromFeature.getRouterFeature,
  (colors: { load: Load, colors: [Color] }, router: any) => {
    let colors_array = colors.load.loaded ? colors.colors : [];
    const params = router.state.params;
    // console.log(params);
    colors_array = colors_array.filter((color: Color) => {
      if (color.item_name.toLocaleLowerCase() === params.color) { return true; }
      return false;
    });
    // console.log(colors_array)
    return colors_array[0];
  }
);

export const stateStains = createSelector(
  getApiState,
  (apiState: ApiState) => apiState.stains
);

export const loadStains = createSelector(
  stateStains,
  (stains: { load: Load }) => stains.load
);

export const itemsStains = createSelector(
  stateStains,
  (stains: { load: Load, stains: [Stain] }) => stains.load.loaded ? stains.stains : []
);

export const getStain = createSelector(
  stateStains,
  fromFeature.getRouterFeature,
  (stains: { load: Load, stains: [Stain] }, router: any) => {
    let stains_array = stains.load.loaded ? stains.stains : [];
    const params = router.state.params;
    // console.log(params);
    stains_array = stains_array.filter((stain: Stain) => {
      if (stain.item_name.toLocaleLowerCase() === params.stain) { return true; }
      return false;
    });
    // console.log(stains_array)
    return stains_array[0];
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
