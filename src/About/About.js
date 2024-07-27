import React from 'react';
import { Container, Typography, Box} from '@mui/material';
import Certification from './Certification';
import Competence from './Competence';

const About = ({themeLight, isFrench}) => {
  const title = isFrench?"À propos":"About";
  const moi = isFrench?"Je suis ":"I'm ";
  const presentation = isFrench?`, Etudiant en ingénierie informatique et réseaux à l’EMSI Casablanca, je suis passionné par la création de sites et d'applications web. 
        Je suis capable de travailler seul ou en équipe et j'ai déjà participé à plusieurs projets de développement web en utilisant des 
        technologies telles que Bootstrap, React js, Laravel. Je suis également intéressé par le développement de sites responsives et par 
        l'optimisation pour les moteurs de recherche.`:`, Student in computer and network engineering at EMSI Casablanca, I am passionate about creating sites and web applications.
         I am able to work alone or in a team and I have already participated in several web development projects using technologies such as Bootstrap, React js, Laravel.
         I am also interested in responsive site development and search engine optimization.`;
  return (
    <div>
      <Container>
      <Box my={4}>
       {themeLight?<Typography variant="h4"><span style={{ color: "#00acc1" }}>{title}</span></Typography>:<Typography variant="h4"><span style={{ color: "#00acc1" }}>About</span></Typography>} 
        <Typography paragraph>
        <div style={{ marginTop: '25px' }}>
        <span style={{ marginLeft: '50px' }}>{moi}</span>{themeLight?<span style={{ fontSize: '20px', color: '#00acc1' }}>FADDANI LARBI</span>:<span style={{ fontSize: '20px', color: '#00acc1' }}>FADDANI LARBI</span>} 
        {presentation}
        </div>
        </Typography>
      </Box>
    <Competence  themeLight={themeLight} isFrench={isFrench}/>
    <Certification themeLight={themeLight} isFrench={isFrench}/>
      </Container>
      </div>
    
  );
};

export default About;
