// src/components/About.js
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  IconButton,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const About = () => {
  const details = [
    {
      icon: <WorkIcon fontSize="large" />,
      title: 'Experience',
      description: '2+ years Frontend Development'
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      title: 'Education',
      description: 'B.E. Bachelors Degree'
    }
  ];

  return (
    <Container id="about" sx={{ minHeight: '100vh', py: 8 }}>
      <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
        Get To Know More
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        About Me
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src="../assets/about-pic.png"
            alt="About"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 4,
              maxWidth: 400,
              display: 'block',
              mx: 'auto'
            }}
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {details.map((detail, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper 
                  elevation={0} 
                  variant="outlined"
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    height: '100%',
                    borderRadius: 4
                  }}
                >
                  {detail.icon}
                  <Typography variant="h6" sx={{ my: 1 }}>
                    {detail.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {detail.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Typography color="text.secondary" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo 
            consequatur ad, ipsam officiis dignissimos odio magni quod eos dolorem! 
            Repellendus officiis maiores voluptates, voluptatem aperiam quia ipsam 
            quasi. Sint asperiores, unde tempore iure quia vero nemo corrupti ullam 
            autem voluptas.
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <IconButton 
          onClick={() => {
            document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
          }}
          size="large"
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default About;