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

  const toggleTheme = () => {
    setThemeLight(!themeLight);
  };

  return (
    <div className={themeLight?'light-screen':'dark-screen'}>
    <Router>
      <NavBar themeLight={themeLight} toggleTheme={toggleTheme} />
      <div>
        <Routes>
          <Route path="/" element={<Acceuil themeLight={themeLight} toggleTheme={toggleTheme} />} />
          <Route path="/acceuil" element={<Acceuil themeLight={themeLight} toggleTheme={toggleTheme} />} />
          <Route path="/about" element={<About themeLight={themeLight} toggleTheme={toggleTheme} />} />
          <Route path="/projets" element={<Projet themeLight={themeLight} toggleTheme={toggleTheme}/>} />
          <Route path="/contact" element={<ContactForm themeLight={themeLight} toggleTheme={toggleTheme}/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
