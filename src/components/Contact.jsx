import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_KEY;

export default function Contact(){
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", subject: "", msg: "" });
    const [status, setStatus] = useState(null);
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        if (!form.name || !form.email || !form.subject || !form.msg)
        {
            setStatus({ type: "error", text: "Please fill in all fields." });
            return;
        }
        setSending(true);
        setStatus(null);
        try
        {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
            setStatus({ type: "success", text: `Thanks ${form.name}! Message sent. I'll reply soon.` });
            setForm({ name: "", email: "", subject: "", msg: "" });
        } catch (err) {
            setStatus({ type: "error", text: "Something went wrong. Please reach out on LinkedIn." });
        } finally {
            setSending(false);
        }

    };

  return (
    <section id="contact">
      <div className="label reveal">Contact</div>
      <h2 className="s-title reveal d1">Let's connect.</h2>
      <div className="contact-grid">
        <div className="contact-info reveal d2">
          <h3>Got a project in mind?</h3>
          <p>I'm happy to work on web and backend projects using Node.js and Python. Send a message so we can talk about your idea.</p>
          <div className="c-links">
            <a href="https://github.com/CodeCrafter021" target="_blank" rel="noreferrer" className="c-link">
              <div className="c-link-ico">🐙</div>
              <div><div className="c-link-val">CodeCrafter021</div><div className="c-link-label">GitHub</div></div>
            </a>
            <a href="https://linkedin.com/in/saini-amitkumar-8a3479380" target="_blank" rel="noreferrer" className="c-link">
              <div className="c-link-ico">💼</div>
              <div><div className="c-link-val">Saini Amitkumar</div><div className="c-link-label">LinkedIn</div></div>
            </a>
          </div>
        </div>
        <div className="reveal d3">
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="f-field">
              <label>Your Name</label>
              <input name="from_name" type="text" placeholder="John Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            <div className="f-field">
              <label>Email Address</label>
              <input name="from_email" type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            </div>
            <div className="f-field">
              <label>Subject</label>
              <input name="subject" type="text" placeholder="Project Collaboration" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
            </div>
            <div className="f-field">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Tell me about your project…" value={form.msg} onChange={e => setForm({...form, msg: e.target.value})} />
            </div>
            {status && (
              <div className={`form-status ${status.type}`} style={{ display: "block" }}>{status.text}</div>
            )}
            <button type="submit" className="submit-btn" disabled={sending}>
              {sending ? "Sending…" : "Send message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}