import { FC, memo, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
//
import RouteEditForm from "components/common/route/RouteEditForm";
import PageLayout from "components/common/PageLayout";
import RouteSelectors from "redux/route/selectors";
import { RouteActions } from "redux/route/slice";
import AlertMessage from "components/common/AlertMessage";

const RouteCreatePage: FC = () => {
    const isCreated = useSelector(RouteSelectors.getCreatingRouteIsSaved);
    const error = useSelector(RouteSelectors.getCreatingRouteError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(RouteActions.setIsCreateRouteSaved({ isSaved: false }));
    }, [dispatch]);

    return (
        <PageLayout>
            <Box sx={{ padding: "16px" }}>
                <Typography variant="h4">Add Route</Typography>
                <RouteEditForm id={null} isCreationMode />
                <AlertMessage isVisible={isCreated} severity="success" text="Route created successfully." />
                <AlertMessage isVisible={!!error} severity="error" text={error} />
            </Box>
        </PageLayout>
    );
};

export default memo(RouteCreatePage);
