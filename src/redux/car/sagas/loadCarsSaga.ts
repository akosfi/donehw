import { put, call } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
//
import { Car } from "redux/car/types";
import { CarActions } from "redux/car/slice";

const fetchMockedCars = () =>
    new Promise(resolve => resolve([{ id: uuidv4(), licensePlateNumber: "GDL-232", type: "sedan" }]));

const seedMockedData = process.env.REACT_APP_SEED_DATA === "true";

function* loadCarsSaga() {
    try {
        const mockedCars: Car[] = seedMockedData ? yield call(fetchMockedCars) : [];
        yield put(CarActions.loadCarsSuccess({ cars: mockedCars }));
    } catch (e) {
        console.log(e);
        yield put(CarActions.loadCarsFailure({ error: "Failed to load cars." }));
    }
}

export default loadCarsSaga;
