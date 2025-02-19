// src/components/Navbar.js
// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// const navLinks = ['About', 'Experience', 'Projects', 'Contact'];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId.toLowerCase());
//     element?.scrollIntoView({ behavior: 'smooth' });
//     if (mobileOpen) handleDrawerToggle();
//   };

//   const drawer = (
//     <List>
//       {navLinks.map((item) => (
//         <ListItem button key={item} onClick={() => scrollToSection(item)}>
//           <ListItemText 
//             primary={item} 
//             sx={{ textAlign: 'center' }}
//           />
//         </ListItem>
//       ))}
//     </List>
//   );

//   return (
//     <AppBar position="sticky" color="secondary" elevation={0}>
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
//           Godwin
//         </Typography>
        
//         {isMobile ? (
//           <>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Drawer
//               anchor="right"
//               open={mobileOpen}
//               onClose={handleDrawerToggle}
//             >
//               {drawer}
//             </Drawer>
//           </>
//         ) : (
//           <Box sx={{ display: 'flex', gap: 2 }}>
//             {navLinks.map((item) => (
//               <Button
//                 key={item}
//                 color="inherit"
//                 onClick={() => scrollToSection(item)}
//               >
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


// src/components/Navbar.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = ['About', 'Experience', 'Projects', 'Contact'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    if (mobileOpen) handleDrawerToggle();
  };

  const drawer = (
    <List>
      {navLinks.map((item) => (
        <ListItem button key={item} onClick={() => scrollToSection(item)}>
          <ListItemText 
            primary={item} 
            sx={{ textAlign: 'center' }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar 
      position="static" 
      color="secondary" 
      elevation={0}
      sx={{
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          Godwin
        </Typography>
        
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navLinks.map((item) => (
              <Button
                key={item}
                color="inherit"
                onClick={() => scrollToSection(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



