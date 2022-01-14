import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//
import { initialState } from "redux/route/state";
import { Route } from "redux/route/types";
import { FixMeLater } from "utils/FixMeLater";

const routeSlice = createSlice({
    name: "ROUTE",
    initialState,
    reducers: {
        loadRoutesRequest: state => {
            state.routes = [];
            state.isLoading = true;
            state.error = "";
        },
        loadRoutesSuccess: (state, action: PayloadAction<{ routes: Route[] }>) => {
            state.isLoading = false;
            state.routes = action.payload.routes;
        },
        loadRoutesFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },

        createRouteRequest: (state, action: PayloadAction<{ route: FixMeLater }>) => {
            state.creating.isSaving = true;
            state.creating.error = "";
        },
        createRouteSuccess: (state, action: PayloadAction<{ routes: Route[] }>) => {
            state.routes = action.payload.routes;
            state.creating.isSaving = false;
            state.creating.error = "";
        },
        createRouteFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.creating.isSaving = true;
            state.creating.error = action.payload.error;
        },

        editRouteRequest: (state, action: PayloadAction<{ route: FixMeLater; routeId: string }>) => {
            state.editing.isSaving = true;
            state.editing.error = "";
        },
        editRouteSuccess: (state, action: PayloadAction<{ routes: Route[] }>) => {
            state.routes = action.payload.routes;
            state.editing.isSaving = false;
            state.editing.error = "";
        },
        editRouteFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.editing.isSaving = true;
            state.editing.error = action.payload.error;
        },

        deleteRouteRequest: (state, action: PayloadAction<{ routeId: string }>) => {
            state.deleting.isSaving = true;
            state.deleting.error = "";
        },
        deleteRouteSuccess: (state, action: PayloadAction<{ routes: Route[] }>) => {
            state.routes = action.payload.routes;
            state.deleting.isSaving = false;
            state.deleting.error = "";
        },
        deleteRouteFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.deleting.isSaving = true;
            state.deleting.error = action.payload.error;
        }
    }
});

export const { actions: RouteActions, reducer: routeReducer } = routeSlice;
export type { RouteState } from "redux/route/state";
export { initialState } from "redux/route/state";
