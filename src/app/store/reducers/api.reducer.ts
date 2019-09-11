import * as fromApi from '../actions/api.actions';
import { Load, Mat } from '../../models/api';
import { Door } from 'src/app/models/doors';

export interface ApiState {
  matNfin: {
    load: Load;
    mats?: [Mat];
  };
  doorstyles: {
    load: Load;
    doorstyles?: [Mat];
  };
  doors: {
    load: Load;
    doors?: any[];
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
    case fromApi.DS_SUCCESS: {
      const payload = action.payload;
      const load = {
        loaded: true,
        loading: false
      };
      return {
        ...state,
        doorstyles: {
          ...state.doorstyles,
          load,
          doorstyles: payload
        }
      };
    }

    case fromApi.DS_LOAD: {
      const load = {
        loaded: false,
        loading: true
      };
      return {
        ...state,
        doorstyles: {
          ...state.doorstyles,
          load
        }
      };
    }
    case fromApi.DOORS_SUCCESS: {
      const payload = action.payload.filter((door: Door) => {
        if (!door.ImageURLpreview) {
          return false;
        }
        return true;
      });
      const load = {
        loaded: true,
        loading: false
      };
      return {
        ...state,
        doors: {
          ...state.doors,
          load,
          doors: payload
        }
      };
    }

    case fromApi.DOORS_LOAD: {
      const load = {
        loaded: false,
        loading: true
      };
      return {
        ...state,
        doors: {
          ...state.doors,
          load
        }
      };
    }

    default:
      return state;
  }
}
