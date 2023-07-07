import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Checkbox,
  Link,
  Grid,
  Box,
  Button,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel } from "@mui/material";
import { NativeSelect } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright ©️ "}
      <Link color="inherit" href="https://mui.com/">
        Doctor Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const defaultTheme = createTheme();

function Register() {
  const [user_role, setRole] = useState("");
  const [user_gender, setGender] = useState(null);
  const [error, setError] = useState();
  const [firstnameValid, setFirstnameValid] = useState(null);
const [lastnameValid, setLastnameValid] = useState(null);
const [phonenumberValid, setPhonenumberValid] = useState(null);
const [rolevalid, setRoleValid] = useState(null);
const [emailValid, setEmailValid] = useState(null);
const [passwordValid, setPasswordValid] = useState(null);
const [qualificationValid, setQualificationValid] = useState(null);
const [specializationValid, setSpecializationValid] = useState(null);
const [experienceValid, setExperienceValid] = useState(null);
const [hospitalValid, setHospitalValid] = useState(null);
const [addressValid, setAddressValid] = useState(null);
const [reasonValid, setReasonValid] = useState(null);

const validateFirstname = (value) => {
  if (value.trim() === "") return null;
  const regex = /^[A-Za-z]{2,}$/;
  return regex.test(value);
};

  const validateLastname = (value) => {
    if (value.trim() === "") return null;
  const regex = /^[A-Za-z]{2,}$/;
  return regex.test(value);
  };

  const validatePhonenumber = (value) => {
    if (value.trim() === "") return null;
    const regex = /^\d{10}$/;
    return regex.test(value);
  };

  const validateEmail = (value) => {
    if (value.trim() === "") return null;
    const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return regex.test(value);
  };

  const validatePassword = (value) => {
    if (value.trim() === "") return null;
    if (value.length < 6) return false; 
    if (!/\d/.test(value)) return false; 
    if (!/[a-z]/i.test(value)) return false; 
    return true;
  };

  const validateQualification = (value) => {
    if (value.trim() === "") return null;
    const regex = /^[A-Za-z]{2,}$/;
    return regex.test(value);
  };

  const validateSpecialization = (value) => {
    if (value.trim() === "") return null;
    const regex = /^[A-Za-z]{2,}$/;
    return regex.test(value);
  };

  const validateExperience = (value) => {
    if (value.trim() === "") return null;
    const regex = /^[A-Za-z0-9 ]{2,}$/;
    return regex.test(value);
  };

  const validateHospital = (value) => {
    if (value.trim() === "") return null;
    const regex = /^[A-Za-z]{2,}$/;
    return regex.test(value);
  };

  const validateAddress = (value) => {
    if (value.trim() === "") return null;
    const regex = /^.{2,}$/;
    return regex.test(value);
  };

  const validateReason = (value) => {
    if (value.trim() === "") return null;
    const regex = /^.{5,}$/;
    return regex.test(value);
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const url = "https://localhost:7174/Register";
    const data_token = {
      userId: 0,
      userFirstName: data.get("firstname"),
      userLastName: data.get("lastname"),
      userEmail: data.get("email"),
      password: data.get("password"),
      role: user_role,
      contactNumber: data.get("Phonenumber"),
      gender: user_gender,
      address: data.get("address"),
      reason: data.get("reason"),
      qualification: data.get("qualification"),
      specialization: data.get("specialization"),
      experience: data.get("experience"),
      hospital: data.get("hospital"),
    };
    try {
      console.log("Inside try block");
      console.log(data_token);
      const response = await axios.post(url, data_token);
      
      toast.success("Registered Successfully");
      navigate("/login");
    } catch (error) {
      
      if (error.response && error.response.status === 400) {
        console.log("Inside error");
      
        toast.error("User already exists"); 
      } else {
        
        console.log(error);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
    setRoleValid(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value || null);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: '#f5f5f5', // Replace with your desired background color
              padding: '1rem',
              borderRadius: '8px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="name"
              autoFocus
              onChange={(e) => {
                setFirstnameValid(validateFirstname(e.target.value));
              }}
            />
            <div style={{ color: "red" }}>
              {firstnameValid === false && "First Name must be at least 2 characters"}
              </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
              autoFocus
              onChange={(e) => {
                setLastnameValid(validateLastname(e.target.value));
              }}
            />
            <div style={{ color: "red" }}>
              {lastnameValid === false && "Last Name must be atleast 2 characters"}
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Phonenumber"
              label="Phone Number"
              name="Phonenumber"
              autoComplete="Phonenumber"
              autoFocus
              onChange={(e) => {
                setPhonenumberValid(validatePhonenumber(e.target.value));
              }}
            />
            <div style={{ color: "red" }}>
              {phonenumberValid === false && "Phone number must be 10 digits"}
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEmailValid(validateEmail(e.target.value));
              }}
            />
            <div style={{ color: "red" }}>
              {emailValid === false && "Please enter a valid e-mail"}
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPasswordValid(validatePassword(e.target.value));
              }}
            />
            <div style={{ color: "red" }}>
              {passwordValid=== false && "It has at least 6 characters.It contains at least one digit.It contains at least one letter (case-insensitive)"}
            </div>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Role
              </InputLabel>
              <NativeSelect
                inputProps={{
                  name: "role",
                  id: "uncontrolled-native",
                }}
                value={user_role}
                onChange={handleRoleChange}
              >
                <option value="">Select role</option>
                <option value="Doctor">Doctor</option>
                <option value="Patient">Patient</option>
              </NativeSelect>
              <div style={{ color: "red" }}>
                {rolevalid===false && "Select a Role."}
              </div>
            </FormControl>
            {user_role === "Doctor" && (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="qualification"
                  label="Qualification"
                  name="qualification"
                  autoComplete="qualification"
                  autoFocus
                  onChange={(e) => {
                    setQualificationValid(
                      validateQualification(e.target.value)
                    );
                  }}
                />
                <div style={{ color: "red" }}>
                  {qualificationValid=== false &&
                    "Qualification must be atleast 2 characters"}
                </div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="specialization"
                  label="Specialization"
                  name="specialization"
                  autoComplete="specialization"
                  autoFocus
                  onChange={(e) => {
                    setSpecializationValid(
                      validateSpecialization(e.target.value)
                    );
                  }}
                />
                <div style={{ color: "red" }}>
                  {specializationValid === false &&
                    "Specialization must be atleast 2 characters"}
                </div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="experience"
                  label="Experience"
                  name="experience"
                  autoComplete="experience"
                  autoFocus
                  onChange={(e) => {
                    setExperienceValid(validateExperience(e.target.value));
                  }}
                />
                <div style={{ color: "red" }}>
                  {experienceValid === false&&
                    "Experience must be atleast 2 characters"}
                </div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="hospital"
                  label="Hospital"
                  name="hospital"
                  autoComplete="Hospital"
                  autoFocus
                  onChange={(e) => {
                    setHospitalValid(validateHospital(e.target.value));
                  }}
                />
                <div style={{ color: "red" }}>
                  {hospitalValid=== false &&
                    "Hospital name must be atleast 2 characters"}
                </div>
              </>
            )}
            {user_role === "Patient" && (
              <>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={user_gender || ""}
                    name="radio-buttons-group"
                    onChange={handleGenderChange}
                  >
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  autoFocus
                  onChange={(e) => {
                    setAddressValid(validateAddress(e.target.value));
                  }}
                />
                <div style={{ color: "red" }}>
                  {addressValid=== false && "Address must be atleast 2 chaarcters"}
                </div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="reason"
                  label="Reason"
                  name="reason"
                  autoComplete="reason"
                  autoFocus
                  onChange={(e) => {
                    setReasonValid(validateReason(e.target.value));
                  }}
                />
                <div style={{ color: "red" }}>
                  {reasonValid === false&& "Reason must be atleast 5 characters"}
                </div>
              </>
            )}

         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Register
            </Button>

            {error && <div className="error-message">{error}</div>}
            <Grid container>
             
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Register;