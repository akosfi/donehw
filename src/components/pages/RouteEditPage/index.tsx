import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
//
import RouteEditForm from "components/common/route/RouteEditForm";
import PageLayout from "components/common/PageLayout";

const RouteEditPage: FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <PageLayout>
            <Box sx={{ padding: "16px" }}>
                <Typography variant="h4">Edit Car</Typography>
                <RouteEditForm id={id || null} />
            </Box>
        </PageLayout>
    );
};

export default memo(RouteEditPage);
