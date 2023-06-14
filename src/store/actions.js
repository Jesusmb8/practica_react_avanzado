import {
  ADVERTISEMENTS_LOADED,
  ADVERTISEMENT_DELETE,
  ADVERTISEMENT_NEW_FAILURE,
  ADVERTISEMENT_NEW_REQUEST,
  ADVERTISEMENT_NEW_SUCCESSS,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from './types';

export const authLogin = () => ({ type: AUTH_LOGIN_SUCCESS });
export const authLogout = () => ({ type: AUTH_LOGOUT });

export const advertisementsLoaded = (advertisements) => ({
  type: ADVERTISEMENTS_LOADED,
  payload: advertisements,
});

export const advertismentsDelete = (advertisementId) => ({
  type: ADVERTISEMENT_DELETE,
  payload: advertisementId,
});

export const advertismentsNewRequest = () => ({
  type: ADVERTISEMENT_NEW_REQUEST,
});
export const advertismentsNewSuccess = (ad) => ({
  type: ADVERTISEMENT_NEW_SUCCESSS,
  payload: ad,
});
export const advertismentsNewFailure = (error) => ({
  type: ADVERTISEMENT_NEW_FAILURE,
  error: true,
  payload: error,
});

export const advertCreate =
  (advert) =>
  async (dispatch, _getState, { adverts: advertisementService }) => {
    dispatch(advertismentsNewRequest());
    try {
      const advertResponse = await advertisementService.createAdvert(advert);

      dispatch(advertismentsNewSuccess(advertResponse));

      return advertResponse;
    } catch (error) {
      dispatch(advertismentsNewFailure(error));
      throw error;
    }
  };
