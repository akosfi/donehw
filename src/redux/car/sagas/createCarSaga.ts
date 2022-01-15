import { put, select } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
//
import { CarActions } from "redux/car/slice";
import CarSelectors from "redux/car/selectors";
import { Car } from "redux/car/types";

function* createCarSaga({ payload }: ReturnType<typeof CarActions.createCarRequest>) {
    try {
        const { car } = payload;
        const cars: Car[] = yield select(CarSelectors.getCars);

        const newCar: Car = { ...car, id: uuidv4() };

        const carsWithNewCar: Car[] = [...cars, newCar];

        yield put(CarActions.createCarSuccess({ cars: carsWithNewCar }));
    } catch (e) {
        console.log(e);
        yield put(CarActions.createCarFailure({ error: "Failed to save car." }));
    }
}

export default createCarSaga;
