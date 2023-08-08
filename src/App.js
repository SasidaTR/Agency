import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Navbar from './components/Navbar';
import StudyCase from './components/StudyCase';
import { useMediaQuery } from 'react-responsive';

function App() {
  const prefersDarkMode = useMediaQuery({ query: '(prefers-color-scheme: dark)' });
  const storedMode = localStorage.getItem('mode');
  
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode || storedMode === 'dark');

  const toggleMode = () => {
    const newMode = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(newMode === 'dark');
    localStorage.setItem('mode', newMode);
  };

  document.documentElement.className = isDarkMode ? 'dark' : 'light';

  return (
    <BrowserRouter>
      <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:titleSearched" element={<StudyCase />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
