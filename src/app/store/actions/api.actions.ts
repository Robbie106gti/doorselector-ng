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

export type ActionsApi = LoadMat | LoadMatSuccess | LoadMatSuccess | LoadDS | LoadDSSuccess | LoadDSFail;
