import { all } from "redux-saga/effects";
//
import carSaga from "redux/car/saga";

function* rootSaga() {
    yield all([carSaga()]);
}

export default rootSaga;
