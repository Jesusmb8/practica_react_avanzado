import client from '../../api/client';

const advertsUrl = '/api/v1/adverts';

export const getTags = () => {
  const url = `${advertsUrl}/tags`;
  return client.get(url);
};
export const getAdverts = () => {
  const url = `${advertsUrl}`;
  return client.get(url);
};
export const getAdvert = (id) => {
  const url = `${advertsUrl}/${id}`;
  return client.get(url);
};
export const deleteAdvert = (id) => {
  const url = `${advertsUrl}/${id}`;
  return client.delete(url);
};

export const createAdvert = (advertContent) => {
  const url = advertsUrl;
  const headers = {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  };
  return client.post(url, advertContent, headers);
};
