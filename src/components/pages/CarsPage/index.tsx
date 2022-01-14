import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
//
import CarsList from "components/pages/CarsPage/components/CarsList";

const CarsPage: FC = () => {
    const navigate = useNavigate();

    const handleCreateButtonClick = () => navigate("/cars/new");

    return (
        <div>
            <div>
                <span onClick={handleCreateButtonClick}>Create</span>
            </div>
            <CarsList />
        </div>
    );
};

export default memo(CarsPage);
