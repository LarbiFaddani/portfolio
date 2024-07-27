import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Acceuil from './Acceuil/Acceuil';
import About from './About/About';
import Projet from './Projet/Projet';
import ContactForm from './Contact/Contact';
import './App.css'
const App = () => {
  const [themeLight, setThemeLight] = useState(true);
  const [isFrench, setIsFrench]= useState(true);
  const toggleTheme = () => {
    setThemeLight(!themeLight);
  };
  const changeLanguage=()=>{
    setIsFrench(!isFrench);
  }

  return (
    <div className={themeLight?'light-screen':'dark-screen'}>
    <Router>
      <NavBar themeLight={themeLight} toggleTheme={toggleTheme} isFrench={isFrench} changeLanguage={changeLanguage}/>
      <div>
        <Routes>
          <Route path="/" element={<Acceuil themeLight={themeLight} isFrench={isFrench} />} />
          <Route path="/acceuil" element={<Acceuil themeLight={themeLight} isFrench={isFrench} />} />
          <Route path="/about" element={<About themeLight={themeLight} isFrench={isFrench} />} />
          <Route path="/projets" element={<Projet themeLight={themeLight} isFrench={isFrench} />} />
          <Route path="/contact" element={<ContactForm themeLight={themeLight} isFrench={isFrench} />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
