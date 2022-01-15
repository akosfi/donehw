import { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TableCell, TableRow } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
//
import RouteSelectors from "redux/route/selectors";
import { RouteActions } from "redux/route/slice";
import CarSelectors from "redux/car/selectors";

type Props = {
    id: string;
};

const RoutesListItem: FC<Props> = ({ id }) => {
    const route = useSelector(RouteSelectors.createGetRouteById(id));
    const car = useSelector(CarSelectors.createGetCarById(route?.carId || ""));

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleDeleteButtonClick = () => dispatch(RouteActions.deleteRouteRequest({ routeId: id }));
    const handleEditButtonClick = () => navigate(`/routes/edit/${id}`);

    if (!route) {
        return null;
    }

    return (
        <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={{ width: "128px" }}>{route.locationFrom}</TableCell>
            <TableCell sx={{ width: "128px" }}>{route.locationTo}</TableCell>
            <TableCell sx={{ width: "128px" }}>{!!car ? car.type : "<No car assigned>"}</TableCell>
            <TableCell sx={{ width: "128px" }}>{route.distanceInKm}</TableCell>
            <TableCell sx={{ width: "128px" }}>{new Date(route.date).toDateString()}</TableCell>
            <TableCell align="right" sx={{ width: "32px" }}>
                <Edit onClick={handleEditButtonClick} sx={{ cursor: "pointer" }} />
            </TableCell>
            <TableCell align="right" sx={{ width: "32px" }}>
                <Delete onClick={handleDeleteButtonClick} sx={{ cursor: "pointer" }} />
            </TableCell>
        </TableRow>
    );
};

export default memo(RoutesListItem);
