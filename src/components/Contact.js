// // src/components/Contact.js
// import React from 'react';
// import {
//   Container,
//   Typography,
//   Paper,
//   Box,
//   Link,
//   Grid,
// } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import PhoneIcon from '@mui/icons-material/Phone';

// const Contact = () => {
//   const contactInfo = [
//     {
//       icon: <EmailIcon fontSize="large" />,
//       text: 'godwincyril6@gmail.com',
//       link: 'mailto:godwincyril6@gmail.com'
//     },
//     {
//       icon: <LinkedInIcon fontSize="large" />,
//       text: 'LinkedIn',
//       link: 'https://www.linkedin.com/in/godwin-e/'
//     },
//     {
//       icon: <PhoneIcon fontSize="large" />,
//       text: '+911234567890',
//       link: 'tel:+911234567890'
//     }
//   ];

//   return (
//     <Container id="contact" sx={{ minHeight: '70vh', py: 8 }}>
//       <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
//         Get in Touch
//       </Typography>
//       <Typography variant="h2" align="center" gutterBottom>
//         Contact Me
//       </Typography>
//       <Box 
//         sx={{ 
//           maxWidth: 600, 
//           mx: 'auto', 
//           mt: 4 
//         }}
//       >
//         <Paper 
//           elevation={0} 
//           variant="outlined" 
//           sx={{ 
//             p: 4, 
//             borderRadius: 4,
//             backgroundColor: 'background.paper' 
//           }}
//         >
//           <Grid container spacing={3}>
//             {contactInfo.map((info, index) => (
//               <Grid item xs={12} sm={6} key={index}>
//                 <Box 
//                   sx={{ 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     justifyContent: 'center',
//                     gap: 2
//                   }}
//                 >
//                   {info.icon}
//                   <Link
//                     href={info.link}
//                     variant="h6"
//                     underline="hover"
//                     color="inherit"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {info.text}
//                   </Link>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Paper>
//       </Box>
//     </Container>
//   );
// };

// export default Contact;

// src/components/Contact.js
import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Link,
  Grid,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" />,
      text: 'godwincyril6@gmail.com',
      link: 'mailto:godwincyril6@gmail.com'
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/godwin-e/'
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      text: '+911234567890',
      link: 'tel:+911234567890'
    }
  ];

  return (
    <Container id="contact" sx={{ minHeight: '70vh', py: 8 }}>
      <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
        Get in Touch
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        Contact Me
      </Typography>
      <Box 
        sx={{ 
          maxWidth: 800, // Increased max-width to accommodate single row layout
          mx: 'auto', 
          mt: 4 
        }}
      >
        <Paper 
          elevation={0} 
          variant="outlined" 
          sx={{ 
            p: 4, 
            borderRadius: 4,
            backgroundColor: 'background.paper' 
          }}
        >
          <Grid 
            container 
            spacing={3}
            direction={{ xs: 'column', md: 'row' }} // Column on mobile, row on tablet and up
            alignItems="center"
            justifyContent="center"
          >
            {contactInfo.map((info, index) => (
              <Grid 
                item 
                xs={12}
                md={4} // Equal width for each item on tablet and up
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: 2
                  }}
                >
                  {info.icon}
                  <Link
                    href={info.link}
                    variant="h6"
                    underline="hover"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info.text}
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default Contact;