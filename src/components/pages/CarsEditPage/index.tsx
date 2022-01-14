import { FC, memo } from "react";
import { useParams } from "react-router-dom";
//
import CarEditForm from "components/common/car/CarEditForm";

const CarsEditPage: FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <CarEditForm id={id || null} />
        </div>
    );
};

export default memo(CarsEditPage);
