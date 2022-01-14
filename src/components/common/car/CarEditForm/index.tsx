import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
//
import DeleteCarSaga from "redux/car/sagas/deleteCarSaga";
import { CarActions } from "redux/car/slice";

type Props = {
    id: string | null;
    isCreationMode?: boolean;
};

const CarEditForm: FC<Props> = ({ id, isCreationMode = false }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (id !== null && !isCreationMode) {
            //TODO reload default props
        }
    }, [id, isCreationMode]);

    const handleSubmit = () => {
        if (!isCreationMode && id !== null) {
            //dispatch(CarActions.editCarRequest({}))
        } else {
            //dispatch(CarActions.createCarRequest({}))
        }
    };

    return (
        <div>
            <div>
                <span>CarEditForm {id}</span>
            </div>
        </div>
    );
};

export default memo(CarEditForm);
