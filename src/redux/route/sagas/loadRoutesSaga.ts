import { put, call } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
//
import { Route } from "redux/route/types";
import { RouteActions } from "redux/route/slice";

const fetchMockedRoutes = () =>
    new Promise(resolve =>
        resolve([
            {
                id: uuidv4(),
                locationFrom: "Győr",
                locationTo: "Budapest",
                carId: null,
                distanceInKm: 140,
                date: new Date().toISOString()
            }
        ])
    );

const seedMockedData = process.env.REACT_APP_SEED_DATA === "true";

function* loadRoutesSaga() {
    try {
        const mockedRoutes: Route[] = seedMockedData ? yield call(fetchMockedRoutes) : [];
        yield put(RouteActions.loadRoutesSuccess({ routes: mockedRoutes }));
    } catch (e) {
        console.log(e);
        yield put(RouteActions.loadRoutesFailure({ error: "Failed to load routes." }));
    }
}

export default loadRoutesSaga;
