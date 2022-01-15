import { Route } from "redux/route/types";

export type RouteState = {
    routes: Route[];
    isLoading: boolean;
    error: string;
    editing: {
        isSaving: boolean;
        error: string;
        isSaved: boolean;
    };
    creating: {
        isSaving: boolean;
        error: string;
        isSaved: boolean;
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
        error: "",
        isSaved: false
    },
    creating: {
        isSaving: false,
        error: "",
        isSaved: false
    },
    deleting: {
        isSaving: false,
        error: ""
    }
};
