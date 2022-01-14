import React, { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
//
import { CarActions } from "redux/car/slice";
import { RouteActions } from "redux/route/slice";

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CarActions.loadCarsRequest());
        dispatch(RouteActions.loadRoutesRequest());
    }, [dispatch]);

    return <p>Hey</p>;
};

export default memo(App);
