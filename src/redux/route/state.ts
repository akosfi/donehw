import { Route } from "redux/route/types";

export type RouteState = {
    routes: Route[];
    isLoading: boolean;
    error: string;
    editing: {
        isSaving: boolean;
        error: string;
    };
    creating: {
        isSaving: boolean;
        error: string;
    };
    deleting: {
        isSaving: boolean;
        error: string;
    };
};

export const initialState: RouteState = {
    routes: [],
    isLoading: false,
    error: "",
    editing: {
        isSaving: false,
        error: ""
    },
    creating: {
        isSaving: false,
        error: ""
    },
    deleting: {
        isSaving: false,
        error: ""
    }
};
