import { find } from "lodash";
//
import { StoreState } from "redux/state";

const getState = (state: StoreState) => state.car;

abstract class CarSelectors {
    static getCars = (state: StoreState) => getState(state).cars;

    static getCarsIsLoading = (state: StoreState) => getState(state).isLoading;

    static getCarsError = (state: StoreState) => getState(state).error;

    static createGetCarById = (id: string) => (state: StoreState) => find(getState(state).cars, { id });

    static getCreatingCarIsSaving = (state: StoreState) => getState(state).creating.isSaving;

    static getCreatingCarError = (state: StoreState) => getState(state).creating.error;

    static getEditingCarIsSaving = (state: StoreState) => getState(state).editing.isSaving;

    static getEditingCarError = (state: StoreState) => getState(state).editing.error;

    static getDeletingCarIsSaving = (state: StoreState) => getState(state).deleting.isSaving;

    static getDeletingCarError = (state: StoreState) => getState(state).deleting.error;
}

export default CarSelectors;
