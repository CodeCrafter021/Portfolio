const journey = [
  {
    date: '2025 — Present',
    title: 'Full-Stack Developer (Self-Directed)',
    description: 'Building MERN stack projects, REST APIs with Node.js and Express, and Python scripts. Focused on internship-ready skills.',
  },
  {
    date: '2024',
    title: 'Python Certified Developer',
    description: 'SkillLevel — Python fundamentals, object-oriented programming, data structures, and application patterns.',
  },
  {
    date: '2024',
    title: 'SQL for Data Engineering',
    description: 'LinkedIn Learning — advanced SQL, query optimisation, joins, window functions, and data pipeline techniques.',
  },
];

const Experience = () => (
  <section className="content-section" id="experience">
    <div className="section-wrap">
      <div className="section-heading reveal">
        <span className="section-kicker">The journey so far</span>
        <h2 className="section-title">Learning by doing.</h2>
      </div>
      <div className="journey">
        {journey.map(({ date, description, title }, index) => (
          <article className={`journey-card reveal${index === 0 ? ' reveal-delay-1' : ''}`} key={title}>
            <span className="journey-date">{date}</span>
            <div>
              <h3 className="journey-title">{title}</h3>
              <p className="journey-description">{description}</p>
            </div>
          </article>
        ))}
        <article className="journey-card reveal">
          <span className="journey-date">What&apos;s next</span>
          <div>
            <h3 className="journey-title">More milestones incoming</h3>
            <p className="journey-description">
              Building towards my first professional role and open-source contributions.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Experience;
