import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
//import { Button } from "@mui/material";
//
import PageLayout from "components/common/PageLayout";
import CarsList from "components/pages/CarsPage/components/CarsList";

const CarsPage: FC = () => {
    //const navigate = useNavigate();

    //const handleCreateButtonClick = () => navigate("/cars/new");

    return (
        <PageLayout>
            <CarsList />
        </PageLayout>
    );
};

export default memo(CarsPage);
