import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Grid, Paper, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Projet.css'

export default function Projet({themeLight, isFrench}) {
  const title = isFrench?"Mes Projets":"Our Projects";
  const projects = [
    {
      image: 'prjt1.png',
      title: isFrench?'Application web de réservation des Terrains':'Land reservation web application',
      description:isFrench?
        "Mettre en place une plateforme web où les utilisateurs peuvent rechercher, visualiser et réserver des terrains de football disponibles en fonction de leur emplacement."
        :"Set up a web platform where users can search, view and reserve available football pitches based on their location.",
      technologies: ['Django', 'Html & css', 'mySql'],
      githubLink: 'https://github.com/LarbiFaddani/gestion_terrains',
    },
    {
      image: 'prjt2.png',
      title: isFrench?'Application web de gestion d’annonces publicitaires':'Ad management web application',
      description:
      isFrench?
        "Le système sera composé d'un logiciel de gestion centralisé qui permettra aux commerçants de gérer leurs annonces à distance, et d'un réseau d'écrans installés sur les façades des commerces participants.":
        "The system will consist of centralized management software which will allow merchants to manage their advertisements remotely, and a network of screens installed on the facades of participating businesses.",
      technologies: ['React', 'Ant Design', 'mySql'],
      githubLink: 'https://github.com/LarbiFaddani/proxy',
    },
  ];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: themeLight?'black':'white',
    padding: theme.spacing(2),
    color: themeLight?'black':'white',
    boxShadow: 'none', // Supprimer l'ombre
    border: 'none', // Supprimer les bordures
  }));
  return (
    <div className='responsive-height'>
      <Container>
        <Box my={4}>
          <Typography variant="h4">
            <span style={{ color: "#00acc1" }}>{title}</span>
          </Typography>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {projects.map((project, index) => (
            <Grid item sm={6} xs={12} key={index}>
              <Item style={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: '100%',
                    backgroundColor: themeLight?'#212121':'#eeeeee',
                    color: themeLight?'white':'black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 30px #212121',
                    '&:hover': {
                        boxShadow: '0 4px 100px #212121',
                      },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`/static/Images/project/${project.image}`}
                      alt="project"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color={themeLight?"white":"black"}>
                        {project.description}
                        <div>
                          {project.technologies.map((tech, idx) => (
                            <Button key={idx} style={{ color: getColorForTech(tech) }}>
                              {tech}
                            </Button>
                          ))}
                        </div>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ backgroundColor: themeLight?'#424242':'#bdbdbd' }}>
                    <Button
                      size="small"
                      style={{ color: themeLight?'white':'black' }}
                      target="_blank"
                      href={project.githubLink}
                    >
                      <GitHubIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

// Function to assign a color based on technology
function getColorForTech(tech) {
  switch (tech) {
    case 'Django':
      return 'green';
    case 'Html & css':
      return 'red';
    case 'mySql':
      return 'orange';
    case 'React':
      return 'blue';
    case 'Ant Design':
      return 'red';
    default:
      return 'white';
  }
}
