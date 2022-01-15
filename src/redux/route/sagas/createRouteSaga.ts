import { put, select } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
//
import { RouteActions } from "redux/route/slice";
import RouteSelectors from "redux/route/selectors";
import { Route } from "redux/route/types";

function* createRouteSaga({ payload }: ReturnType<typeof RouteActions.createRouteRequest>) {
    try {
        const { route } = payload;
        const routes: Route[] = yield select(RouteSelectors.getRoutes);

        const newRoute: Route = { ...route, id: uuidv4() };

        const routesWithNewRoute: Route[] = [...routes, newRoute];

        yield put(RouteActions.createRouteSuccess({ routes: routesWithNewRoute }));
    } catch (e) {
        console.log(e);
        yield put(RouteActions.createRouteFailure({ error: "Failed to save route." }));
    }
}

export default createRouteSaga;
