import { FC, memo } from "react";
//
import CarsList from "components/pages/CarsPage/components/CarsList";

const CarsPage: FC = () => {
    return (
        <div>
            <div>
                <span>Create</span>
            </div>
            <CarsList />
        </div>
    );
};

export default memo(CarsPage);
