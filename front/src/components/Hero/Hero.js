import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';


const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('.about-me');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-main">
          <div className="hero-text">
            <p className="hero-greeting">Bonjour tout le monde</p>
            <h1 className="hero-name">
              Je suis Gajanraj
              <br />
              MOHANARAJ
            </h1>
            <div 
              className="hero-title"
              onClick={handleScrollToAbout}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleScrollToAbout();
                }
              }}
            >
              <span>Développeur Web</span>
              <ArrowRight size={20} aria-hidden="true" />
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="/images/vicknesh_photo.png" 
              alt="Gajanraj MOHANARAJ" 
              className="hero-image" 
            />
          </div>
        </div>
      </div>
      <div className="container hero-content-2" aria-hidden="true"></div>
    </section>
  );
};

export default Hero;