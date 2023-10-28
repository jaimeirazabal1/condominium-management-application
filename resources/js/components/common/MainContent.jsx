import React from 'react';
import ApartmentCards from '../Apartment/ApartmentCards';
import { useTheme, useMediaQuery } from '@mui/material';

function MainContent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    < ApartmentCards />
  );
}

export default MainContent;
