import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Routes from './components/navigation/Routes';

import store from './store';

import './index.css';

console.log("V:",process.env.REACT_APP_VERSION)

ReactDOM.render(
  <Provider store={store}>
    <Router routes={Routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
