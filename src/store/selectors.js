export const getIsLogged = (state) => state.auth;
export const getAdvertisements = (state) => state.advertisements;
// export const getAdvert = (state, advertId) => getAdvertisements(state).find((advert) => advert.id === +advertId);

export const getAdvert = (advertId) => (state) => {
  return getAdvertisements(state).find((advert) => advert.id === advertId);
};
