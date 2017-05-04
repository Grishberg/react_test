export const Actions = {
    FETCH_CARS: 'app.main.FETCH_CARS',
    SET_CARS: 'app.main.SET_CARS',
    DELETE_CAR: 'app.main.DELETE_CAR',
    INIT: 'app.main.INIT'
};

export default Actions;

export function init() {
    return {
        type: Actions.INIT
    }
}

export function fetchCars() {
    return {
        type: Actions.FETCH_CARS
    }
}

export function setCars(data) {
    return {
        type: Actions.SET_CARS,
        data
    }
}

export function deleteCar(number) {
    return {
        type: Actions.DELETE_CAR,
        number
    }
}