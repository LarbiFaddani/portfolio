import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download';
import CallIcon from '@mui/icons-material/Call';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  border: 'none',
  borderRadius: 0,
}));

const downloadCV = () => {
  const cvFilePath = `${process.env.PUBLIC_URL}/images/profile/FADDANI.pdf`;

  const link = document.createElement('a');
  link.href = cvFilePath;
  link.setAttribute('download', 'CV_FADDANI_LARBI');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function BasicGrid({ themeLight }) {
  const [afficherButton, setAfficherBoutton] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAfficher = () => {
    setAfficherBoutton(!afficherButton);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: themeLight ? 'black' : 'white',
        color: themeLight ? 'white' : 'black',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      

      <Grid container spacing={2} direction={isMobile ? 'column' : 'row'}>
        <Grid item xs={12} sm={6} style={{ marginTop: isMobile ? '0' : '40px' }}>
          <Item
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: themeLight ? 'black' : 'white',
              color: themeLight ? 'white' : 'black',
              padding: '100px 0px 0px 20px',
              borderRadius: '50px',
              '@media (min-width:600px)': {
                padding: '300px 0px 0px 20px',
              },
            }}
          >
            <div style={{ paddingTop: '0px' }}>
              <h1>
                Je suis <span style={{ color: themeLight ? '#00acc1' : '#00acc1', fontSize: 'larger' }}>Faddani Larbi</span>
              </h1>
              <h3>
                Développeur web <span style={{ color: themeLight ? '#00796b' : '#00796b', fontSize: 'larger' }}>Full Stack</span>
              </h3>
              <div style={{ marginTop: '25px' }}>
                <Button style={{ borderColor: '#00acc1', color: themeLight ? '#00acc1' : '#00acc1', marginRight: '20px', width: '200px', marginTop: '10px' }} onClick={handleAfficher}>
                  <CallIcon />Contacter moi
                </Button>
                <Button variant="contained" style={{ color: 'white', backgroundColor: themeLight ? '#00acc1' : '#00acc1', width: '200px', marginTop: '10px' }} onClick={downloadCV}>
                  <DownloadIcon />Telecharger cv
                </Button>
              </div>
              {afficherButton && (
                <div style={{ marginTop: '15px' }}>
                  <Button style={{ color: 'green' }} onClick={() => window.open('https://wa.me/212762164050?text=Bonjour M. Larbi,', '_blank')}>
                    <WhatsAppIcon />
                  </Button>
                  <Button style={{ color: 'blue' }} onClick={() => window.open('https://www.linkedin.com/in/larbi-faddani-b6471a216/', '_blank')}>
                    <LinkedInIcon />
                  </Button>
                  <Button style={{ color: 'red' }} onClick={() => window.open('https://www.instagram.com/_arabi_fd', '_blank')}>
                    <InstagramIcon />
                  </Button>
                </div>
              )}
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item
            sx={{
              width: '215px',
              height: '215px',
              marginTop: '150px',
              marginLeft: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: themeLight ? 'black' : 'white',
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/profile/et.avif)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overflow: 'hidden',
              boxShadow: themeLight ? '0 4px 80px #fff' : '0 4px 80px #FDB813',
            }}
          >
            <Box component="img" src={themeLight ? `${process.env.PUBLIC_URL}/images/profile/p1.png` : `${process.env.PUBLIC_URL}/images/profile/pOrange.jpg`} sx={{ width: '120%', height: '120%', objectFit: 'cover', paddingTop: '8px' }} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
