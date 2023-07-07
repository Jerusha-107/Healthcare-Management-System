import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Box } from '@mui/material';
import CardImage1 from '../images/checkup.jpg';
import CardImage2 from '../images/healthyfood.jpg';
import CardImage3 from '../images/exercise.jpg';

const About = () => {
  const containerStyle = {
    paddingTop: '20px',
    backgroundColor: '#f8f8f8', 
  };

  const contentStyle = {
    marginTop: '32px',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  };

  const imageStyle = {
    width: '100%',
    objectFit: 'cover',
    height: '200px',
    borderRadius: '4px',
  };

  const cardContentStyle = {
    paddingBottom: '16px',
  };

  return (
    <Box sx={containerStyle}>
      <Container maxWidth="md">
        <Box sx={contentStyle}>
          <Typography variant="h4" component="h5" align="center" gutterBottom >
            About
          </Typography>
          <Typography variant="h7" component="h4" align="center" color="blueviolet" gutterBottom>
          Welcome to our Healthcare Management System! We are dedicated to revolutionizing the way healthcare organizations manage their operations, streamline processes, and enhance patient care. Our comprehensive software solution is designed to meet the unique needs of healthcare providers, from small clinics to large hospitals.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={cardStyle}>
                <img src={CardImage1} alt="Card 1" style={imageStyle} />
                <CardContent sx={cardContentStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Health Check-ups
                  </Typography>
                  <Typography variant="body2">
                    Regular health check-ups are important for early detection and prevention of diseases. Learn about the recommended health screenings for different age groups and how they can help maintain your well-being.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={cardStyle}>
                <img src={CardImage2} alt="Card 2" style={imageStyle} />
                <CardContent sx={cardContentStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Healthy Diet
                  </Typography>
                  <Typography variant="body2">
                    Eating a balanced diet is vital for maintaining good health. Discover the benefits of a nutritious diet, explore different food groups, and get tips on creating a healthy eating plan that suits your needs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={cardStyle}>
                <img src={CardImage3} alt="Card 3" style={imageStyle} />
                <CardContent sx={cardContentStyle}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Exercise and Fitness
                  </Typography>
                  <Typography variant="body2">
                    Physical activity plays a crucial role in overall health and well-being. Find out the importance of regular exercise, learn about different types of workouts, and get guidance on incorporating fitness into your daily routine.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
