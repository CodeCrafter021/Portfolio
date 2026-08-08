export default function Certificates() {
  return (
    <section id="certificates">
      <div className="label reveal">Certificates</div>
      <h2 className="s-title reveal d1">Credentials.</h2>
      <div className="certs-grid">
        <div className="cert-card reveal d1">
          <div className="cert-thumb"><span className="cert-icon-big">🗄</span></div>
          <div className="cert-body">
            <div className="cert-title">Certified SQL Writer</div>
            <div className="cert-issuer">LinkedIn Learning</div>
            <div className="cert-desc">SQL for Data Engineering — advanced queries, optimisation, joins, window functions, and pipeline architecture.</div>
          </div>
        </div>
        <div className="cert-card reveal d2">
          <div className="cert-thumb"><span className="cert-icon-big">🐍</span></div>
          <div className="cert-body">
            <div className="cert-title">Certified Python Developer</div>
            <div className="cert-issuer">SkillLevel</div>
            <div className="cert-desc">Comprehensive Python development — fundamentals, OOP, data structures, libraries, and application patterns.</div>
          </div>
        </div>
      </div>
    </section>
  );
}