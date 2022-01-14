import React, { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
//
import { CarActions } from "redux/car/slice";
import { RouteActions } from "redux/route/slice";
import Navigation from "components/common/Navigation";
import CarsPage from "components/pages/CarsPage";
import CarsEditPage from "components/pages/CarsEditPage";

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CarActions.loadCarsRequest());
        dispatch(RouteActions.loadRoutesRequest());
    }, [dispatch]);

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<CarsPage />} />
                <Route path="/cars" element={<CarsPage />} />
                <Route path="/cars/:id" element={<CarsEditPage />} />
            </Routes>
        </>
    );
};

export default memo(App);
