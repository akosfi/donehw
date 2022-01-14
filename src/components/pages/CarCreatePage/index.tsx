import { FC, memo } from "react";
import { Box, Typography } from "@mui/material";
//
import CarEditForm from "components/common/car/CarEditForm";
import PageLayout from "components/common/PageLayout";

const CarCreatePage: FC = () => {
    return (
        <PageLayout>
            <Box sx={{ padding: "16px" }}>
                <Typography variant="h4">Add Car</Typography>
                <CarEditForm id={null} isCreationMode />
            </Box>
        </PageLayout>
    );
};

export default memo(CarCreatePage);
