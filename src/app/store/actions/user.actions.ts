import { Action } from '@ngrx/store';

export const SAVE_DOOR = '[User] Save selected Door with finish and material';

export class SaveDoor implements Action {
    readonly type = SAVE_DOOR;
    constructor(public payload: any) {}
  }

export type ActionsUser = SaveDoor;
