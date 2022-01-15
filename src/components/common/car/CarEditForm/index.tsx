import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
//
import { CarActions } from "redux/car/slice";
import CarSelectors from "redux/car/selectors";
import { CarEditHookFormData } from "utils/forms/types";

type Props = {
    id: string | null;
    isCreationMode?: boolean;
};

const CarEditForm: FC<Props> = ({ id, isCreationMode = false }) => {
    const { register, handleSubmit: handleHookFormSubmit, setValue } = useForm<CarEditHookFormData>();

    const car = useSelector(CarSelectors.createGetCarById(id || ""));

    const dispatch = useDispatch();

    useEffect(() => {
        if (id !== null && !isCreationMode && !!car) {
            setValue("licensePlateNumber", car.licensePlateNumber);
            setValue("type", car.type);
        }
    }, [id, isCreationMode, car, setValue]);

    const handleSubmit = (data: CarEditHookFormData) => {
        if (!isCreationMode && id !== null) {
            dispatch(CarActions.editCarRequest({ car: data, carId: id }));
        } else {
            dispatch(CarActions.createCarRequest({ car: data }));
        }
    };

    return (
        <div>
            <form onSubmit={handleHookFormSubmit(handleSubmit)}>
                <Box sx={{ margin: "32px 0" }}>
                    <TextField
                        {...register("licensePlateNumber", { required: true })}
                        label="License Plate Number"
                        placeholder="License Plate Number"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </Box>
                <Box sx={{ marginBottom: "32px" }}>
                    <TextField
                        {...register("type", { required: true })}
                        label="Type"
                        placeholder="Type"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </Box>
                <Box>
                    <Button variant="contained" type="submit">
                        Save
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default memo(CarEditForm);
