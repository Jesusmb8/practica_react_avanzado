import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from './types';

export const defaultState = {
  auth: false,
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
// export function advertisement(state = defaultState.advertisements, action) {
//   switch (action.type) {
//     case AUTH_LOGIN_SUCCESS:
//       return true;
//     case AUTH_LOGOUT:
//       return false;
//     default:
//       return state;
//   }
// }
