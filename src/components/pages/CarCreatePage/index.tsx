import { FC, memo, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
//
import CarEditForm from "components/common/car/CarEditForm";
import PageLayout from "components/common/PageLayout";
import AlertMessage from "components/common/AlertMessage";
import CarSelectors from "redux/car/selectors";
import { CarActions } from "redux/car/slice";

const CarCreatePage: FC = () => {
    const isCreated = useSelector(CarSelectors.getCreatingCarIsSaved);
    const error = useSelector(CarSelectors.getCreatingCarError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CarActions.setIsCarCreatingSaved({ isSaved: false }));
    }, [dispatch]);

    return (
        <PageLayout>
            <Box sx={{ padding: "16px" }}>
                <Typography variant="h4">Add Car</Typography>
                <CarEditForm id={null} isCreationMode />
                <AlertMessage isVisible={isCreated} severity="success" text="Car created successfully." />
                <AlertMessage isVisible={!!error} severity="error" text={error} />
            </Box>
        </PageLayout>
    );
};

export default memo(CarCreatePage);
