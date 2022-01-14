import { CarState, initialState as initialCarState } from "redux/car/slice";
import { RouteState, initialState as initialRouteState } from "redux/route/slice";

export type StoreState = { car: CarState; route: RouteState };

const initialState: StoreState = { car: initialCarState, route: initialRouteState };

export default initialState;
