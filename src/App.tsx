import React, { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
//
import { CarActions } from "redux/car/slice";
import { RouteActions } from "redux/route/slice";
import Navigation from "components/common/Navigation";
import CarsPage from "components/pages/CarsPage";
import CarEditPage from "components/pages/CarEditPage";
import CarCreatePage from "components/pages/CarCreatePage";
import RoutesPage from "components/pages/RoutesPage";
import RouteEditPage from "components/pages/RouteEditPage";
//
import "assets/global/style.module.scss";

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
                <Route path="/cars/edit/:id" element={<CarEditPage />} />
                <Route path="/cars/new" element={<CarCreatePage />} />
                <Route path="/routes" element={<RoutesPage />} />
                <Route path="/routes/edit/:id" element={<RouteEditPage />} />
            </Routes>
        </>
    );
};

export default memo(App);
