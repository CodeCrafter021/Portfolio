const technologies = [
  'React',
  'Node.js',
  'Python',
  'REST APIs',
  'MongoDB',
  'SQL',
  'JavaScript',
  'Git',
];

const About = () => (
  <section className="content-section" id="about">
    <div className="section-wrap">
      <div className="section-heading reveal">
        <span className="section-kicker">A little about me</span>
        <h2 className="section-title">Curious mind.<br />Practical builder.</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy reveal reveal-delay-1">
          <p>
            Hello! I&apos;m a <strong>full-stack developer</strong> focused on building
            modern web applications with <strong>Node.js, React, and Python.</strong>
          </p>
          <p>
            I enjoy working across the stack — from REST APIs and databases to
            responsive interfaces. I&apos;m currently a BCA student, building projects
            and looking for internship opportunities in full-stack development.
          </p>
          <div aria-label="Technologies I work with" className="tag-list">
            {technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
          </div>
        </div>
        <div aria-label="A few things about me" className="about-stats reveal reveal-delay-2">
          <div className="stat-card">
            <span className="stat-number">08</span>
            <span className="stat-label">Tools in my toolkit</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">03</span>
            <span className="stat-label">Certificates earned</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">∞</span>
            <span className="stat-label">Things left to learn</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Commitment to craft</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
