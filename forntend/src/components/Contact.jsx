import { BriefcaseBusiness, Code2, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const emailAddress = 'sainiamitkumar285@gmail.com';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`,
    )}`;

    window.location.href = mailto;
    setStatus('Your email app should open with your message ready to send.');
  };

  return (
    <section className="content-section contact-section" id="contact">
      <div className="section-wrap">
        <div className="section-heading reveal">
          <span className="section-kicker">Have something in mind?</span>
          <h2 className="section-title">Let&apos;s make it happen.</h2>
          <p className="section-description">
            Have a project, opportunity, or just want to say hello? I&apos;d love to hear from you.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-card reveal reveal-delay-1">
            <h3>Find me around the web</h3>
            <p>
              I&apos;m happy to collaborate on web and backend projects with Node.js
              and Python. Reach out and tell me about your idea.
            </p>
            <div className="contact-links">
              <a className="contact-link" href={`mailto:${emailAddress}`}>
                <span className="contact-link-icon"><Mail aria-hidden="true" /></span>
                <span className="contact-link-text">
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">{emailAddress}</span>
                </span>
              </a>
              <a
                className="contact-link"
                href="https://github.com/CodeCrafter021"
                rel="noreferrer"
                target="_blank"
              >
                <span className="contact-link-icon"><Code2 aria-hidden="true" /></span>
                <span className="contact-link-text">
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-value">CodeCrafter021</span>
                </span>
              </a>
              <a
                className="contact-link"
                href="https://linkedin.com/in/saini-amitkumar-8a3479380"
                rel="noreferrer"
                target="_blank"
              >
                <span className="contact-link-icon"><BriefcaseBusiness aria-hidden="true" /></span>
                <span className="contact-link-text">
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">Saini Amitkumar</span>
                </span>
              </a>
            </div>
          </div>

          <div className="contact-card reveal reveal-delay-2">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input autoComplete="name" id="contact-name" name="name" placeholder="Jane Doe" required />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    autoComplete="email"
                    id="contact-email"
                    name="email"
                    placeholder="jane@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" name="subject" placeholder="Project collaboration" required />
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me a little about what you have in mind..."
                  required
                  rows="4"
                />
              </div>
              {status && <p aria-live="polite" className="form-status" role="status">{status}</p>}
              <button className="button-primary form-submit" type="submit">
                Send Mail <Send aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
