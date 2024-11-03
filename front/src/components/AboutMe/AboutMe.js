import React from 'react';
import './AboutMe.css';

const AboutMe = ({ cvUrl = '/documents/CV_Gajanraj.pdf' }) => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'CV_Gajanraj.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="section about-me">
      <div className="container about-content">
        <div className="about-image-wrapper">
          <img src="/images/aboutme.png" alt="About Me" className="about-image" />
        </div>
        <div className="about-text">
          <h2 className="section-title">A propos de moi</h2>
          <p className="about-description">
            Actuellement développeur web en alternance chez NDA Media à Rouen, je suis passionné par le monde du numérique et constamment en quête de nouveaux défis. Titulaire du titre RNCP de niveau 5 d’Intégrateur-Développeur Web, j'ai acquis des compétences solides en développement et en intégration web, ce qui me permet de créer des expériences utilisateur enrichissantes et performantes.
            À l’heure actuelle, je suis à la recherche d’un poste en CDI qui me permettra de continuer à évoluer dans ce domaine dynamique et stimulant. Je suis enthousiaste à l'idée de mettre mes compétences au service d'une équipe innovante et de contribuer à des projets passionnants.


          </p>
          <button className="download-cv-button" onClick={handleDownloadCV}>
          Télécharger CV

          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;