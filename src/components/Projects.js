// src/components/Projects.js
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      image: '/assets/project-1.png',
      githubLink: 'https://github.com/',
      liveDemo: 'https://github.com/'
    },
    {
      title: 'Project Two',
      image: '/assets/project-2.png',
      githubLink: 'https://github.com/',
      liveDemo: 'https://github.com/'
    },
    {
      title: 'Project Three',
      image: '/assets/project-3.png',
      githubLink: 'https://github.com/',
      liveDemo: 'https://github.com/'
    }
  ];

  return (
    <Container id="projects" sx={{ minHeight: '100vh', py: 8 }}>
      <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
        Browse My Recent
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                borderRadius: 4,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease-in-out'
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {project.title}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto', justifyContent: 'center', pb: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href={project.githubLink}
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<LaunchIcon />}
                  href={project.liveDemo}
                  target="_blank"
                  sx={{ ml: 2 }}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <IconButton 
          onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}
          size="large"
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Projects;