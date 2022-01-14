import { combineReducers } from "redux";
//
import { StoreState } from "redux/state";
import { carReducer } from "redux/car/slice";
//
const combinedReducers = combineReducers<StoreState>({ car: carReducer });

export default combinedReducers;
