import { Action } from '@ngrx/store';

export const MAT_LOAD = '[API] Load Material and finishes main';
export const MAT_SUCCESS = '[API] Loaded Material and finishes main Success';
export const MAT_FAIL = '[API] Load Material and finishes main Fail';

export class LoadMat implements Action {
  readonly type = MAT_LOAD;
  constructor(public payload: any) { console.log('hello from action mat') }
}
export class LoadMatSuccess implements Action {
  readonly type = MAT_SUCCESS;
  constructor(public payload: any) { }
}
export class LoadMatFail implements Action {
  readonly type = MAT_FAIL;
  constructor(public payload: any) { }
}

export const DS_LOAD = '[API] Load Doorstyles main';
export const DS_SUCCESS = '[API] Loaded Doorstyles main Success';
export const DS_FAIL = '[API] Load Doorstyles main Fail';

export class LoadDS implements Action {
  readonly type = DS_LOAD;
  constructor(public payload: any) { }
}
export class LoadDSSuccess implements Action {
  readonly type = DS_SUCCESS;
  constructor(public payload: any) { }
}
export class LoadDSFail implements Action {
  readonly type = DS_FAIL;
  constructor(public payload: any) { }
}

export const DOORS_LOAD = '[API] Load Doors main';
export const DOORS_SUCCESS = '[API] Loaded Doors main Success';
export const DOORS_FAIL = '[API] Load Doors main Fail';

export class LoadDoors implements Action {
  readonly type = DOORS_LOAD;
  constructor(public payload: any) { }
}
export class LoadDoorsSuccess implements Action {
  readonly type = DOORS_SUCCESS;
  constructor(public payload: any) { }
}
export class LoadDoorsFail implements Action {
  readonly type = DOORS_FAIL;
  constructor(public payload: any) { }
}

export const COLORS_LOAD = '[API] Load Colors main';
export const COLORS_SUCCESS = '[API] Loaded Colors main Success';
export const COLORS_FAIL = '[API] Load Colors main Fail';

export class LoadColors implements Action {
  readonly type = COLORS_LOAD;
  constructor(public payload: any) { }
}
export class LoadColorsSuccess implements Action {
  readonly type = COLORS_SUCCESS;
  constructor(public payload: any) { }
}
export class LoadColorsFail implements Action {
  readonly type = COLORS_FAIL;
  constructor(public payload: any) { }
}

export const STAINS_LOAD = '[API] Load Stains main';
export const STAINS_SUCCESS = '[API] Loaded Stains main Success';
export const STAINS_FAIL = '[API] Load Stains main Fail';

export class LoadStains implements Action {
  readonly type = STAINS_LOAD;
  constructor(public payload: any) { }
}
export class LoadStainsSuccess implements Action {
  readonly type = STAINS_SUCCESS;
  constructor(public payload: any) { }
}
export class LoadStainsFail implements Action {
  readonly type = STAINS_FAIL;
  constructor(public payload: any) { }
}

export type ActionsApi = LoadMat
  | LoadMatSuccess
  | LoadMatSuccess
  | LoadDS
  | LoadDSSuccess
  | LoadDSFail
  | LoadDoors
  | LoadDoorsSuccess
  | LoadDoorsFail
  | LoadColors
  | LoadColorsSuccess
  | LoadColorsFail
  | LoadStains
  | LoadStainsSuccess
  | LoadStainsFail;
