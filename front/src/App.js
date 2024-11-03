import React, { useRef } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ClientReviews from './components/ClientTests/ClientReviews';
import AboutMe from './components/AboutMe/AboutMe';
import RecentProjects from './components/RecentProjects/RecentProjects';
import PersonalSkills from './components/PersonalSkills/PersonalSkills';
import ContactDetails from './components/ContactDetails/ContactDetails';
import './styles/globalStyles.css';

function App() {
  const testimonialRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header 
        onTestimonialClick={() => scrollToSection(testimonialRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <Hero />
      
      <section ref={aboutRef}>
        <AboutMe />
      </section>
      <section ref={projectsRef}>
        <RecentProjects />
      </section>
      <section ref={skillsRef}>
        <PersonalSkills />
      </section>
      <section ref={contactRef}>
        <ContactDetails />
      </section>
      <section ref={testimonialRef}>
        <ClientReviews />
      </section>
    </div>
  );
}

export default App;