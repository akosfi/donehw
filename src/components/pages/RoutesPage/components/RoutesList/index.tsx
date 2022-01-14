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
                        <TableCell>
                            <b>Location From</b>
                        </TableCell>
                        <TableCell>
                            <b>Location Where</b>
                        </TableCell>
                        <TableCell>
                            <b>Car Type</b>
                        </TableCell>
                        <TableCell>
                            <b>Distance in KM</b>
                        </TableCell>
                        <TableCell>
                            <b>Date</b>
                        </TableCell>
                        <TableCell />
                        <TableCell />
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
