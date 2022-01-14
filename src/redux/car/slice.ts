import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//
import { initialState } from "redux/car/state";
import { Car } from "redux/car/types";
import { FixMeLater } from "utils/FixMeLater";

const carSlice = createSlice({
    name: "CAR",
    initialState,
    reducers: {
        loadCarsRequest: state => {
            state.cars = [];
            state.isLoading = true;
            state.error = "";
        },
        loadCarsSuccess: (state, action: PayloadAction<{ cars: Car[] }>) => {
            state.isLoading = false;
            state.cars = action.payload.cars;
        },
        loadCarsFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },

        createCarRequest: (state, action: PayloadAction<{ car: FixMeLater }>) => {
            state.creating.isSaving = true;
            state.creating.error = "";
        },
        createCarSuccess: (state, action: PayloadAction<{ cars: Car[] }>) => {
            state.cars = action.payload.cars;
            state.creating.isSaving = false;
            state.creating.error = "";
        },
        createCarFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.creating.isSaving = true;
            state.creating.error = action.payload.error;
        },

        editCarRequest: (state, action: PayloadAction<{ car: FixMeLater; carId: string }>) => {
            state.editing.isSaving = true;
            state.editing.error = "";
        },
        editCarSuccess: (state, action: PayloadAction<{ cars: Car[] }>) => {
            state.cars = action.payload.cars;
            state.editing.isSaving = false;
            state.editing.error = "";
        },
        editCarFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.editing.isSaving = true;
            state.editing.error = action.payload.error;
        },

        deleteCarRequest: (state, action: PayloadAction<{ carId: string }>) => {
            state.deleting.isSaving = true;
            state.deleting.error = "";
        },
        deleteCarSuccess: (state, action: PayloadAction<{ cars: Car[] }>) => {
            state.cars = action.payload.cars;
            state.deleting.isSaving = false;
            state.deleting.error = "";
        },
        deleteCarFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.deleting.isSaving = true;
            state.deleting.error = action.payload.error;
        }
    }
});

export const { actions: CarActions, reducer: carReducer } = carSlice;
export type { CarState } from "redux/car/state";
export { initialState } from "redux/car/state";
