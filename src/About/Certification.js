import React from 'react';
import { Box, Container, Grid, Paper, styled } from '@mui/material';
import './About.css'


const certifications = [
  {
    image: 'michigan.svg',
    titles: [
      {
        title: 'Programming for Everybody (Getting Started with Python)',
        link: 'https://www.coursera.org/account/accomplishments/verify/WNWAWS28UCCC',
      },
      {
        title: 'Interactivity with JavaScript',
        link: 'https://www.coursera.org/account/accomplishments/verify/42Y52V5QZNPJ',
      },
      {
        title: 'Introduction to CSS3',
        link: 'https://www.coursera.org/account/accomplishments/verify/6XXMPS999QL7',
      },
      {
        title: 'Introduction to HTML5',
        link: 'https://www.coursera.org/account/accomplishments/verify/9M2V4C798VCS',
      },
    ],
  },
  {
    image: 'ibm.png',
    titles: [
      {
        title: 'Delivering Quality Work with Agility',
        link: 'https://www.coursera.org/account/accomplishments/verify/3R9HL8SRY8E7',
      },
      {
        title: 'Solving Problems with Creative and Critical Thinking',
        link: 'https://www.coursera.org/account/accomplishments/verify/VTAAUTC529CC',
      },
      {
        title: 'Collaborate Effectively for Professional Success',
        link: 'https://www.coursera.org/account/accomplishments/verify/X2GATVF4VZK2',
      },
      {
        title: 'Developing Interpersonal Skills',
        link: 'https://www.coursera.org/account/accomplishments/verify/UADLXFNT5FEE'
      },
    ],
  },
  {
    image: 'epfl.png',
    titles: [
      {
        title: 'Introduction à la programmation orientée objet (en C++)',
        link: 'https://www.coursera.org/account/accomplishments/verify/UEH3M4PYYG85'
      },
    ],
  },
];

function Certification({themeLight}) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: themeLight?'#212121':'#eeeeee',
    padding: theme.spacing(2),
    color: 'white',
    boxShadow: 'none', // Supprimer l'ombre
    border: 'none', // Supprimer les bordures
  }));
  return (
    <Container style={{ minHeight: '100vh' }}>
      {themeLight?<div style={{ margin: '20px 0px 10px 0px', color: "#00acc1", textAlign: 'center', fontSize: '20px' }}>
        Mes Certifications
      </div>:<div style={{ margin: '20px 0px 10px 0px', color: "#00acc1", textAlign: 'center', fontSize: '20px' }}>
        Mes Certifications
      </div>}
      
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        {themeLight?<span style={{ color: '#00acc1' }}>"</span>:<span style={{ color: '#00acc1' }}>"</span>} Cliquer sur le titre du Certificat pour la vérification
        {themeLight?<span style={{ color: '#00acc1' }}>"</span>:<span style={{ color: '#00acc1' }}>"</span>}
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {certifications.map((certification, index) => (
          <React.Fragment key={index}>
            <Grid item xs={4}>
              <Item style={{ display: 'flex', justifyContent: 'center', minHeight: '140px', alignItems: 'center', backgroundColor: themeLight?'black':'white' }}>
                <Box
                  component="img"
                  src={`${process.env.PUBLIC_URL}/images/universites/${certification.image}`}
                  sx={{
                    width: '30%',
                    height: '30%',
                    objectFit: 'cover',
                    paddingTop: '8px',
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item style={{ minHeight: '140px' }}>
                {certification.titles.map((item, index) => (
                  <div key={index} style={{ marginTop: '8px', }}>
                    {themeLight?<a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link"
                    >
                      {item.title}
                    </a>:<a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-link-dark"
                    >
                      {item.title}
                    </a>}
                  </div>
                ))}
              </Item>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
}

export default Certification;
