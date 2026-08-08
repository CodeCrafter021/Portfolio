import { useEffect } from 'react';

export default function Navbar() {

  // Scroll progress bar
  useEffect(() => {
    const pb = document.getElementById('progress-bar');
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      pb.style.width = (window.scrollY / h * 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active nav link highlight
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const onScroll = () => {
      let cur = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 220) cur = s.id;
      });
      navLinks.forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === '#' + cur)
      );
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div id="progress-bar"></div>

      <header>
        <div className="logo">AMITKUMAR<span>.</span></div>
        <nav>
          <a href="#hero"         className="nav-link">Home</a>
          <a href="#about"        className="nav-link">About</a>
          <a href="#skills"       className="nav-link">Skills</a>
          <a href="#projects"     className="nav-link">Projects</a>
          <a href="#certificates" className="nav-link">Certs</a>
          <a href="#resume"       className="nav-link">Resume</a>
          <a href="#contact"      className="nav-link">Contact</a>
        </nav>
      </header>
    </>
  );
}