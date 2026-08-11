import { useState } from "react";

const certs = [
  {
    id: 1,
    icon: "🗄️",
    title: "Certified SQL Writer",
    issuer: "LinkedIn Learning",
    year: "2026",
    desc: "SQL for Data Engineering — advanced queries, optimisation, joins, window functions, and pipeline architecture.",
    image: "C:\Users\aksai\Desktop\Pro\Web Deb\Project\Portfolio\public\cert-sql.jpg",
  },
  {
    id: 2,
    icon: "🐍",
    title: "Certified Python Developer",
    issuer: "SkillLevel",
    year: "2026",
    desc: "Comprehensive Python development — fundamentals, OOP, data structures, libraries, and application patterns.",
    image: "C:\Users\aksai\Desktop\Pro\Web Deb\Project\Portfolio\public\cert-PythonOrAi.jpg",
  },
  {
    id: 3,
    icon: "📊",
    title: "certified relation databse",
    issuer: "LinkedIn Learning",
    year: "2026",
    desc: "Relational Database Design – schema creation, normalization, ER modeling, ACID properties, and data integrity.",
    image: "C:\Users\aksai\Desktop\Pro\Web Deb\Project\Portfolio\public\cert-relationdatabase.jpg",
  }
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates">
      <div className="label reveal">Certificates</div>
      <h2 className="s-title reveal d1">Credentials.</h2>

      <div className="certs-grid">
        {certs.map((c, i) => (
          <div
            className={`cert-card reveal d${i + 1}`}
            key={c.id}
            onClick={() => setSelected(c)}
            style={{ cursor: "pointer" }}
          >
            <div className="cert-thumb">
              <img
                src={c.image}
                alt={c.title}
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", position: "absolute",
                  inset: 0, opacity: 0.6,
                  borderRadius: "0"
                }}
                onError={e => e.target.style.display = "none"}
              />
              <span className="cert-icon-big" style={{ position: "relative", zIndex: 1 }}>
                {c.icon}
              </span>
            </div>
            <div className="cert-body">
              <div className="cert-title">{c.title}</div>
              <div className="cert-issuer">{c.issuer} · {c.year}</div>
              <div className="cert-desc">{c.desc}</div>
              <div style={{
                marginTop: "12px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: ".65rem",
                color: "var(--accent)",
                letterSpacing: ".05em"
              }}>
                Click to view →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
            animation: "fadeInLB .25s ease",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border2)",
              borderRadius: "16px",
              maxWidth: "860px",
              width: "100%",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,.6)",
              animation: "slideUpLB .3s cubic-bezier(.2,.8,.2,1)",
            }}
          >
            {/* Header */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 22px",
              borderBottom: "1px solid var(--border)",
              background: "var(--surface2)"
            }}>
              <div>
                <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: "1rem" }}>
                  {selected.title}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".65rem", color: "var(--accent)", marginTop: "3px" }}>
                  {selected.issuer} · {selected.year}
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: "var(--card2)", border: "1px solid var(--border2)",
                  color: "var(--text)", borderRadius: "8px",
                  padding: "8px 14px", cursor: "pointer",
                  fontFamily: "'JetBrains Mono',monospace", fontSize: ".75rem"
                }}
              >
                ✕ Close
              </button>
            </div>

            {/* Certificate Image */}
            <div style={{ padding: "20px", background: "var(--bg2)" }}>
              <img
                src={selected.image}
                alt={selected.title}
                style={{
                  width: "100%", borderRadius: "10px",
                  display: "block",
                  boxShadow: "0 8px 32px rgba(0,0,0,.4)"
                }}
                onError={e => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div style={{
                display: "none", alignItems: "center", justifyContent: "center",
                height: "200px", color: "var(--muted)",
                fontFamily: "'JetBrains Mono',monospace", fontSize: ".8rem"
              }}>
                Image not found — add certificate to public folder
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox animations */}
      <style>{`
        @keyframes fadeInLB {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUpLB {
          from { opacity: 0; transform: translateY(30px) scale(.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}