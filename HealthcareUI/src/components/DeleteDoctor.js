import React, { useState } from "react";
import { Box, Typography, Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import axios from "axios";
import Alert from "@mui/material/Alert";

function DeleteDoctor() {
  const [error, setError] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleDeleteDoctorSubmit = async (event) => {
    event.preventDefault();

    if (!confirmDelete) {
      setError("Please confirm the deletion by checking the checkbox.");
      return;
    }

    const data = new FormData(event.currentTarget);
    const deleteId = data.get("deleteid");
    const token = sessionStorage.getItem("token");
    const url = `https://localhost:7174/api/Admin/${deleteId}`;

    try {
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setSuccessMessage("Doctor deleted successfully");
        setError(null);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Doctor already deleted");
      } else if (
        error.response &&
        (error.response.status === 403 || error.response.status === 401)
      ) {
        setError("You do not have permission to delete the doctor details");
      } else {
        setError("An error occurred while deleting the doctor");
      }
      setSuccessMessage(null);
    }
  };

  const handleCheckboxChange = (event) => {
    setConfirmDelete(event.target.checked);
    setError(null);
  };

  return (
    <Box
      sx={{
        mt: 4,
        width: "50%",
        margin: "0 auto",
        backgroundColor: "#f2f2f2",
        padding: "20px",
      }}
    >
      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <Typography variant="subtitle2" component="h3" sx={{ marginBottom: "10px" }}>
        Delete Doctor
      </Typography>

      <form onSubmit={handleDeleteDoctorSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="deleteid"
          label="Doctor ID"
          name="deleteid"
          autoComplete="name"
          autoFocus
        />
        <FormControlLabel
          control={<Checkbox checked={confirmDelete} onChange={handleCheckboxChange} />}
          label="I confirm that I want to delete this doctor."
          sx={{ mb: 2 }}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, backgroundColor: "#4caf50", color: "#fff" }}>
          Delete Doctor
        </Button>
      </form>
    </Box>
  );
}

export default DeleteDoctor;
