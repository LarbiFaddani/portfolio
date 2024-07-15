import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250, height: '100vh', backgroundColor: 'black', color: 'white' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Accueil', 'About', 'Projets', 'Contact'].map((text) => {
          const path = `/${text.toLowerCase()}`;
          return (
            <ListItem button key={text} component={Link} to={path} >
              <ListItemText 
                primary={<span style={{ color: location.pathname === path ? '#00acc1' : 'white',
                }}>{text}</span>} 
                sx={{ color: 'white' }}
                 
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'black', }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button sx={{ color: 'white', fontSize: '20px', fontWeight: 'bolder' }} component={Link} to="/">
              FADDANI
            </Button>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {['Accueil', 'About', 'Projets', 'Contact'].map((text) => {
              const path = `/${text.toLowerCase()}`;
              return (
                <Button
                  key={text}
                  color="inherit"
                  sx={{ color: 'white', marginRight: '60px' }}
                  component={Link}
                  to={path}
                >
                  <span style={{ color: location.pathname === path ? '#00acc1' : 'white'}}>
                    {text}
                  </span>
                </Button>
              );
            })}
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ color: 'white', display: { xs: 'block', sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
