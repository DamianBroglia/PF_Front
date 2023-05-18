import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Box display="flex" flexDirection="column" textAlign="center">
            <Typography variant="h1">404 Not Found</Typography>
            <Link to={"/home"}>
                <Typography variant="h3">Volver al inicio</Typography>
            </Link>
        </Box>
    )
}