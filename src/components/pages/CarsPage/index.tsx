import { FC, memo } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
//
import PageLayout from "components/common/PageLayout";
import CarsList from "components/pages/CarsPage/components/CarsList";

const CarsPage: FC = () => {
    const navigate = useNavigate();

    const handleOnClick = () => navigate("/cars/new");

    return (
        <PageLayout>
            <>
                <Button onClick={handleOnClick} variant="contained" sx={{ margin: "16px" }}>
                    Create
                </Button>
                <CarsList />
            </>
        </PageLayout>
    );
};

export default memo(CarsPage);
