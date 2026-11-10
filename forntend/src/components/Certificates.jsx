import { ArrowUpRight } from 'lucide-react';

const certificates = [
  {
    title: 'Certified SQL Writer',
    issuer: 'LinkedIn Learning · 2026',
    description: 'SQL for Data Engineering — advanced queries, optimization, joins, and window functions.',
    image: '/certificates/cert-sql.jpg',
  },
  {
    title: 'Certified Python Developer',
    issuer: 'SkillLevel · 2026',
    description: 'Python fundamentals, OOP, data structures, libraries, and application patterns.',
    image: '/certificates/cert-python-ai.jpg',
  },
  {
    title: 'Certified Relational Database',
    issuer: 'LinkedIn Learning · 2026',
    description: 'Schema design, normalization, ER modeling, ACID properties, and data integrity.',
    image: '/certificates/cert-relational-database.jpg',
  },
];

const Certificates = () => (
  <section className="content-section" id="certificates">
    <div className="section-wrap">
      <div className="section-heading reveal">
        <span className="section-kicker">Learning &amp; growth</span>
        <h2 className="section-title">Credentials.</h2>
      </div>
      <div className="certificates-grid">
        {certificates.map(({ description, image, issuer, title }, index) => (
          <article className={`certificate-card reveal${index === 1 ? ' reveal-delay-1' : ''}`} key={title}>
            <a href={image} rel="noreferrer" target="_blank" aria-label={`View ${title} certificate`}>
              <img alt={`${title} certificate`} className="certificate-image" loading="lazy" src={image} />
            </a>
            <div className="certificate-content">
              <span className="certificate-issuer">{issuer}</span>
              <h3 className="certificate-title">{title}</h3>
              <p className="certificate-description">{description}</p>
              <a className="text-link" href={image} rel="noreferrer" target="_blank">
                View certificate <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
