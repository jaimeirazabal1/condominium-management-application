import React from 'react';
import ApartmentCards from '../Apartment/ApartmentCards';
import {  useTheme, useMediaQuery } from '@mui/material';

function MainContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="main-content" style={{marginLeft: isMobile ? '100px' : '200px'}}>
      {/* Aquí es donde irían los gráficos, pero lo estamos omitiendo según tu solicitud */}
      <ApartmentCards/>
    </div>
  );
}

export default MainContent;
