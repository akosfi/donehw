import { FC, memo, ReactElement } from "react";
import { Box, Paper } from "@mui/material";

type Props = {
    children: ReactElement;
};

const PageLayout: FC<Props> = ({ children }) => {
    return (
        <Box sx={{ maxWidth: "600px", width: "100%", margin: "0 auto" }}>
            <Paper elevation={0}>{children}</Paper>
        </Box>
    );
};

export default memo(PageLayout);
