// src/components/Footer.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
} from '@mui/material';

const Footer = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 6,
        backgroundColor: 'background.paper'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: 3,
            mb: 3,
            flexWrap: 'wrap'
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              color="inherit"
              underline="hover"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href).scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              {link.name}
            </Link>
          ))}
        </Box>
        
        <Divider sx={{ mb: 3 }} />

        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
        >
          Copyright © {new Date().getFullYear()} Godwin. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;