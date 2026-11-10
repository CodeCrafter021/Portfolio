import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Journey', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Amitkumar — home">
        <span className="brand-mark">AS</span>
        <span>Amitkumar Saini</span>
      </a>

      <nav className={`nav-pill${isOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        {links.map(({ label, href }) => (
          <a
            className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
            href={href}
            key={href}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          aria-pressed={darkMode}
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          type="button"
        >
          <span className="theme-thumb" />
          <span className="theme-icon"><Sun aria-hidden="true" /></span>
          <span className="theme-icon"><Moon aria-hidden="true" /></span>
        </button>
        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
