import { useEffect, useState } from "react";

const subtitleTexts = [
  "Building full-stack web apps with Node.js & React.",
  "Creating REST APIs and backend systems with Node.js.",
  "Crafting clean UIs with React and modern CSS.",
  "Turning ideas into scalable full-stack solutions.",
];

export default function Hero() {
  const [subIdx, setSubIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [typed, setTyped] = useState("");

  // Subtitle rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSubIdx(i => (i + 1) % subtitleTexts.length);
        setFade(true);
      }, 320);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Terminal typing animation
  useEffect(() => {
    const fullText = "open_to_work: Learning";
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setTyped(fullText.slice(0, i));
        if (i >= fullText.length) clearInterval(interval);
      }, 55);
      return () => clearInterval(interval);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero">
      <div className="hero-grid">

        {/* LEFT SIDE */}
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="dot"></span>
            Available for opportunities
          </div>

          <h1 className="hero-title">
            Saini<br />
            <span className="accent">Amitkumar.</span>
          </h1>

          <div className="hero-role">
            <span className="pill">Full-Stack Developer</span>
            <span className="pill">Node.js & Python</span>
          </div>

          <p
            className="hero-subtitle"
            style={{
              opacity: fade ? 1 : 0,
              transform: fade ? "translateY(0)" : "translateY(6px)",
              transition: "opacity .3s, transform .3s",
            }}
          >
            {subtitleTexts[subIdx]}
          </p>

          <p className="hero-desc">
            I build simple and reliable web apps using Node.js, Python, and
            full-stack tools. Clean code, user-friendly interfaces, and fast
            web solutions.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-p">View my work →</a>
            <a href="#contact" className="btn-s">Get in touch</a>
          </div>
        </div>

        /* RIGHT SIDE — Terminal Card */
        <div className="term-card reveal d2" id="term-card">
          <div className="term-bar">
            <span className="term-dot"></span>
            <span className="term-dot"></span>
            <span className="term-dot"></span>
            <span className="term-title">~/amitkumar — profile.sh</span>
          </div>
          <div className="term-body">
            <div><span className="prompt">$</span> whoami</div>
            <div className="val">Saini Amitkumar Shriram</div>
            <div style={{ marginTop: "10px" }}>
              <span className="prompt">$</span> stack --list
            </div>
            <div className="val">Node.js · React · Python · Full-Stack</div>
            <div style={{ marginTop: "10px" }}>
              <span className="prompt">$</span> status
            </div>
            <div className="val">
              {typed}
              <span className="term-cursor"></span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}