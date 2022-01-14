import { put, select } from "redux-saga/effects";
import { indexOf } from "lodash";
//
import { RouteActions } from "redux/route/slice";
import RouteSelectors from "redux/route/selectors";
import { Route } from "redux/route/types";

function* editRouteSaga({ payload }: ReturnType<typeof RouteActions.editRouteRequest>) {
    try {
        const { route, routeId } = payload;
        const routes: Route[] = yield select(RouteSelectors.getRoutes);

        const editedRoute: Route = { ...route, id: routeId };
        const editedRouteIndex = indexOf(routes, editedRoute);

        const firstHalfOfRoutes = routes.splice(0, editedRouteIndex);
        const secondHalfOfRoutes = routes.splice(editedRouteIndex + 1, routes.length);

        const routesWithNewRoute: Route[] = [...firstHalfOfRoutes, editedRoute, ...secondHalfOfRoutes];

        yield put(RouteActions.editRouteSuccess({ routes: routesWithNewRoute }));
    } catch (e) {
        //TODO HANDLE ERROR
        console.log(e);
        yield put(RouteActions.editRouteFailure({ error: "Failed to edit route." }));
    }
}

export default editRouteSaga;
