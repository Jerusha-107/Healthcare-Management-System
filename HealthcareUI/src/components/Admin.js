import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  CardContent,
  Card,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import adminImage from "../images/checkup.jpg";

function Admin() {
  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ marginBottom: "20px", textAlign: "center" }}>
        Admin Panel
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              minHeight: "400px",
            }}
          >
            <img
              src={adminImage}
              alt="Admin"
              style={{ width: "500px", height: "500px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              minHeight: "400px",
            }}
          >
            <Card sx={{ width: "100%", maxWidth: "400px", textAlign: "center" }}>
              <CardContent>
                <Typography variant="h6" component="h2" sx={{ marginBottom: "20px" }}>
                  Admin's Task
                </Typography>
                <Typography variant="body1" component="p" sx={{ marginBottom: "40px" }}>
                  Admins can create, edit, and delete user accounts, manage user roles and permissions, and handle user authentication and authorization.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/activate-doctor"
                    sx={{ textTransform: "none", fontSize: "18px" }}
                  >
                    Activate/Deactivate Doctor
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/add-doctor"
                    sx={{ textTransform: "none", fontSize: "18px" }}
                  >
                    Add a Doctor
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/delete-doctor"
                    sx={{ textTransform: "none", fontSize: "18px" }}
                  >
                    Delete a Doctor
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/update-doctor"
                    sx={{ textTransform: "none", fontSize: "18px" }}
                  >
                    Update Doctor
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/getall-doctor"
                    sx={{ textTransform: "none", fontSize: "18px" }}
                  >
                    Show Doctor Details
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/get-doctor-id"
                    sx={{ textTransform: "none", fontSize: "18px" }}
                  >
                    Get Doctor Detail by ID
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Admin;
