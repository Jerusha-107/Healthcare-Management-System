import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const DisplayPatient = ({ patient }) => {
  return (
    <div>
      <br />
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Your Patient Details
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold', background: '#333', color: '#fff' }}>
                    Field
                  </TableCell>
                  <TableCell style={{ fontWeight: 'bold', background: '#333', color: '#fff' }}>
                    Value
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ background: '#f5f5f5' }}>First Name</TableCell>
                  <TableCell style={{ background: '#f5f5f5' }}>{patient.firstName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Last Name</TableCell>
                  <TableCell>{patient.lastName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: '#f5f5f5' }}>Gender</TableCell>
                  <TableCell style={{ background: '#f5f5f5' }}>{patient.gender}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Contact Number</TableCell>
                  <TableCell>{patient.contactNumber}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: '#f5f5f5' }}>Email</TableCell>
                  <TableCell style={{ background: '#f5f5f5' }}>{patient.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Address</TableCell>
                  <TableCell>{patient.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: '#f5f5f5' }}>Reason</TableCell>
                  <TableCell style={{ background: '#f5f5f5' }}>{patient.reason}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisplayPatient;
