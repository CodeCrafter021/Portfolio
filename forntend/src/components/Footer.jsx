const Footer = () => (
  <footer className="site-footer">
    <div className="section-wrap footer-inner">
      <p className="footer-copy">© {new Date().getFullYear()} Saini Amitkumar · Made with curiosity.</p>
      <nav aria-label="Social links" className="footer-socials">
        <a href="https://github.com/CodeCrafter021" rel="noreferrer" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/saini-amitkumar-8a3479380" rel="noreferrer" target="_blank">LinkedIn</a>
        <a href="mailto:sainiamitkumar285@gmail.com">Email</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
