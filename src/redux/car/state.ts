//
import { Car } from "redux/car/types";

export type CarState = {
    cars: Car[];
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

export const initialState: CarState = {
    cars: [],
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
