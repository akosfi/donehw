import { put, select } from "redux-saga/effects";
import { filter } from "lodash";
//
import { RouteActions } from "redux/route/slice";
import RouteSelectors from "redux/route/selectors";
import { Route } from "redux/route/types";

function* deleteRouteSaga({ payload }: ReturnType<typeof RouteActions.deleteRouteRequest>) {
    try {
        const { routeId } = payload;
        const routes: Route[] = yield select(RouteSelectors.getRoutes);

        const filteredRoutes = filter(routes, ({ id }) => id !== routeId);

        yield put(RouteActions.deleteRouteSuccess({ routes: filteredRoutes }));
    } catch (e) {
        console.log(e);
        yield put(RouteActions.deleteRouteFailure({ error: "Failed to delete route." }));
    }
}

export default deleteRouteSaga;
