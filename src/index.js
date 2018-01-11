import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'

import App from './modules/app';
import store from './store';

import './app.scss';
import './modules/common/_common.scss';
import './modules/book/_book.scss';
import './modules/header/_header.scss';
import './modules/login/_login.scss';
import './modules/menu/_menu.scss';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.querySelector('#app')
);
