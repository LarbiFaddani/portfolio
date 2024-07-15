import React from 'react';
import { Container, Typography, Box, styled, Paper } from '@mui/material';
import Certification from './Certification';
import Competence from './Competence';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  boxShadow: 'none', // Supprimer l'ombre
  border: 'none', // Supprimer les bordures
  borderRadius: 0, // Supprimer les coins arrondis
}));
const About = () => {
  return (
    <div>
      <Container>
      <Box my={4}>
        <Typography variant="h4"><span style={{ color: "#00acc1" }}>About</span></Typography>
        <Typography paragraph>
        <div style={{ marginTop: '25px' }}>
        <span style={{ marginLeft: '50px' }}>Je suis</span><span style={{ fontSize: '20px', color: '#00acc1' }}> FADDANI LARBI</span> 
        , Etudiant en ingénierie informatique et réseaux à l’EMSI Casablanca, je suis passionné par la création de sites et d'applications web. 
        Je suis capable de travailler seul ou en équipe et j'ai déjà participé à plusieurs projets de développement web en utilisant des 
        technologies telles que Bootstrap, React js, Laravel. Je suis également intéressé par le développement de sites responsives et par 
        l'optimisation pour les moteurs de recherche.
        </div>
        </Typography>
      </Box>
    <Competence />
    <Certification />
      </Container>
      </div>
    
  );
};

export default About;
