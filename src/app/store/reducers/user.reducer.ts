import * as fromUser from '../actions/user.actions';
import { Saved } from 'src/app/models/saved';

export interface UserState {
  savedDoors: any[] | [Saved];
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
      const saves = state.savedDoors.length === 0 ? [payload] : [...state.savedDoors, payload];
      return {
        ...state,
        savedDoors: saves
      };
    }
    case fromUser.REMOVE_DOOR: {
      const payload = action.payload;
      const saves: any[] | [Saved] = [];
      state.savedDoors.forEach((save: Saved, index, arr) => {
        if (index !== payload) { saves.push(save); }
        return;
      });
      console.log({ payload, saves });
      return {
        ...state,
        savedDoors: saves
      };
    }

    default:
      return state;
  }
}
