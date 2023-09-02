import './App.css';
import { useEffect, useState } from 'react';
import AboutusSection from './Components/AboutusSection';
import HeroSection from './Components/HeroSection';
import ResidenceSection from './Components/ResidenceSection';

function App() {

useEffect(() => {
  const sections = document.querySelectorAll('section');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    sections.forEach((sec) => {
      const offset = sec.offsetTop - 200;
      const height = sec.offsetHeight;

      if (scrollY >= offset && scrollY < offset + height) {
        sec.classList.add('show-animation');
      } else {
        sec.classList.remove('show-animation');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [])
  

  return (
    <div className="est-website single-section">
      <HeroSection/>
      <AboutusSection/>
      <ResidenceSection/>
    </div>
  );
}

export default App;
