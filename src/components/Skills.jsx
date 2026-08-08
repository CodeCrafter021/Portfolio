const skills = [
  {
    icon: "⚛️",
    name: "React & Frontend",
    desc: "Building responsive, interactive UIs with React, hooks, and modern CSS.",
    tags: ["React", "JavaScript", "CSS3", "HTML5"]
  },
  {
    icon: "⚡",
    name: "Node.js & Express",
    desc: "REST APIs, middleware, authentication, and server-side logic.",
    tags: ["Node.js", "Express", "REST API", "JWT"]
  },
  {
    icon: "🐍",
    name: "Python",
    desc: "Scripting, automation, data handling, and backend utilities.",
    tags: ["Python", "Automation", "Flask", "Scripting"]
  },
  {
    icon: "🗄️",
    name: "Databases",
    desc: "Relational and NoSQL databases for full-stack applications.",
    tags: ["MongoDB", "SQL", "MySQL", "Mongoose"]
  },
  {
    icon: "🐙",
    name: "Git & GitHub",
    desc: "Version control, branching strategies, and collaborative workflows.",
    tags: ["Git", "GitHub", "CI/CD"]
  },
  {
    icon: "🌐",
    name: "Full-Stack Projects",
    desc: "End-to-end web apps — from database design to deployed UI.",
    tags: ["MERN Stack", "REST", "Deployment"]
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="label reveal">Skills</div>
      <h2 className="s-title reveal d1">What I build with.</h2>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div className={`skill-card reveal d${(i % 3) + 1}`} key={s.name}>
            <span className="skill-icon">{s.icon}</span>
            <div className="skill-name">{s.name}</div>
            <div className="skill-desc">{s.desc}</div>
            <div className="skill-tags">
              {s.tags.map(t => <span className="stag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}