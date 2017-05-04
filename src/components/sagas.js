import { takeLatest } from 'redux-saga'
import Actions, { setCars } from './actions'
import { call, put } from 'redux-saga/effects'
import { getAllCars, deleteCar, initCars } from '../Api';

export function *handleFetchCars() {
    const {data} = yield call(getAllCars);

    if (data) {
        yield put(setCars(data));
    }
}

export function *handleDeleteCar({number}) {
    yield call(deleteCar, number);
    yield call(handleFetchCars);
}

export function *handleInit() {
    yield call(initCars);
    yield call(handleFetchCars);
}

export default function *rootSaga() {
    yield [
        takeLatest(Actions.FETCH_CARS, handleFetchCars),
        takeLatest(Actions.DELETE_CAR, handleDeleteCar),
        takeLatest(Actions.INIT, handleInit)
    ];
}