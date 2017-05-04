import {browserHistory, IndexRoute, Route, Router} from 'react-router';
import {render} from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './Index';
import Dashboard from './components/App';

import store from './store';

/* eslint-disable no-undef */
const contextRoot = __ROOT_CONTEXT__;

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState (state) {
        return state.get('routing').toJS();
    }
});

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path={contextRoot} component={App}>
                <IndexRoute component={Dashboard}></IndexRoute>
                <Route path={contextRoot + 'url2'} component={Dashboard}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
