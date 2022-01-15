import { FC, memo } from "react";
import { Box, Typography } from "@mui/material";
//
import RouteEditForm from "components/common/route/RouteEditForm";
import PageLayout from "components/common/PageLayout";

const RouteCreatePage: FC = () => {
    return (
        <PageLayout>
            <Box sx={{ padding: "16px" }}>
                <Typography variant="h4">Add Car</Typography>
                <RouteEditForm id={null} isCreationMode />
            </Box>
        </PageLayout>
    );
};

export default memo(RouteCreatePage);
