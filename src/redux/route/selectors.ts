import { find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.route;

abstract class RouteSelectors {
    static getRoutes = (state: StoreState) => getState(state).routes;

    static getRoutesIsLoading = (state: StoreState) => getState(state).isLoading;

    static getRoutesError = (state: StoreState) => getState(state).error;

    static createGetRouteById = (id: string) => (state: StoreState) => find(RouteSelectors.getRoutes(state), { id });

    static getCreatingRouteIsSaving = (state: StoreState) => getState(state).creating.isSaving;

    static getCreatingRouteError = (state: StoreState) => getState(state).creating.error;

    static getEditingRouteIsSaving = (state: StoreState) => getState(state).editing.isSaving;

    static getEditingRouteError = (state: StoreState) => getState(state).editing.error;

    static getDeletingRouteIsSaving = (state: StoreState) => getState(state).deleting.isSaving;

    static getDeletingRouteError = (state: StoreState) => getState(state).deleting.error;
}

export default RouteSelectors;
