import { put, select } from "redux-saga/effects";
import { findIndex } from "lodash";
//
import { CarActions } from "redux/car/slice";
import CarSelectors from "redux/car/selectors";
import { Car } from "redux/car/types";

function* editCarSaga({ payload }: ReturnType<typeof CarActions.editCarRequest>) {
    try {
        const { car, carId } = payload;
        const cars: Car[] = yield select(CarSelectors.getCars);

        const editedCar: Car = { ...car, id: carId };
        const editedCarIndex = findIndex(cars, ({ id }) => id === carId);

        const firstHalfOfCars = cars.slice(0, editedCarIndex);
        const secondHalfOfCars = cars.slice(editedCarIndex + 1, cars.length);

        const carsWithNewCar: Car[] = [...firstHalfOfCars, editedCar, ...secondHalfOfCars];

        yield put(CarActions.editCarSuccess({ cars: carsWithNewCar }));
    } catch (e) {
        console.log(e);
        yield put(CarActions.editCarFailure({ error: "Failed to edit car." }));
    }
}

export default editCarSaga;
