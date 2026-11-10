import { BriefcaseBusiness, Code2, Mail, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const emailAddress = 'sainiamitkumar285@gmail.com';
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_8w64yte';
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_cop9p18';
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '4l1vk3YCWsv8igHN4';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      setStatus('The contact form is not configured yet. Please email me directly.');
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(emailJsServiceId, emailJsTemplateId, formRef.current, {
        publicKey: emailJsPublicKey,
      });
      setStatus('Your message has been sent successfully! I will get back to you soon.');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS failed to send the message:', error);
      const errorText = typeof error?.text === 'string' ? error.text : '';
      setStatus(
        errorText
          ? `Failed to send message: ${errorText}`
          : 'Failed to send message. Please try again or email me directly.',
      );
    } finally {
      setLoading(false);
    }
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
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
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
              <button className="button-primary form-submit" disabled={loading} type="submit">
                {loading ? 'Sending...' : 'Send Mail'} <Send aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;