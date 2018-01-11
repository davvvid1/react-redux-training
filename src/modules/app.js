import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Header from './header/header';
import Menu from './menu/menu';
import Login from './login/login';
import Book from './book/book';

const App = () => {
  return (
    <div>
      <Route path='/' component={Header}/>
      <Route path='/' exact component={Menu}/>
      <Route path='/login' component={Login}/>
      <Route path='/book' component={Book}/>
    </div>
  );
};

export default App;
