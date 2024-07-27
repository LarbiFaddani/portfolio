import { Box, Container, Typography, TextField, Button } from '@mui/material';
import React from 'react';

function Contact({themeLight, isFrench}) {
  const title = isFrench?'Contacter-moi':'Contact me';
  const name = isFrench?'Nom':'Name';
  const send = isFrench?'Envoyer':'Send';
  return (
    <Container style={{ minHeight: '100vh', backgroundColor: themeLight?'black':'white', color: 'white', paddingTop: '50px', marginTop: '8px' }}>
      <Box my={4} textAlign="center">
        <Typography variant="h4">
          <span style={{ color: "#00acc1" }}>{title}</span>
        </Typography>
      </Box>
      <Box 
        component="form" 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          '& .MuiTextField-root': { margin: 1, width: '100%' }, 
          maxWidth: '600px', 
          margin: '0 auto' 
        }}
      >
        <TextField 
          label={name} 
          variant="outlined" 
          InputLabelProps={{ style: { color: themeLight?'white':'black' } }} 
          InputProps={{ style: { color: themeLight?'white':'black', borderColor: themeLight?'white':'black' } }} 
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: themeLight?'white':'black' }, '&:hover fieldset': { borderColor: '#00acc1' }, '&.Mui-focused fieldset': { borderColor: '#00acc1' } } }}
        />
        <TextField 
          label="Email" 
          type="email" 
          variant="outlined" 
          InputLabelProps={{ style: { color: themeLight?'white':'black' } }} 
          InputProps={{ style: { color: themeLight?'white':'black', borderColor: themeLight?'white':'black' } }} 
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: themeLight?'white':'black' }, '&:hover fieldset': { borderColor: '#00acc1' }, '&.Mui-focused fieldset': { borderColor: '#00acc1' } } }}
        />
        <TextField 
          label="Message" 
          variant="outlined" 
          multiline 
          rows={4} 
          InputLabelProps={{ style: { color: themeLight?'white':'black' } }} 
          InputProps={{ style: { color: themeLight?'white':'black', borderColor: themeLight?'white':'black' } }} 
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: themeLight?'white':'black' }, '&:hover fieldset': { borderColor: '#00acc1' }, '&.Mui-focused fieldset': { borderColor: '#00acc1' } } }}
        />
        <Button variant="contained" style={{ marginTop: '20px', backgroundColor: '#00acc1', color: 'white', paddingInline: !isFrench&&'30px' }}>
          {send}
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
