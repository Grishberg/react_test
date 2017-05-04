import Actions from './actions';
import {Map} from 'immutable';

function handleSetCars(state, {data}) {
    return state.set('cars', data);
}

export default function (state = Map(), action) {
    switch (action.type) {
        case Actions.SET_CARS: return handleSetCars(state, action);
    }
    return state;
}
