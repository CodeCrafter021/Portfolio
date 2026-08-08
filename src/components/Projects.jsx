const projects = [
  { icon: "🌐", badge: "live", badgeText: "Live", title: "Interactive Portfolio", desc: "A live portfolio built with React and Vite to show my work as a full-stack developer.", link: "https://github.com/CodeCrafter021" },
  { icon: "⚡", badge: "wip", badgeText: "WIP", title: "Web App Project", desc: "A work-in-progress web app using Node.js backend and a clean React user interface.", link: "https://github.com/CodeCrafter021" },
  { icon: "🚀", badge: "soon", badgeText: "Soon", title: "More Coming Soon", desc: "New projects in progress. Follow on GitHub for updates as they launch.", link: "https://github.com/CodeCrafter021" },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="label reveal">Projects</div>
      <h2 className="s-title reveal d1">Things I've built.</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className={`project-card reveal d${i + 1}`} key={p.title}>
            <div className="proj-thumb"><span>{p.icon}</span></div>
            <span className={`proj-badge ${p.badge}`}>{p.badgeText}</span>
            <div className="proj-body">
              <div className="proj-title">{p.title}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-links">
                <a href={p.link} target="_blank" rel="noreferrer" className="proj-link">GitHub →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}