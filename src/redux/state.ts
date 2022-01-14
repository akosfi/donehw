import { CarState, initialState as initialCarState } from "redux/car/slice";

export type StoreState = { car: CarState };

const initialState: StoreState = { car: initialCarState };

export default initialState;
