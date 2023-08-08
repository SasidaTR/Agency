import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isDarkMode, toggleMode }) {
  return (
    <nav className={`navbar ${isDarkMode ? 'dark-navbar' : 'light-navbar'}`}>
      <Link to="/">Accueil</Link>
      <Link to="/about">L'agence</Link>
      <Link to="/works">Projets</Link>
      <button onClick={toggleMode}>
        Mode {isDarkMode ? 'Sombre' : 'Clair'}
      </button>
    </nav>
  );
};

export default Navbar;

