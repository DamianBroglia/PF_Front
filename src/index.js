import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { Auth0Provider } from '@auth0/auth0-react';

import axios from 'axios';

axios.defaults.baseURL= "https://pfback-production.up.railway.app"
// axios.defaults.baseURL = 'http://localhost:3001';

const root = document.getElementById('root');

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(root).render(
  //<React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin + '/home',
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  //</React.StrictMode>,
);

reportWebVitals();
