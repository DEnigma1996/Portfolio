import './Experience.css';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: 'Full-Stack Java Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      responsibilities: [
        'Architected and developed microservices-based applications using Spring Boot and RESTful APIs',
        'Led frontend development with React and TypeScript, improving user engagement by 40%',
        'Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews to maintain high code quality',
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
      title: 'Software Engineer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      responsibilities: [
        'Developed and maintained enterprise web applications using Java EE and Angular',
        'Optimized database queries and implemented caching strategies, improving performance by 35%',
        'Collaborated with cross-functional teams to gather requirements and deliver solutions',
        'Created comprehensive technical documentation and API specifications',
      ],
      technologies: ['Java', 'Hibernate', 'Angular', 'MySQL', 'Git', 'Maven'],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      responsibilities: [
        'Built responsive web interfaces using HTML, CSS, JavaScript, and modern frameworks',
        'Assisted in backend development with Java Spring framework',
        'Participated in agile development processes and daily stand-ups',
        'Resolved bugs and implemented feature enhancements based on user feedback',
      ],
      technologies: ['Java', 'Spring', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
                <div className="experience-tech">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
