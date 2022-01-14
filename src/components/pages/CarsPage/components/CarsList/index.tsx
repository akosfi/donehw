import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { map } from "lodash";
//
import CarSelectors from "redux/car/selectors";
import CarsListItem from "components/pages/CarsPage/components/CarsList/components/CarsListItem";

const CarsList: FC = () => {
    const cars = useSelector(CarSelectors.getCars);

    return (
        <div>
            {map(cars, ({ id }) => (
                <CarsListItem key={id} id={id} />
            ))}
        </div>
    );
};

export default memo(CarsList);
