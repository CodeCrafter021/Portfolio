export default function Resume() {
  return (
    <section id="resume">
      <div className="label reveal">Resume</div>
      <h2 className="s-title reveal d1">Download CV.</h2>
      <div className="resume-wrap">
        <div className="resume-card reveal d2">
          <span className="resume-icon">📄</span>
          <h3>Saini Amitkumar Shriram</h3>
          <p>Full-Stack Developer · Node.js & React · Python<br />
            BCA Student · Actively seeking internship opportunities.
          </p>
          <div className="resume-badges">
            {["React", "Node.js", "Python", "JavaScript", "MongoDB", "SQL", "Git", "REST APIs"].map(b => (
              <span className="resume-badge" key={b}>{b}</span>
            ))}
          </div>
          <a href="#contact" className="btn-p" style={{ display: "inline-flex", margin: "0 auto" }}>Request resume →</a>
        </div>
      </div>
    </section>
  );
}