import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { map } from "lodash";
//
import RouteSelectors from "redux/route/selectors";
import { RouteActions } from "redux/route/slice";
import CarSelectors from "redux/car/selectors";
import { RouteEditHookFormData } from "utils/forms/types";

type Props = {
    id: string | null;
    isCreationMode?: boolean;
};

const RouteEditForm: FC<Props> = ({ id, isCreationMode = false }) => {
    const { register, handleSubmit: handleHookFormSubmit, setValue, control } = useForm<RouteEditHookFormData>();

    const route = useSelector(RouteSelectors.createGetRouteById(id || ""));
    const cars = useSelector(CarSelectors.getCars);

    const dispatch = useDispatch();

    useEffect(() => {
        if (id !== null && !isCreationMode && !!route) {
            setValue("locationFrom", route.locationFrom);
            setValue("locationTo", route.locationTo);
            setValue("carId", route.carId);
            setValue("distanceInKm", route.distanceInKm);
            setValue("date", route.date);
        }
    }, [id, isCreationMode, route, setValue]);

    useEffect(() => {
        if (isCreationMode) {
            if (cars.length) {
                setValue("carId", cars[0].id);
            }
            setValue("date", new Date().toISOString());
        }
    }, [isCreationMode, cars, setValue]);

    const handleSubmit = (data: RouteEditHookFormData) => {
        if (!isCreationMode && id !== null) {
            dispatch(RouteActions.editRouteRequest({ route: data, routeId: id }));
        } else {
            dispatch(RouteActions.createRouteRequest({ route: data }));
        }
    };

    return (
        <div>
            <form onSubmit={handleHookFormSubmit(handleSubmit)}>
                <Box sx={{ margin: "32px 0" }}>
                    <TextField
                        {...register("locationFrom", { required: true })}
                        label="Location From"
                        placeholder="Location From"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </Box>
                <Box sx={{ marginBottom: "32px" }}>
                    <TextField
                        {...register("locationTo", { required: true })}
                        label="Location To"
                        placeholder="Location To"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                    />
                </Box>
                <Box sx={{ marginBottom: "32px" }}>
                    <Controller
                        render={({ field: { value, onChange } }) => (
                            <Select value={value ?? ""} onChange={onChange}>
                                {map(cars, ({ id, type, licensePlateNumber }) => (
                                    <MenuItem key={id} value={id}>
                                        {`${licensePlateNumber} - ${type}`}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                        name={"carId"}
                        control={control}
                    />
                </Box>
                <Box sx={{ marginBottom: "32px" }}>
                    <TextField
                        {...register("distanceInKm", { required: true })}
                        label="Distance In KM"
                        placeholder="Distance In KM"
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        type="number"
                    />
                </Box>
                <Box sx={{ marginBottom: "32px" }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Controller
                            render={({ field: { value, onChange } }) => (
                                <MobileDatePicker
                                    label="Date mobile"
                                    inputFormat="MM/dd/yyyy"
                                    value={value ? new Date(value) : ""}
                                    onChange={(date: Date | null) => onChange(date?.toISOString() || "")}
                                    renderInput={params => <TextField {...params} />}
                                />
                            )}
                            name={"date"}
                            control={control}
                        />
                    </LocalizationProvider>
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

export default memo(RouteEditForm);
