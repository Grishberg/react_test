import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {Map} from 'immutable';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './components/sagas';
import main from './components/reducers';
import Immutable from 'immutable';
import {LOCATION_CHANGE} from 'react-router-redux';
import {combineReducers} from 'redux-immutable';

// REDUCER
const initialState = Immutable.fromJS({
    locationBeforeTransitions: null
});

function routerReducer(state = initialState, action) {
    if (action.type === LOCATION_CHANGE) {
        return state.merge({
            locationBeforeTransitions: action.payload
        });
    }
    return state;
}

const rootReducer = combineReducers({
    app: combineReducers({main}),
    routing: routerReducer
});

// SAGA
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    Map(),
    compose(
        applyMiddleware(routerMiddleware(browserHistory), sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
    ));

sagaMiddleware.run(rootSaga);

if (module.hot) {
    module.hot.accept('./', () => {
        store.replaceReducer(rootReducer);
    });
}

export default store;
