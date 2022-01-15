import { put, select } from "redux-saga/effects";
import { findIndex } from "lodash";
//
import { RouteActions } from "redux/route/slice";
import RouteSelectors from "redux/route/selectors";
import { Route } from "redux/route/types";

function* editRouteSaga({ payload }: ReturnType<typeof RouteActions.editRouteRequest>) {
    try {
        const { route, routeId } = payload;
        const routes: Route[] = yield select(RouteSelectors.getRoutes);

        const editedRoute: Route = { ...route, id: routeId };
        const editedRouteIndex = findIndex(routes, ({ id: _id }) => routeId === _id);

        const firstHalfOfRoutes = routes.slice(0, editedRouteIndex);
        const secondHalfOfRoutes = routes.slice(editedRouteIndex + 1, routes.length);

        const routesWithNewRoute: Route[] = [...firstHalfOfRoutes, editedRoute, ...secondHalfOfRoutes];

        yield put(RouteActions.editRouteSuccess({ routes: routesWithNewRoute }));
    } catch (e) {
        console.log(e);
        yield put(RouteActions.editRouteFailure({ error: "Failed to edit route." }));
    }
}

export default editRouteSaga;
