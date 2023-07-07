import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function NavigationBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box fontWeight="bold" fontSize={24}>
            Healthcare Community
          </Box>
          <Box fontSize={14} mt={-1}>
            Good Health. Good Life!
          </Box>
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button component={Link} to="/home" color="inherit" startIcon={<HomeIcon />}>
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit" startIcon={<SupervisorAccountIcon />}>
            About
          </Button>
          <Button component={Link} to="/contact" color="inherit" startIcon={<SchoolIcon />}>
            Contact Us
          </Button>
          <Button component={Link} to="/login" color="inherit" startIcon={<PersonIcon />}>
            Login/Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
