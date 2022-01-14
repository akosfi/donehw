import { combineReducers } from "redux";
//
import { StoreState } from "redux/state";
import { carReducer } from "redux/car/slice";
import { routeReducer } from "redux/route/slice";
//
const combinedReducers = combineReducers<StoreState>({ car: carReducer, route: routeReducer });

export default combinedReducers;
