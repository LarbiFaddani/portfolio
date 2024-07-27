import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Alert } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import TungstenIcon from '@mui/icons-material/Tungsten';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LanguageIcon from '@mui/icons-material/Language';

export default function NavBar({ themeLight, toggleTheme, isFrench, changeLanguage }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showLanguageAlert, setShowLanguageAlert] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleChangeLanguage = () => {
    changeLanguage();
    setShowLanguageAlert(true);
    setTimeout(() => {
      setShowLanguageAlert(false);
    }, 3000);
  };

  const list = () => (
    <Box
      sx={{ width: 250, height: '100vh', backgroundColor: themeLight ? 'black' : 'white', color: themeLight ? 'white' : 'black' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Acceuil', 'About', 'Projets', 'Contact'].map((text) => {
          const path = `/${text.toLowerCase()}`;
          return (
            <ListItem button key={text} component={Link} to={path}>
              <ListItemText 
                primary={themeLight? 
                  <span style={{ color: location.pathname === path ? '#00acc1' : 'white' }}>{text}</span>
                  :
                  <span style={{ color: location.pathname === path ? '#00acc1' : 'black' }}>{text}</span>
               } 
                sx={{ color: 'white' }} 
              />
            </ListItem>
          );
        })}
        <Button style={{ color: themeLight ? 'white' : 'black' }} onClick={toggleTheme}>
          {themeLight ? <TungstenIcon /> : <NightlightRoundIcon />}
        </Button>
        <Button style={{ color: themeLight ? 'white' : 'black' }} onClick={handleChangeLanguage}>
          <LanguageIcon />
        </Button>
      </List>
    </Box>
  );

  return (
    <div>
      {showLanguageAlert && (
        <Alert severity="success" sx={{ position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1200, backgroundColor: '#00acc1', color: 'white', marginTop: '40px' }}>
          {!isFrench?"Your content is switched to English language":"Votre contenu est basculé vers le Français"}
        </Alert>
      )}
      <AppBar position="static" sx={{ backgroundColor: themeLight ? 'black' : 'white', color: themeLight ? 'white' : 'black' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button sx={{ color: themeLight ? 'white' : 'black', fontSize: '20px', fontWeight: 'bolder' }} component={Link} to="/">
              FADDANI
            </Button>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {['Acceuil', 'About', 'Projets', 'Contact'].map((text) => {
              const path = `/${text.toLowerCase()}`;
              return (
                <Button
                  key={text}
                  color="inherit"
                  sx={{ color: themeLight ? 'white' : 'black', marginRight: '60px' }}
                  component={Link}
                  to={path}
                >
                  {
                    themeLight? 
                    <span style={{ color: location.pathname === path ? '#00acc1' : 'white' }}>{text}</span>
                    :
                    <span style={{ color: location.pathname === path ? '#00acc1' : 'black' }}>{text}</span>
                  }
                </Button>
              );
            })}
            <Button style={{ color: themeLight ? 'white' : 'black' }} onClick={toggleTheme}>
              {themeLight ? <TungstenIcon /> : <NightlightRoundIcon />}
            </Button>
            <Button style={{ color: themeLight ? 'white' : 'black' }} onClick={handleChangeLanguage}>
              <LanguageIcon />
            </Button>
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ color: 'white', display: { xs: 'block', sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon style={{ color: themeLight ? 'white' : 'black' }}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
