import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route, BrowserRouter } from 'react-router-dom';

import App from './App/App';
import StartPage from './StartPage/StartPage';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path='/' component={StartPage} />
      <Route path='/game' component={App} />
    </div>
  </BrowserRouter>
), document.getElementById('root'))
