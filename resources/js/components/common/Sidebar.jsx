import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Drawer, useTheme, useMediaQuery } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
// import RegisterIcon from '@mui/icons-material/Register'; // Línea comentada porque al parecer esta importación causaba problemas.
import ErrorIcon from '@mui/icons-material/Error';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Sidebar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const menuItems = [
        { key: "Dashboard", icon: <DashboardIcon />, text: "Dashboard", path: "/dashboard" },
        { key: "Owners", icon: <PeopleIcon />, text: "Dueños", path: "/owners" },
        { key: "Products", icon: <ShoppingBasketIcon />, text: "Products", path: "" },
        { key: "Account", icon: <AccountBoxIcon />, text: "Account", path: "" },
        { key: "Settings", icon: <SettingsIcon />, text: "Settings", path: "" },
        { key: "Login", icon: <LoginIcon />, text: "Login", path: "" },
        { key: "Error", icon: <ErrorIcon />, text: "Error", path: "" }
    ];

    return (
        <Drawer variant="permanent" open={true}>
            <List>
                {menuItems.map(item => (
                    <ListItem button key={item.key} component={Link} to={item.path}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        {!isMobile && <ListItemText primary={item.text} />}
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    );
}

export default Sidebar;
