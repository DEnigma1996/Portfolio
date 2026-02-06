import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate Full-Stack Java Developer with expertise in building robust,
              scalable web applications that solve real-world problems. With a strong foundation
              in both backend and frontend technologies, I create seamless user experiences
              backed by solid architectural patterns.
            </p>
            <p>
              My journey in software development has led me through various domains, from
              enterprise applications to modern web solutions. I specialize in Java Spring Boot
              ecosystems while maintaining proficiency in modern frontend frameworks and cloud
              technologies.
            </p>
            <div className="about-values">
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>Constantly learning and applying cutting-edge technologies to deliver modern solutions</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Quality</h3>
                <p>Writing clean, maintainable code with comprehensive testing and documentation</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h3>Performance</h3>
                <p>Optimizing applications for speed, scalability, and efficient resource utilization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
