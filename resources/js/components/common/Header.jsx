import React from 'react';
import { Grid, Avatar, Typography, Box } from '@mui/material';
import {  useTheme, useMediaQuery } from '@mui/material';

function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box className="header" sx={{ marginLeft:isMobile ? 10 : 20, padding: 2, backgroundColor: '#f5f5f5' }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar src="path-to-user-image.jpg" alt="User" />
        </Grid>
        <Grid item>
          <Typography variant="h6" component="div">
            Jaime Irazabal
          </Typography>
          <Typography variant="subtitle2" component="div" color="textSecondary">
            Senior Developer
          </Typography>
        </Grid>
        {/* Puedes agregar otros elementos de la cabecera aquí */}
      </Grid>
    </Box>
  );
}

export default Header;
