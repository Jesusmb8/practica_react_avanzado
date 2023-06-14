import {
  ADVERTISEMENTS_LOADED,
  ADVERTISEMENT_DELETE,
  ADVERTISEMENT_DELETE_SUCCESSS,
  ADVERTISEMENT_NEW_FAILURE,
  ADVERTISEMENT_NEW_SUCCESSS,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from './types';

export const defaultState = {
  auth: false,
  advertisements: [],
  tags: [],
  ui: false,
};

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}
export function advertisements(state = defaultState.advertisements, action) {
  switch (action.type) {
    case ADVERTISEMENTS_LOADED:
      return action.payload;
    case ADVERTISEMENT_DELETE_SUCCESSS:
      const ads = state.filter((ad) => ad.id !== action.payload);
      return ads;
    case ADVERTISEMENT_NEW_SUCCESSS:
      return [action.payload, ...state];
    case ADVERTISEMENT_NEW_FAILURE:
      return state;
    default:
      return state;
  }
}

export function ui(state = defaultState.ui, action) {
  if (/_REQUEST$/.test(action.type)) {
    return state;
  }
  return state;
}
