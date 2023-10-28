import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery, useTheme } from '@mui/material';

const mockData = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "123-456-7890" },
    // ... otros dueños
];

const OwnersList = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        {!isMobile && <TableCell>Name</TableCell>}
                        <TableCell>Email</TableCell>
                        {!isMobile && <TableCell>Phone</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mockData.map(owner => (
                        <TableRow key={owner.id}>
                            <TableCell>{owner.id}</TableCell>
                            {!isMobile && <TableCell>{owner.name}</TableCell>}
                            <TableCell>{owner.email}</TableCell>
                            {!isMobile && <TableCell>{owner.phone}</TableCell>}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default OwnersList;
