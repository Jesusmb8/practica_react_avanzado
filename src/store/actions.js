import { ADVERTISEMENTS_LOADED, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from './types';

export const authLogin = () => ({ type: AUTH_LOGIN_SUCCESS });
export const authLogout = () => ({ type: AUTH_LOGOUT });

export const advertisementsLoaded = (advertisements) => ({
  type: ADVERTISEMENTS_LOADED,
  payload: advertisements,
});
