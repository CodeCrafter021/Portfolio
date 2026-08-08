export default function About() {
  return (
    <section id="about">
      <div className="label reveal">About</div>
      <h2 className="s-title reveal d1">Who I am.</h2>
      <div className="about-grid">
        <div className="about-text reveal d2">
          <p>Hello! I'm a <strong>full-stack developer</strong> focused on building modern web applications with <strong>Node.js, React, and Python</strong>.</p>
          <p>I work on both frontend and backend — REST APIs, databases, responsive UIs, and everything in between.</p>
          <p>Currently a BCA student actively building projects and looking for internship opportunities in full-stack development.</p>
          <div className="about-tags">
            <span className="about-tag">React</span>
            <span className="about-tag">Node.js</span>
            <span className="about-tag">Python</span>
            <span className="about-tag">REST APIs</span>
            <span className="about-tag">MongoDB</span>
            <span className="about-tag">SQL</span>
          </div>
          <div className="skill-bar-wrap" id="skill-bars">
            {[
              { label: "JavaScript / React", width: 80 },
              { label: "Node.js / Express", width: 75 },
              { label: "Python", width: 72 },
              { label: "HTML & CSS", width: 88 },
            ].map(s => (
              <div className="skill-bar-item" key={s.label}>
                <div className="skill-bar-label">
                  <span>{s.label}</span><span>{s.width}%</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" data-width={s.width} style={{ width: 0 }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-stats reveal d3">
          <div className="stat-card"><div className="stat-num" data-count="5">0</div><div className="stat-label">Technologies</div></div>
          <div className="stat-card"><div className="stat-num" data-count="2">0</div><div className="stat-label">Certifications</div></div>
          <div className="stat-card"><div className="stat-num">∞</div><div className="stat-label">Curiosity</div></div>
          <div className="stat-card"><div className="stat-num">100%</div><div className="stat-label">Commitment</div></div>
        </div>
      </div>
    </section>
  );
}