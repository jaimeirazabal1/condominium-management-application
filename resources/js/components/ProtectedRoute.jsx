// src/components/ProtectedRoute.jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import { useTheme, useMediaQuery } from '@mui/material';
import { Grid } from '@mui/material';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const isAuthenticated = localStorage.getItem('token'); // Esto es solo un ejemplo. Puede que necesites una lógica más sofisticada para determinar si un usuario está autenticado.

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Sidebar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Header />
              {/* <MainContent style={{ flex: 1 }} /> */}
              <div className="main-content" style={{ marginLeft: isMobile ? '100px' : '200px' }}>
                <Grid container spacing={3} style={{ marginTop: '20px' }}>
                  <Component {...props} />
                </Grid>
              </div>
            </div>
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
