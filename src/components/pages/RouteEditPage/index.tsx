import { FC, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
//
import RouteEditForm from "components/common/route/RouteEditForm";
import PageLayout from "components/common/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import RouteSelectors from "redux/route/selectors";
import { RouteActions } from "redux/route/slice";
import AlertMessage from "components/common/AlertMessage";

const RouteEditPage: FC = () => {
    const { id } = useParams<{ id: string }>();

    const isEdited = useSelector(RouteSelectors.getEditingRouteIsSaved);
    const error = useSelector(RouteSelectors.getEditingRouteError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(RouteActions.setIsEditRouteSaved({ isSaved: false }));
    }, [dispatch]);

    return (
        <PageLayout>
            <Box sx={{ padding: "16px" }}>
                <Typography variant="h4">Edit Route</Typography>
                <RouteEditForm id={id || null} />
                <AlertMessage isVisible={isEdited} severity="success" text="Route edited successfully." />
                <AlertMessage isVisible={!!error} severity="error" text={error} />
            </Box>
        </PageLayout>
    );
};

export default memo(RouteEditPage);
