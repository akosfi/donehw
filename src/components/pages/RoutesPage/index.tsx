import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
//
import PageLayout from "components/common/PageLayout";
import RoutesList from "components/pages/RoutesPage/components/RoutesList";

const RoutesPage: FC = () => {
    const navigate = useNavigate();

    const handleOnClick = () => navigate("/routes/new");

    return (
        <PageLayout>
            <>
                <Button onClick={handleOnClick} variant="contained" sx={{ margin: "16px" }}>
                    Create
                </Button>
                <RoutesList />
            </>
        </PageLayout>
    );
};

export default memo(RoutesPage);
