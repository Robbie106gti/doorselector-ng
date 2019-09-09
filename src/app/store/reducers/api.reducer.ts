import * as fromApi from '../actions/api.actions';
import { Load, Mat } from '../../models/api';

export interface ApiState {
  matNfin: {
    load: Load;
    mats?: [Mat];
  };
  doorstyles: {
    load: Load;
  };
  doors: {
    load: Load;
  };
}

export const initialApiState: ApiState = {
  matNfin: {
    load: {
      loading: false,
      loaded: false
    }
  },
  doorstyles: {
    load: {
      loading: false,
      loaded: false
    }
  },
  doors: {
    load: {
      loading: false,
      loaded: false
    }
  }
};

export function reducer(
  state = initialApiState,
  action: fromApi.ActionsApi
): ApiState {
  switch (action.type) {
    case fromApi.MAT_SUCCESS: {
      const payload = action.payload;
      const load = {
        loaded: true,
        loading: false
      };
      return {
        ...state,
        matNfin: {
          ...state.matNfin,
          load,
          mats: payload
        }
      };
    }

    case fromApi.MAT_LOAD: {
      const load = {
        loaded: false,
        loading: true
      };
      return {
        ...state,
        matNfin: {
          ...state.matNfin,
          load
        }
      };
    }

    default:
      return state;
  }
}
