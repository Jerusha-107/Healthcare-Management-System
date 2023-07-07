import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState } from 'react';

const NotConsultedDoctors = ({ parse_doctor, onConsultClick, passstatus }) => {
  const [isConsulted, setIsConsulted] = useState(false);

  const handleConsultClick = () => {
    onConsultClick(parse_doctor.doctorId);
    setIsConsulted(true);
  };

  if (passstatus === 'active' && parse_doctor.isActive === true) {
    return (
      <div>
        <br />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Not Consulted Doctor Details</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>E-Mail</TableCell>
                <TableCell>Specialization</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Hospital</TableCell>
                <TableCell>Qualification</TableCell>
                <TableCell>Consult</TableCell>
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
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={handleConsultClick}
                    disabled={isConsulted}
                  >
                    {isConsulted ? 'Consulted' : 'Consult'}
                  </Button>
                </TableCell>
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
                <TableCell>Not Consulted Doctor Details</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>E-Mail</TableCell>
                <TableCell>Specialization</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Hospital</TableCell>
                <TableCell>Qualification</TableCell>
                <TableCell>Consult</TableCell>
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
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={handleConsultClick}
                    disabled={isConsulted}
                  >
                    {isConsulted ? 'Consulted' : 'Consult'}
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

  return null;
};

export default NotConsultedDoctors;
