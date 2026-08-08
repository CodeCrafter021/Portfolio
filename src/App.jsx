import { useEffect } from 'react';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {

  // Scroll reveal + skill bars + counters
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
          });
          e.target.querySelectorAll('[data-count]').forEach(el => {
            const target = parseInt(el.dataset.count);
            let n = 0;
            const step = () => {
              n++;
              el.textContent = n + (n >= target ? '+' : '');
              if (n < target) setTimeout(step, 55);
            };
            step();
          });
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="bg-mesh"></div>
      <div className="grid-field"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}