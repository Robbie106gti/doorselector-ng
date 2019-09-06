import * as fromUi from '../actions/ui.actions';
import { ThemeColor } from 'src/app/models/ui';

export interface UiState {
    themeColor: ThemeColor;
}

export const initialState: UiState = {
    themeColor: {
        darkORlight: 'dark',
        color: '#EBEBEB',
        dark: true,
        bg: '#1A1818'
    }
};

export function reducer(
  state = initialState,
  action: fromUi.ActionsUI
): UiState {
  switch (action.type) {
    case fromUi.DARK_LIGHT: {
      const payload = action.payload;
      return state;
    }

    case fromUi.RESET: {
      return initialState;
    }

    default:
      return state;
  }
}

const dark = {
    darkORlight: 'dark',
    color: '#EBEBEB',
    dark: true,
    bg: '#1A1818'
}

const backgroundDark = '#333333';

const light = {
    darkORlight: 'light',
    color: '#1A1818',
    dark: false,
    bg: '#EEEEEE'
}
