import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { map } from "lodash";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
//
import RouteSelectors from "redux/route/selectors";
import RoutesListItem from "components/pages/RoutesPage/components/RoutesList/components/RoutesListItem";

/*locationFrom: string;
    locationTo: string;
    carId: string | null;
    distanceInKm: number;
    date: Date;*/

const RoutesList: FC = () => {
    const routes = useSelector(RouteSelectors.getRoutes);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: "128px" }}>
                            <b>Location From</b>
                        </TableCell>
                        <TableCell sx={{ width: "128px" }}>
                            <b>Location Where</b>
                        </TableCell>
                        <TableCell sx={{ width: "128px" }}>
                            <b>Car Type</b>
                        </TableCell>
                        <TableCell sx={{ width: "128px" }}>
                            <b>Distance in KM</b>
                        </TableCell>
                        <TableCell sx={{ width: "128px" }}>
                            <b>Date</b>
                        </TableCell>
                        <TableCell align="right" sx={{ width: "32px" }} />
                        <TableCell align="right" sx={{ width: "32px" }} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {map(routes, ({ id }) => (
                        <RoutesListItem key={id} id={id} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default memo(RoutesList);
