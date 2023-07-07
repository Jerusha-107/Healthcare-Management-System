import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  CardContent,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useEffect } from "react";
import Card from "@mui/material/Card";

 
function UpdateDoctor(){
  const [firstnameValid, setFirstnameValid] = useState(false);
  const [lastnameValid, setLastnameValid] = useState(false);
  const [phonenumberValid, setPhonenumberValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
 
  const [qualificationValid, setQualificationValid] = useState(false);
  const [specializationValid, setSpecializationValid] = useState(false);
  const [experienceValid, setExperienceValid] = useState(false);
  const [hospitalValid, setHospitalValid] = useState(false);
  const [error, setError] = useState(null);
  const handleUpdateDoctorSubmit = async (event) => {
  
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updateid = data.get("updateid");

    const url = `https://localhost:7174/api/Admin/doctor/${updateid}`;
    const data_token = {
      firstName: data.get("firstname"),
      lastName: data.get("lastname"),
      email: data.get("email"),
      contactNumber: data.get("Phonenumber"),
      qualification: data.get("qualification"),
      specialization: data.get("specialization"),
      experience: data.get("experience"),
      hospital: data.get("hospital"),
    };
    try {
      const token=sessionStorage.getItem('token');
      console.log("Inside try block");
      console.log(data_token);
      const response = await axios.put(url, data_token,{
        headers: {
          'Authorization': `Bearer ${token}`,
        }
        })
      if (response.status === 200) {
        toast.success("Doctor updated successfully");
      }
    } catch (error) {
      // Handle any errors
      if (error.response && error.response.status === 400) {
        console.log("Doctor does not exist");
        toast.error("Doctor does not exist");
        
      }
      if (error.response && (error.response.status === 403 || error.response.status === 401)) {
        toast.error("You do not have permission to update a  doctor ");
      }
    }
  };
  const validateFirstname = (value) => {
    
    const regex = /^[A-Za-z]{2,}$/;
    return regex.test(value);
  };

  const validateLastname = (value) => {
   
    const regex = /^[A-Za-z]{2,}$/;
    return regex.test(value);
  };

  const validatePhonenumber = (value) => {
  
    const regex = /^\d{10}$/;
    return regex.test(value);
  };

  const validateEmail = (value) => {
   
    const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return regex.test(value);
  };

 

  const validateQualification = (value) => {
    
    const regex = /^[A-Za-z]{2,}$/;
    return regex.test(value);
  };

  const validateSpecialization = (value) => {
   
    const regex = /^[A-Za-z]{2,}$/;
    return regex.test(value);
  };

  const validateExperience = (value) => {
   
    const regex = /^[A-Za-z0-9 ]{2,}$/;
    return regex.test(value);
  };

  const validateHospital = (value) => {
   
    const regex = /^[A-Za-z]{2,}$/;
    return regex.test(value);
  };
  const isFormValid = () => {
    if (
      firstnameValid &&
      lastnameValid &&
      emailValid &&
      qualificationValid &&
      specializationValid &&
      experienceValid &&
      hospitalValid&&phonenumberValid
    ) {
      return true;
    }
    return false;
  };

   
    return(
      <div>
      
          <Box sx={{ marginTop: "20px" }}>
            <Box sx={{ marginTop: "20px" }}>
          <Typography
            variant="subtitle2"
            component="h3"
            sx={{ marginBottom: "10px" }}
          >
            Update Doctor Details
          </Typography>
        </Box>
        </Box>

          <Box
            component="form"
            onSubmit={handleUpdateDoctorSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="updateid"
              label="Doctor ID"
              name="updateid"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="name"
              autoFocus
             
            />
            
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
              autoFocus
             
            />
           
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="Phonenumber"
              label="Phone Number"
              name="Phonenumber"
              autoComplete="Phonenumber"
              autoFocus
             
            />
            
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
          
            
          
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="qualification"
              label="Qualification"
              name="qualification"
              autoComplete="qualification"
              autoFocus
             
            />
            
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="specialization"
              label="Specialization"
              name="specialization"
              autoComplete="specialization"
              autoFocus
            
            />
          
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="experience"
              label="Experience"
              name="experience"
              autoComplete="experience"
              autoFocus
           
            />
           
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="hospital"
              label="Hospital"
              name="hospital"
              autoComplete="Hospital"
              autoFocus
           
            />
           
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Update Doctor
            </Button>
            
          </Box>
        
        </div>
      )}
  


export default UpdateDoctor;