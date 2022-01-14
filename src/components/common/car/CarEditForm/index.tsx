import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import DeleteCarSaga from "redux/car/sagas/deleteCarSaga";
import { CarActions } from "redux/car/slice";
import { useForm } from "react-hook-form";
import CarSelectors from "../../../../redux/car/selectors";

type HookFormData = { licensePlateNumber: string; type: string };

type Props = {
    id: string | null;
    isCreationMode?: boolean;
};

const CarEditForm: FC<Props> = ({ id, isCreationMode = false }) => {
    const { register, handleSubmit: handleHookFormSubmit, setValue } = useForm<HookFormData>();

    const car = useSelector(CarSelectors.createGetCarById(id || ""));

    const dispatch = useDispatch();

    useEffect(() => {
        if (id !== null && !isCreationMode && !!car) {
            setValue("licensePlateNumber", car.licensePlateNumber);
            setValue("type", car.type);
        }
    }, [id, isCreationMode, car, setValue]);

    const handleSubmit = (data: HookFormData) => {
        if (!isCreationMode && id !== null) {
            dispatch(CarActions.editCarRequest({ car: data, carId: id }));
        } else {
            dispatch(CarActions.createCarRequest({ car: data }));
        }
    };

    return (
        <div>
            <form onSubmit={handleHookFormSubmit(handleSubmit)}>
                <span>CarEditForm {id}</span>
                <input {...register("licensePlateNumber")} />
                <input {...register("type")} />
                <button type={"submit"}>Save</button>
            </form>
        </div>
    );
};

export default memo(CarEditForm);
