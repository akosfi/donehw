import * as React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { memo, useState } from "react";
import { map } from "lodash";
import { useNavigate } from "react-router-dom";
//
import { FixMeLater } from "utils/FixMeLater";

type NavigationItemType = {
    name: string;
    href: string;
};

const navigationItems: NavigationItemType[] = [
    { name: "Cars", href: "/cars" },
    { name: "New Car", href: "/cars/new" },
    { name: "Routes", href: "/routes" },
    { name: "New Route", href: "/routes/new" }
];

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event: FixMeLater) => setAnchorElNav(event.currentTarget);

    const handleCloseNavMenu = () => setAnchorElNav(null);

    const createHandleNavigationItemClick = (href: string) => () => {
        handleCloseNavMenu();
        navigate(href);
    };

    return (
        <AppBar position="static" sx={{ marginBottom: "32px" }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: "none", md: "flex" }, cursor: "pointer" }}
                        onClick={createHandleNavigationItemClick("/")}
                    >
                        CarsApp
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" }
                            }}
                        >
                            {map(navigationItems, ({ name, href }) => (
                                <MenuItem key={name} onClick={createHandleNavigationItemClick(href)}>
                                    <Typography textAlign="center">{name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, cursor: "pointer" }}
                        onClick={createHandleNavigationItemClick("/")}
                    >
                        CarsApp
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {map(navigationItems, ({ name, href }) => (
                            <Button
                                key={name}
                                onClick={createHandleNavigationItemClick(href)}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default memo(Navigation);
