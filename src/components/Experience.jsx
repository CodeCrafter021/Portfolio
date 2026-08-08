export default function Experience() {
  return (
    <section id="experience">
      <div className="label reveal">Experience</div>
      <h2 className="s-title reveal d1">My journey.</h2>
      <div className="timeline reveal d2">
        {[
          { date: "2025 — Present", role: "Full-Stack Developer (Self-Directed)", company: "Building MERN stack projects, REST APIs with Node.js/Express, and Python scripts. Focused on internship-ready skills." },
          { date: "2024", role: "Python Certified Developer", company: "SkillLevel — Comprehensive Python course covering fundamentals, OOP, data structures, and application patterns." },
          { date: "2024", role: "SQL for Data Engineering", company: "LinkedIn Learning — Advanced SQL, query optimisation, joins, window functions, and data pipeline techniques." },
        ].map((item, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-dot"></div>
            <div className="tl-date">{item.date}</div>
            <div className="tl-role">{item.role}</div>
            <div className="tl-company">{item.company}</div>
          </div>
        ))}
        <div className="tl-item">
          <div className="tl-dot" style={{ border: "2px dashed rgba(255,255,255,.2)", background: "transparent", boxShadow: "none", animation: "none" }}></div>
          <div className="tl-future">More milestones incoming — currently building towards a first professional role and open-source contributions.</div>
        </div>
      </div>
    </section>
  );
}