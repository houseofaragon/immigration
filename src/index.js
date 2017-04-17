import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Routes from './routes.js';

import {
    Router,
    browserHistory,
} from 'react-router';

const store = configureStore(window.__INITIAL_STATE__);

const app = (
  <Provider store={store} >
    <Router history={browserHistory}>
		{Routes}
    </Router>
  </Provider>
);

// Do bootstrapping here...
render(app, document.getElementById('__root'));
