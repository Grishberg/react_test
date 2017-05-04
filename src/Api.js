import { call } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import { List, fromJS } from 'immutable'

/** Здесь находятся биндинги к методам рест-апи */
export function *getAllCars() {
    return yield call(list, 'GET', 'api/v1/cars');
}

export function *deleteCar(number) {
    return yield call(list, 'DELETE', `api/v1/cars?number=${number}`);
}

export function *initCars() {
    return yield call(one, 'GET', 'api/v1/init');
}

/** служебные рест методы **/
const request = (method, url, body) => {
    return fetch(url, {
        credentials: 'include',
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json().then((json) => json ));
};

function *list(method, url, body) {
    let result = {};
    try {
        const response = yield call(request, method, url, body);
        result.data = List(response);
    } catch(error) {
        result.error = error;
    }
    return result;
}

function *one(method, url, body) {
    let result = {};
    try {
        const response = yield call(request, method, url, body);
        result.data = fromJS(response);
    } catch(error) {
        result.error = error;
    }
    return result;
}
