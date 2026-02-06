import './Skills.css';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Backend',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Hibernate/JPA', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'Microservices', level: 75 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 75 },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Maven/Gradle', level: 85 },
        { name: 'CI/CD', level: 70 },
        { name: 'Linux', level: 80 },
        { name: 'AWS', level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
