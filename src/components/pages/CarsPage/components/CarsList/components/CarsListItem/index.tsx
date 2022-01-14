import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//
import CarSelectors from "redux/car/selectors";
import { CarActions } from "redux/car/slice";

type Props = {
    id: string;
};

const CarsListItem: FC<Props> = ({ id }) => {
    const car = useSelector(CarSelectors.createGetCarById(id));

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleDeleteButtonClick = () => dispatch(CarActions.deleteCarRequest({ carId: id }));
    const handleEditButtonClick = () => navigate(`/cars/${id}`);

    if (!car) {
        return null;
    }

    return (
        <div>
            <p>
                {car.licensePlateNumber} - {car.type}
            </p>
            <p>
                <span onClick={handleEditButtonClick}>Edit</span> <span onClick={handleDeleteButtonClick}>Delete</span>
            </p>
        </div>
    );
};

export default memo(CarsListItem);
