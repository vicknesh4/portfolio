import React from 'react';
import './RecentProjects.css';

const RecentProjects = () => {
  const projects = [
    {
      title: "Chiffrement par décalage",
      image: "/images/ChiffrementCesar.png",
      url: "https://github.com/vicknesh4/portfolio2024/tree/main/W-RAT-010-PAR-3-2-enigma-gajanraj.mohanaraj",
    },
    {
      title: "Création d'site web en marque blanche",
      image: "/images/marque_blanche.png",
      url: "https://github.com/vicknesh4/portfolio2024/tree/main/W-WEB-842-PAR-4-2-java-gajanraj.mohanaraj",
    },
    {
      title: "Reprodution du réseau social Snapchat",
      image: "/images/snapchat_logo.png",
      url: "https://github.com/vicknesh4/portfolio2024/tree/main/W-JSC-502-PAR-2-2-snapchat-wilfried.bourguignon/my_snapchat",
    },
    {
      title: "Reproduction de la fonction var_dump en php",
      image: "/images/var_dump.jpg",
      url: "https://github.com/vicknesh4/portfolio2024/tree/main/W-RAT-010-PAR-3-2-vardump-gajanraj.mohanaraj",
    },
    {
      title: "Création d'un jeu vidéo",
      image: "/images/gaming.png",
      url: "https://github.com/vicknesh4/portfolio2024/tree/main/W-WEB-280-PAR-4-2-gaming-gajanraj.mohanaraj/html5gaming",
    },
    {
      title: "Création d'une plateforme de prise de rendez-vous d'auto-école",
      image: "/images/auto-ecole.png",
      url: "https://github.com/vicknesh4/portfolio2024/tree/main/marlone",
    },
  ];

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section recent-projects">
      <div className="container">
        <h2 className="section-title">Recent Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card" 
              onClick={() => handleProjectClick(project.url)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleProjectClick(project.url);
                }
              }}
            >
              <div className='image-container'>
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;