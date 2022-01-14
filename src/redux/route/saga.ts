import { all, takeLatest } from "redux-saga/effects";
//
import { RouteActions } from "redux/route/slice";
import loadRoutesSaga from "redux/route/sagas/loadRoutesSaga";
import createRouteSaga from "redux/route/sagas/createRouteSaga";
import editRouteSaga from "redux/route/sagas/editRouteSaga";
import deleteRouteSaga from "redux/route/sagas/deleteRouteSaga";

function* carSaga() {
    yield all([
        takeLatest(RouteActions.loadRoutesRequest.type, loadRoutesSaga),
        takeLatest(RouteActions.createRouteRequest.type, createRouteSaga),
        takeLatest(RouteActions.editRouteRequest.type, editRouteSaga),
        takeLatest(RouteActions.deleteRouteRequest.type, deleteRouteSaga)
    ]);
}

export default carSaga;
