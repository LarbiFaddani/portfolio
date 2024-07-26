import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

const skills = [
  { name: 'Python', icon: 'python.png' },
  { name: 'Laravel', icon: 'laravel.png' },
  { name: 'MySQL', icon: 'mysql.svg' },
  { name: 'ReactJs', icon: 'react.png' },
  { name: 'Git', icon: 'git.png' },
  { name: 'C#', icon: 'cs.svg' },
  { name: 'WordPress', icon: 'wdp1.png' },
  { name: 'Linux', icon: 'linux.png' },
];

function Competence({themeLight}) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div>
      {themeLight?<div style={{ color: "#00acc1", textAlign: 'center', marginBottom: '20px', fontSize: '20px' }}>
        Mes Compétences
      </div>:<div style={{ color: "#00acc1", textAlign: 'center', marginBottom: '20px', fontSize: '20px' }}>
        Mes Compétences
      </div>}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {skills.map((skill, index) => (
          <Grid item key={index} xs={6} sm={3}>
            <Box
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '20px',
                margin: '0px 20px 0px 20px',
                backgroundColor: themeLight?( hoveredIndex === index ? '#00acc1' : '#212121'):
                ( hoveredIndex === index ? '#00acc1' : '#eeeeee'), // Change la couleur de fond au survol

                padding: '30px 0px 30px 0px',
                marginRight: '50px',
                marginBottom: index === skills.length - 1 ? '20px' : '0px',
              }}
            >
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/images/skills/${skill.icon}`}
                sx={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover',
                  paddingTop: '8px',
                }}
              />
              <Box component="span" sx={{ marginTop: '8px' }}>
                {skill.name}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Competence;
