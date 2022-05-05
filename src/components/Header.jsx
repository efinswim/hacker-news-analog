import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Header = () => {
  return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        backgroundColor: '#B55435' 
      }}
    >
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#B55435' }}>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Hacker News
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;