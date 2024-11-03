  import React from 'react';
  import './PersonalSkills.css';

  const PersonalSkills = () => {
    const skillCategories = [
      {
        category: 'Langages de programmation',
        skills: [
          { name: 'JavaScript', logo: '/images/JavaScript-logo.png' },
          { name: 'PHP', logo: '/images/PHP-logo.png' },
          { name: 'Java', logo: '/images/java-logo.png' },
          { name: 'HTML', logo: '/images/HTML5-logo.png' },
          { name: '', logo: '/images/css-logo.png' },
        ]
      },
      {
        category: 'Frameworks & Bibliothèques',
        skills: [
          { name: 'React', logo: '/images/react-logo.png' },
          { name: 'Symfony', logo: '/images/symfony-logo.png' },
          { name: 'Laravel', logo: '/images/laravel-logo.png' },
          { name: 'Node.js', logo: '/images/nodejs-logo.png' },
        ]
      },
  
    ];

    return (
      <section className="section personal-skills">
        <div className="container skills-content">
          <div className="skills-text">
            <h2 className="section-title">Compétences personnelles</h2>
            <p className="skills-description">
              En tant que développeur web polyvalent, j'ai acquis une solide expérience dans divers langages de programmation, 
              frameworks et technologies. Voici un aperçu de mes compétences techniques :
            </p>
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <img src={skill.logo}  className="skill-logo" />
                      <span className="skill-name"></span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default PersonalSkills;