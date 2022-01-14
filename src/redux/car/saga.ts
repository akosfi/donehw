import { all, takeLatest } from "redux-saga/effects";
//
import { CarActions } from "redux/car/slice";
import loadCarsSaga from "redux/car/sagas/loadCarsSaga";
import createCarSaga from "redux/car/sagas/createCarSaga";
import editCarSaga from "redux/car/sagas/editCarSaga";
import deleteCarSaga from "redux/car/sagas/deleteCarSaga";

function* carSaga() {
    yield all([
        takeLatest(CarActions.loadCarsRequest.type, loadCarsSaga),
        takeLatest(CarActions.createCarRequest.type, createCarSaga),
        takeLatest(CarActions.editCarRequest.type, editCarSaga),
        takeLatest(CarActions.deleteCarRequest.type, deleteCarSaga)
    ]);
}

export default carSaga;
