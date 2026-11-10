import { Code2, Database, GitBranch, Layers3, Server, Terminal } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    name: 'React & Frontend',
    description: 'Responsive, interactive interfaces built with React, hooks, and modern CSS.',
    tags: ['React', 'JavaScript', 'CSS3', 'HTML5'],
  },
  {
    icon: Server,
    name: 'Node.js & Express',
    description: 'REST APIs, middleware, authentication, and reliable server-side logic.',
    tags: ['Node.js', 'Express', 'REST API', 'JWT'],
  },
  {
    icon: Terminal,
    name: 'Python',
    description: 'Scripting, automation, data handling, and useful backend tools.',
    tags: ['Python', 'Automation', 'Flask', 'Scripting'],
  },
  {
    icon: Database,
    name: 'Databases',
    description: 'Relational and NoSQL data models for full-stack applications.',
    tags: ['MongoDB', 'SQL', 'MySQL', 'Mongoose'],
  },
  {
    icon: GitBranch,
    name: 'Git & GitHub',
    description: 'Version control, branching strategies, and collaborative workflows.',
    tags: ['Git', 'GitHub', 'CI/CD'],
  },
  {
    icon: Layers3,
    name: 'Full-Stack Projects',
    description: 'End-to-end web apps — from data modeling to a polished interface.',
    tags: ['MERN Stack', 'REST', 'Deployment'],
  },
];

const Skills = () => (
  <section className="content-section" id="skills">
    <div className="section-wrap">
      <div className="section-heading reveal">
        <span className="section-kicker">My toolkit</span>
        <h2 className="section-title">What I build with.</h2>
        <p className="section-description">
          A growing set of tools for turning ideas into useful, end-to-end products.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map(({ description, icon: Icon, name, tags }, index) => (
          <article className={`skill-card reveal${index % 3 ? '' : ' reveal-delay-1'}`} key={name}>
            <span className="skill-icon"><Icon aria-hidden="true" /></span>
            <h3 className="skill-name">{name}</h3>
            <p className="skill-description">{description}</p>
            <div className="tag-list">
              {tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
