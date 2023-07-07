import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import axios from "axios";

function GetAllDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await axios.get(
          "https://localhost:7174/api/Admin/alldoctors",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDoctors(response.data);
      } catch (error) {
        setError("Error fetching doctor details");
      }
    };

    fetchDoctors();
  }, []);

  return (
    <Box mt={4}>
      {error && <Typography color="error">{error}</Typography>}

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor Id</TableCell>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>E-Mail</TableCell>
              <TableCell>Specialization</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell>Hospital</TableCell>
              <TableCell>Qualification</TableCell>
              <TableCell>Status</TableCell> {/* Added status column */}
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((doctor, index) => (
              <TableRow
                key={doctor.doctorId}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                }}
              >
                <TableCell>{doctor.doctorId}</TableCell>
                <TableCell>{doctor.firstName}</TableCell>
                <TableCell>{doctor.lastName}</TableCell>
                <TableCell>{doctor.contactNumber}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>{doctor.specialization}</TableCell>
                <TableCell>{doctor.experience}</TableCell>
                <TableCell>{doctor.hospital}</TableCell>
                <TableCell>{doctor.qualification}</TableCell>
                <TableCell>
                  {doctor.isActive ? "Active" : "Inactive"}
                </TableCell> {/* Displaying "Active" or "Inactive" based on the isActive status */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default GetAllDoctors;
