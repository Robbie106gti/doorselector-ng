import * as fromUi from '../actions/ui.actions';
import { ThemeColor } from 'src/app/models/ui';
import { ProductLines, Line } from 'src/app/models/line';

const dark = {
  darkORlight: 'dark',
  color: '#EBEBEB',
  dark: true,
  bg: '#1A1818'
};

const backgroundDark = '#333333';

const light = {
  darkORlight: 'light',
  color: '#1A1818',
  dark: false,
  bg: '#EEEEEE'
};

const cornerstone: Line = {
  title: 'cornerstone',
  icon: 'cs',
  active: false
};

const custom: Line = {
  title: 'custom',
  icon: 'cu',
  active: false
};

export interface UiState {
  themeColor: ThemeColor;
  mobile: boolean;
  sidemenu: boolean;
  lines: ProductLines;
}

export const initialUiState: UiState = {
  themeColor: (matchMedia('(prefers-color-scheme: dark)').matches ? dark : light),
  mobile: false,
  sidemenu: false,
  lines: { cornerstone, custom }
};

export function reducer(
  state = initialUiState,
  action: fromUi.ActionsUI
): UiState {
  switch (action.type) {
    case fromUi.DARK_LIGHT: {
      const payload = action.payload;
      const themeColor = payload ? dark : light;
      const remove = payload ? light.darkORlight : dark.darkORlight;
      document.body.classList.remove(remove + 'bg');
      document.body.classList.add(themeColor.darkORlight + 'bg');
      return { ...state, themeColor };
    }
    case fromUi.MENU: {
      const payload = action.payload;
      const sidemenu = payload;
      return { ...state, sidemenu };
    }
    case fromUi.MOBILE: {
      const payload = action.payload;
      const mobile = payload;
      return { ...state, mobile };
    }

    case fromUi.CHANGE_LINES: {
      const payload = action.payload;
      const lines = {
        cornerstone: { ...cornerstone, active: payload === cornerstone.title ? true : false },
        custom: { ...custom, active: payload === custom.title ? true : false },
        active: payload
      };
      return { ...state, lines };
    }

    case fromUi.RESET: {
      return initialUiState;
    }

    default:
      return state;
  }
}
