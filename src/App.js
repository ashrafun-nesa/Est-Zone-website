import './App.css';
import { useEffect, useState } from 'react';
import AboutusSection from './Components/AboutusSection';
import HeroSection from './Components/HeroSection';
import ResidenceSection from './Components/ResidenceSection';
import AgentSection from './Components/AgentSection';
import ChooseUsSection from './Components/ChooseUsSection';
import FeatureSection from './Components/FeatureSection';
import FooterSection from './Components/FooterSection';

function App() {

useEffect(() => {
  const sections = document.querySelectorAll('section');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    sections.forEach((sec) => {
      const offset = sec.offsetTop - 400;
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
      <AgentSection/>
      <ChooseUsSection/>
      <FeatureSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
