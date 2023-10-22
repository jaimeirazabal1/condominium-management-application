import React,{ useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { getAll } from '../../redux/actions/apartamentActions';
import { useDispatch, useSelector } from 'react-redux';


function ApartmentCards() {
    // Ejemplo de números de apartamentos
    const apartmentNumbers = useSelector(state => state.apartaments.apartaments);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAll());
    },[])

    return (
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
            {apartmentNumbers && apartmentNumbers.length ? apartmentNumbers.map((number) => (
                <Grid item xs={5} sm={5} md={4} lg={3} key={number}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Apartamento {number}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )) : null }
        </Grid>
    );
}

export default ApartmentCards;
