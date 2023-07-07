import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ContactImage from '../images/contact.jpg';
import { blueGrey } from '@mui/material/colors';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '20px', bgcolor: blueGrey[50] }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ color: '#000', fontFamily: 'Arial' }}>
        Contact Us
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: '#fff',
              p: 4,
              borderRadius: '8px',
              height: '100%',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" sx={{ fontSize: '24px', marginBottom: '16px', color: '#000', fontFamily: 'Arial' }}>
              Email: healthcarecommunity@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '24px', marginBottom: '16px', color: '#000', fontFamily: 'Arial' }}>
              Phone: 22 234 567 890
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '24px', marginBottom: '16px', color: '#000', fontFamily: 'Arial' }}>
              Address: 14 Street, Pune, Maharashtra, India
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src={ContactImage} alt="Contact" style={{ width: '100%', maxWidth: '400px' }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
