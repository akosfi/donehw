import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TableCell, TableRow } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
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
    const handleEditButtonClick = () => navigate(`/cars/edit/${id}`);

    if (!car) {
        return null;
    }

    return (
        <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={{ width: "128px" }}>{car.licensePlateNumber}</TableCell>
            <TableCell sx={{ width: "128px" }}>{car.type}</TableCell>
            <TableCell align="right" sx={{ width: "32px" }}>
                <Edit onClick={handleEditButtonClick} sx={{ cursor: "pointer" }} />
            </TableCell>
            <TableCell align="right" sx={{ width: "32px" }}>
                <Delete onClick={handleDeleteButtonClick} sx={{ cursor: "pointer" }} />
            </TableCell>
        </TableRow>
    );
};

export default memo(CarsListItem);
