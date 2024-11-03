import React from 'react';
import './Header.css';

const Header = ({ onTestimonialClick, onAboutClick, onProjectsClick, onSkillsClick, onContactClick }) => {
  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="logo">PORTFOLIO de Gajanraj</h1>
        <nav className="navigation">
      
          <button onClick={onAboutClick}>A propos de moi</button>
          <button onClick={onProjectsClick}>Projets</button>
          <button onClick={onSkillsClick}>Compétences</button>
          <button onClick={onContactClick}>Contact</button>
          <button onClick={onTestimonialClick}>Avis</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;