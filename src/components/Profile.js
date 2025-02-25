// src/components/Profile.js
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  IconButton,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Profile = () => {
  return (
    <Container id="profile" sx={{ minHeight: '80vh', py: 8 }}>
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src="/assets/Godwin_linkedin.jpg"
            alt="Profile"
            sx={{
              width: { xs: '275px', md: '400px' },
              height: { xs: '275px', md: '400px' },
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Hello, I'm
          </Typography>
          <Typography variant="h1" component="h1" gutterBottom>
            GODWIN
          </Typography>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Frontend Developer
          </Typography>
          
          <Box sx={{ mt: 3, mb: 4 }}>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mr: 2 }}
              href="./assets/Godwin_Resume_MERNstack.pdf"
              target="_blank"
            >
              Download CV
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Info
            </Button>
          </Box>
          
          <Box>
            <IconButton
              href="https://www.linkedin.com/in/godwin-e/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://github.com/Godw16"
              target="_blank"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;