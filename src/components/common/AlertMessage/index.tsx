import { FC, memo } from "react";
import { Alert } from "@mui/material";

type Props = {
    isVisible: boolean;
    text: string;
    severity: "error" | "success";
};

const AlertMessage: FC<Props> = ({ isVisible, severity, text }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <Alert severity={severity} sx={{ margin: "16px 0" }}>
            {text}
        </Alert>
    );
};

export default memo(AlertMessage);
