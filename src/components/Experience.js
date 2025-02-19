// src/components/Experience.js
// import React from 'react';
// import {
//   Container,
//   Typography,
//   Grid,
//   Paper,
//   Box,
//   IconButton,
// } from '@mui/material';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const ExperienceSection = () => {
//   const frontendSkills = [
//     { name: 'HTML', level: 'Experienced' },
//     { name: 'CSS', level: 'Experienced' },
//     { name: 'SASS', level: 'Intermediate' },
//     { name: 'JavaScript', level: 'Basic' },
//     { name: 'TypeScript', level: 'Basic' },
//     { name: 'Material UI', level: 'Intermediate' }
//   ];

//   const backendSkills = [
//     { name: 'PostgreSQL', level: 'Basic' },
//     { name: 'Node JS', level: 'Intermediate' },
//     { name: 'Express JS', level: 'Intermediate' }
//   ];

//   const SkillSection = ({ title, skills }) => (
//     <Paper 
//       elevation={0} 
//       variant="outlined" 
//       sx={{ p: 3, borderRadius: 4 }}
//     >
//       <Typography variant="h5" gutterBottom>
//         {title}
//       </Typography>
//       <Grid container spacing={2}>
//         {skills.map((skill, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <CheckCircleOutlineIcon color="primary" />
//               <Box>
//                 <Typography variant="subtitle1">
//                   {skill.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {skill.level}
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Paper>
//   );

//   return (
//     <Container id="experience" sx={{ minHeight: '100vh', py: 8 }}>
//       <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
//         Explore My
//       </Typography>
//       <Typography variant="h2" align="center" gutterBottom>
//         Experience
//       </Typography>

//       <Grid container spacing={4} sx={{ mt: 4 }}>
//         <Grid item xs={12}>
//           <SkillSection title="Frontend Development" skills={frontendSkills} />
//         </Grid>
//         <Grid item xs={12}>
//           <SkillSection title="Backend Development" skills={backendSkills} />
//         </Grid>
//       </Grid>

//       <Box sx={{ textAlign: 'center', mt: 4 }}>
//         <IconButton 
//           onClick={() => {
//             document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
//           }}
//           size="large"
//         >
//           <KeyboardArrowDownIcon fontSize="large" />
//         </IconButton>
//       </Box>
//     </Container>
//   );
// };

// export default ExperienceSection;

// src/components/Experience.js
// import React from 'react';
// import {
//   Container,
//   Typography,
//   Grid,
//   Paper,
//   Box,
//   IconButton,
// } from '@mui/material';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const ExperienceSection = () => {
//   const frontendSkills = [
//     { name: 'HTML', level: 'Experienced' },
//     { name: 'CSS', level: 'Experienced' },
//     { name: 'SASS', level: 'Intermediate' },
//     { name: 'JavaScript', level: 'Basic' },
//     { name: 'TypeScript', level: 'Basic' },
//     { name: 'Material UI', level: 'Intermediate' }
//   ];

//   const SkillSection = ({ title, skills }) => (
//     <Paper 
//       elevation={0} 
//       variant="outlined" 
//       sx={{ p: 3, borderRadius: 4 }}
//     >
//       <Typography variant="h5" gutterBottom>
//         {title}
//       </Typography>
//       <Grid container spacing={2}>
//         {skills.map((skill, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <CheckCircleOutlineIcon color="primary" />
//               <Box>
//                 <Typography variant="subtitle1">
//                   {skill.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {skill.level}
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Paper>
//   );

//   return (
//     <Container id="experience" sx={{ minHeight: '100vh', py: 8 }}>
//       <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
//         Explore My
//       </Typography>
//       <Typography variant="h2" align="center" gutterBottom>
//         Experience
//       </Typography>

//       <Grid container spacing={4} sx={{ mt: 4 }}>
//         <Grid item xs={12}>
//           <SkillSection title="Frontend Development" skills={frontendSkills} />
//         </Grid>
//       </Grid>

//       <Box sx={{ textAlign: 'center', mt: 4 }}>
//         <IconButton 
//           onClick={() => {
//             document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
//           }}
//           size="large"
//         >
//           <KeyboardArrowDownIcon fontSize="large" />
//         </IconButton>
//       </Box>
//     </Container>
//   );
// };

// export default ExperienceSection;

// src/components/Experience.js
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  IconButton,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ExperienceSection = () => {
  const frontendSkills = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Experienced' },
    { name: 'SASS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Basic' },
    { name: 'React.Js', level: 'Intermediate' },
    { name: 'Redux', level: 'Intermediate' },
    { name: 'Material UI', level: 'Intermediate' }
  ];

  const SkillSection = ({ title, skills }) => (
    <Paper 
      elevation={0} 
      variant="outlined" 
      sx={{ p: 3, borderRadius: 4 }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleOutlineIcon color="primary" />
              <Box>
                <Typography variant="subtitle1">
                  {skill.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.level}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  return (
    <Container id="experience" sx={{ py: 4 }}>
      <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
        Explore My
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        Experience
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12}>
          <SkillSection title="Frontend Development" skills={frontendSkills} />
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <IconButton 
          onClick={() => {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          }}
          size="large"
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default ExperienceSection;