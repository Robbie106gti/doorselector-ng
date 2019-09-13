import * as fromUser from '../actions/user.actions';
import { Stain } from 'src/app/models/stain';
import { Door } from 'src/app/models/door';
import { Color } from 'src/app/models/color';

export interface UserState {
    savedDoors: any[] | [{door: Door, color: Color, stain: Stain}];
}
export const initialUserState: UserState = {
    savedDoors: []
}

export function reducer(
    state = initialUserState,
    action: fromUser.ActionsUser
  ): UserState {
    switch (action.type) {
      case fromUser.SAVE_DOOR: {
        const payload = action.payload;
        const saves = state.savedDoors ? [payload] : [...state.savedDoors, payload];
        return {
          ...state,
          savedDoors: saves
        };
      }

      default:
        return state;
    }
}
