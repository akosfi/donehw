//
import { Car } from "redux/car/types";

export type CarState = {
    cars: Car[];
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

export const initialState: CarState = {
    cars: [],
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
