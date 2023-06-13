import client, { removeAuthorizationHeader, setAuthorizationHeader } from '../../api/client';
import storage from '../../utils/storage';

export const login = (credentials, handleLogin) => {
  return client.post('/api/auth/login', credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    if (credentials.remind) {
      storage.set('authentication', accessToken);
    }
    // handleLogin();
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove('authentication');
  });
};
