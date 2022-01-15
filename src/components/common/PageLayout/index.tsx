import { FC, memo, ReactElement } from "react";
import { Box, Paper } from "@mui/material";

type Props = {
    children: ReactElement;
};

const PageLayout: FC<Props> = ({ children }) => {
    return (
        <Box sx={{ maxWidth: "lg", width: "100%", margin: "0 auto" }}>
            <Paper elevation={0} sx={{ margin: "0 16px" }}>
                {children}
            </Paper>
        </Box>
    );
};

export default memo(PageLayout);
