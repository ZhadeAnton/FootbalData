import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import './index.css';
import store from './Redux/Store/Store';
import App from './App';
import NotificationProvider from './Providers/NotificationProvider';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
