import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Acceuil from './Acceuil/Acceuil';
import About from './About/About';
import MultiActionAreaCard from './Projet/Projet';
import ContactForm from './Contact/Contact';
const App = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/accueil" element={<Acceuil />} />
          <Route path="/about" element={<About />} />
          <Route path="/projets" element={<MultiActionAreaCard />} />
          <Route path="/contact" element={<ContactForm />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
