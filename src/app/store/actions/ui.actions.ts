import { Action } from '@ngrx/store';

export const DARK_LIGHT = '[UI] Dark or Light theme';
export const RESET = '[UI] Reset';

export class DarkLight implements Action {
    readonly type = DARK_LIGHT;
    constructor(public payload: any) {}
  }
  export class Reset implements Action {
    readonly type = RESET;
    constructor(public payload: any) {}
  }

export type ActionsUI = DarkLight | Reset;
