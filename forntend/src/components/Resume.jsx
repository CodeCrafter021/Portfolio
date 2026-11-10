import { ArrowRight, FileText } from 'lucide-react';

const Resume = () => (
  <section className="content-section" id="resume">
    <div className="section-wrap">
      <div className="section-heading reveal">
        <span className="section-kicker">The short version</span>
        <h2 className="section-title">A little more about my work.</h2>
      </div>
      <div className="resume-wrap">
        <div className="resume-card reveal reveal-delay-1">
          <span className="resume-icon"><FileText aria-hidden="true" /></span>
          <h3 className="resume-title">Saini Amitkumar Shriram</h3>
          <p className="resume-description">
            Full-Stack Developer · Node.js &amp; React · Python<br />
            BCA student, actively seeking internship opportunities.
          </p>
          <div className="tag-list">
            {['React', 'Node.js', 'Python', 'JavaScript', 'MongoDB', 'SQL', 'Git', 'REST APIs'].map((skill) => (
              <span className="tag" key={skill}>{skill}</span>
            ))}
          </div>
          <a className="button-primary" href="#contact">
            Request my resume <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
