import { all } from "redux-saga/effects";
//
import carSaga from "redux/car/saga";
import routeSaga from "redux/route/saga";

function* rootSaga() {
    yield all([carSaga(), routeSaga()]);
}

export default rootSaga;
