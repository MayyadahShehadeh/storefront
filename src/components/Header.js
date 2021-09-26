import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 10 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 10 }}>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Storefront
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

