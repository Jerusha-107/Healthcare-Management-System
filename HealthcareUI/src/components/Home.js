import React from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';
import school from '../images/home.jpg';
import NavigationBar from './NavigationBar';

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div
        style={{
          height: 'calc(100vh - 64px)', // Subtracting the height of the navbar
          width: '100vw',
          position: 'fixed',
          top: '64px', // Height of the navbar
          left: 0,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '16px',
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Welcome to our Healthcare System
            </Typography>
            <Typography variant="body2">
            At our healthcare organization, 
            we are dedicated to providing exceptional care and promoting 
            the well-being of our patients. 
            </Typography>
          </CardContent>
        </Card>
        <img
          src={school}
          alt="Home"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      </div>
    </>
  );
};

export default Home;