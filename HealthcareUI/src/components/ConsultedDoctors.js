import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ConsultedDoctors = ({ parse_doctor, passstatus }) => {
  console.log(parse_doctor);
  
  if (passstatus === 'active' && parse_doctor.isActive === true) {
    return (
      <div>
        <br />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Consulted Doctor Details</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>E-Mail</TableCell>
                <TableCell>Specialization</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Hospital</TableCell>
                <TableCell>Qualification</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {parse_doctor.firstName} {parse_doctor.lastName}
                </TableCell>
                <TableCell>{parse_doctor.contactNumber}</TableCell>
                <TableCell>{parse_doctor.email}</TableCell>
                <TableCell>{parse_doctor.specialization}</TableCell>
                <TableCell>{parse_doctor.experience}</TableCell>
                <TableCell>{parse_doctor.hospital}</TableCell>
                <TableCell>{parse_doctor.qualification}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

  if (passstatus === 'inactive' && parse_doctor.isActive === false) {
    return (
      <div>
        <br />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Consulted Doctor Details</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>E-Mail</TableCell>
                <TableCell>Specialization</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Hospital</TableCell>
                <TableCell>Qualification</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {parse_doctor.firstName} {parse_doctor.lastName}
                </TableCell>
                <TableCell>{parse_doctor.contactNumber}</TableCell>
                <TableCell>{parse_doctor.email}</TableCell>
                <TableCell>{parse_doctor.specialization}</TableCell>
                <TableCell>{parse_doctor.experience}</TableCell>
                <TableCell>{parse_doctor.hospital}</TableCell>
                <TableCell>{parse_doctor.qualification}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

  return null;
};

export default ConsultedDoctors;
