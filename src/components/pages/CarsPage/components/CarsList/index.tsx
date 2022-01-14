import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { map } from "lodash";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
//
import CarSelectors from "redux/car/selectors";
import CarsListItem from "components/pages/CarsPage/components/CarsList/components/CarsListItem";

const CarsList: FC = () => {
    const cars = useSelector(CarSelectors.getCars);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <b>License Plate Number</b>
                        </TableCell>
                        <TableCell>
                            <b>Type</b>
                        </TableCell>
                        <TableCell />
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {map(cars, ({ id }) => (
                        <CarsListItem key={id} id={id} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default memo(CarsList);
