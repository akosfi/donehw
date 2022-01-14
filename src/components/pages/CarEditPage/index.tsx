import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
//
import CarEditForm from "components/common/car/CarEditForm";
import PageLayout from "components/common/PageLayout";

const CarEditPage: FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <PageLayout>
            <Box sx={{ padding: "16px" }}>
                <Typography variant="h4">Edit Car</Typography>
                <CarEditForm id={id || null} />
            </Box>
        </PageLayout>
    );
};

export default memo(CarEditPage);
