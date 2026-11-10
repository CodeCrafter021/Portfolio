import { ArrowDown, ArrowRight, ArrowUpRight, Braces, BriefcaseBusiness, Code2, Sparkles } from 'lucide-react';

const Hero = () => (
  <section className="hero-section" id="home">
    <div aria-hidden="true" className="hero-glow" />
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="availability">
          <span className="availability-dot" />
          Available for opportunities
        </div>
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1 className="hero-title">
          Saini
          <span>Amitkumar.</span>
        </h1>
        <div className="hero-role">
          <span className="role-chip">Full-Stack Developer</span>
          <span className="role-chip">Node.js &amp; Python</span>
        </div>
        <p className="hero-intro">
          I build simple, reliable web experiences with thoughtful interfaces and
          dependable backends. Curious by nature, always learning by making.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#projects">
            Explore my work <ArrowRight aria-hidden="true" />
          </a>
          <a className="button-secondary" href="#contact">
            Let&apos;s talk <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/CodeCrafter021" rel="noreferrer" target="_blank">
            <Code2 aria-hidden="true" /> GitHub
          </a>
          <a href="https://linkedin.com/in/saini-amitkumar-8a3479380" rel="noreferrer" target="_blank">
            <BriefcaseBusiness aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-art">
        <span aria-hidden="true" className="art-orbit" />
        <div className="art-frame">
          <img
            alt="Illustration of a developer working at a laptop in a creative workspace"
            fetchPriority="high"
            src="/programmer.jpeg"
          />
        </div>
        <div className="floating-note note-code">
          <Braces aria-hidden="true" />
          <span>Building with purpose</span>
        </div>
        <div className="floating-note note-stack">
          <Sparkles aria-hidden="true" />
          <span>Ideas into interfaces</span>
        </div>
      </div>
    </div>
    <a aria-label="Scroll to about section" className="hero-scroll" href="#about">
      <span>Scroll to explore</span>
      <span aria-hidden="true" className="scroll-line" />
      <ArrowDown aria-hidden="true" className="scroll-arrow" />
    </a>
  </section>
);

export default Hero;
