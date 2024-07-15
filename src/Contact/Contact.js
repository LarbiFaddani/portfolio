import { Box, Container, Typography, TextField, Button } from '@mui/material';
import React from 'react';

function Contact() {
  return (
    <Container style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', paddingTop: '50px' }}>
      <Box my={4} textAlign="center">
        <Typography variant="h4">
          <span style={{ color: "#00acc1" }}>Contact</span>
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
          label="Nom" 
          variant="outlined" 
          InputLabelProps={{ style: { color: 'white' } }} 
          InputProps={{ style: { color: 'white', borderColor: 'white' } }} 
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: '#00acc1' }, '&.Mui-focused fieldset': { borderColor: '#00acc1' } } }}
        />
        <TextField 
          label="Email" 
          type="email" 
          variant="outlined" 
          InputLabelProps={{ style: { color: 'white' } }} 
          InputProps={{ style: { color: 'white', borderColor: 'white' } }} 
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: '#00acc1' }, '&.Mui-focused fieldset': { borderColor: '#00acc1' } } }}
        />
        <TextField 
          label="Message" 
          variant="outlined" 
          multiline 
          rows={4} 
          InputLabelProps={{ style: { color: 'white' } }} 
          InputProps={{ style: { color: 'white', borderColor: 'white' } }} 
          sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: '#00acc1' }, '&.Mui-focused fieldset': { borderColor: '#00acc1' } } }}
        />
        <Button variant="contained" style={{ marginTop: '20px', backgroundColor: '#00acc1', color: 'black' }}>
          Envoyer
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
