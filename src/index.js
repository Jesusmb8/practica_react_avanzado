import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Root from './Root';
import { setAuthorizationHeader } from './api/client';
import './css/Reset.css';
import './css/Styles.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import configureStore from './store';
import storage from './utils/storage';

const accessToken = storage.get('authentication');
if (accessToken) {
  setAuthorizationHeader(accessToken);
}
const store = configureStore({ auth: !!accessToken });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root store={store}>
      <App />
    </Root>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
