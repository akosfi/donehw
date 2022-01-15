import { FC, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
//
import CarEditForm from "components/common/car/CarEditForm";
import PageLayout from "components/common/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import CarSelectors from "redux/car/selectors";
import { CarActions } from "redux/car/slice";
import AlertMessage from "components/common/AlertMessage";

const CarEditPage: FC = () => {
    const { id } = useParams<{ id: string }>();

    const isEdited = useSelector(CarSelectors.getEditingCarIsSaved);
    const error = useSelector(CarSelectors.getEditingCarError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CarActions.setIsCarEditSaved({ isSaved: false }));
    }, [dispatch]);

    return (
        <PageLayout>
            <Box sx={{ padding: "16px" }}>
                <Typography variant="h4">Edit Car</Typography>
                <CarEditForm id={id || null} />
                <AlertMessage isVisible={isEdited} severity="success" text="Car edited successfully." />
                <AlertMessage isVisible={!!error} severity="error" text={error} />
            </Box>
        </PageLayout>
    );
};

export default memo(CarEditPage);
