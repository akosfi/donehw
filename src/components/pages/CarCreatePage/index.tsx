import { FC, memo } from "react";
//
import CarEditForm from "components/common/car/CarEditForm";

const CarCreatePage: FC = () => {
    return (
        <div>
            <CarEditForm id={null} isCreationMode />
        </div>
    );
};

export default memo(CarCreatePage);
