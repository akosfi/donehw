import { put, select } from "redux-saga/effects";
import { filter } from "lodash";
//
import { CarActions } from "redux/car/slice";
import CarSelectors from "redux/car/selectors";
import { Car } from "redux/car/types";

function* deleteCarSaga({ payload }: ReturnType<typeof CarActions.deleteCarRequest>) {
    try {
        const { carId } = payload;
        const cars: Car[] = yield select(CarSelectors.getCars);

        const filteredCars = filter(cars, ({ id }) => id !== carId);

        yield put(CarActions.deleteCarSuccess({ cars: filteredCars }));
    } catch (e) {
        console.log(e);
        yield put(CarActions.deleteCarFailure({ error: "Failed to delete car." }));
    }
}

export default deleteCarSaga;
