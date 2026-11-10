import { ArrowUpRight, HeartPulse, ShieldCheck, WalletCards } from 'lucide-react';

const projects = [
  {
    icon: WalletCards,
    badge: 'Money management',
    title: 'PaisaTrack',
    description: 'A money-tracking web application for keeping your personal finances and everyday transactions organized.',
    link: 'https://paisa-track-sigma.vercel.app/',
    background: '#e8e0ff',
  },
  {
    icon: ShieldCheck,
    badge: 'Student safety',
    title: 'InternShield',
    description: 'A student-first platform for checking the credibility of companies and internship offers, with evidence-based risk insights.',
    link: 'https://intern-shield-five.vercel.app/',
    background: '#d8efe8',
  },
  {
    icon: HeartPulse,
    badge: 'Health & safety',
    title: 'MedBuddy',
    description: 'A health-safety companion with medicine checks, offline first-aid guidance, and community medicine alerts.',
    link: 'https://meddbuddy.github.io/MedBuddy/',
    background: '#f5e4ce',
  },
];

const Projects = () => (
  <section className="content-section" id="projects">
    <div className="section-wrap">
      <div className="section-heading reveal">
        <span className="section-kicker">Selected work</span>
        <h2 className="section-title">Things I&apos;ve built.</h2>
        <p className="section-description">
          A few live projects I&apos;ve built to solve practical problems in personal finance, student safety, and healthcare.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map(({ background, badge, description, icon: Icon, link, title }, index) => (
          <article className={`project-card reveal${index === 1 ? ' reveal-delay-1' : ''}`} key={title}>
            <div className="project-art" style={{ '--project-bg': background }}>
              <span className="project-art-icon"><Icon aria-hidden="true" /></span>
              <span className="project-badge">{badge}</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">{title}</h3>
              <p className="project-description">{description}</p>
              <a
                className="text-link"
                href={link}
                rel="noreferrer"
                target="_blank"
              >
                Visit live project <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
