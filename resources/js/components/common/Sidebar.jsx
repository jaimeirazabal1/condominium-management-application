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

function Sidebar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const menuItems = [
        { key: "Dashboard", icon: <DashboardIcon />, text: "Dashboard" },
        { key: "Customers", icon: <PeopleIcon />, text: "Customers" },
        { key: "Products", icon: <ShoppingBasketIcon />, text: "Products" },
        { key: "Account", icon: <AccountBoxIcon />, text: "Account" },
        { key: "Settings", icon: <SettingsIcon />, text: "Settings" },
        { key: "Login", icon: <LoginIcon />, text: "Login" },
        { key: "Error", icon: <ErrorIcon />, text: "Error" }
    ];

    return (
        <Drawer variant="permanent" open={true}>
            <List>
                {menuItems.map(item => (
                    <ListItem button key={item.key}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        {!isMobile && <ListItemText  primary={item.text} />}
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    );
}

export default Sidebar;
