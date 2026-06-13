import { useState } from "react";
import { profile } from "../data/content.js";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!ACCESS_KEY || ACCESS_KEY === "your-access-key-here") {
      setStatus({
        type: "err",
        msg: "Form not configured — add VITE_WEB3FORMS_KEY to your .env file.",
      });
      return;
    }

    setSending(true);
    setStatus({ type: "", msg: "" });

    const form = e.target;
    const payload = {
      access_key: ACCESS_KEY,
      subject: "New message from your portfolio",
      from_name: "Portfolio Contact Form",
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: "ok", msg: "Thanks! Your message has been sent." });
        form.reset();
      } else {
        setStatus({ type: "err", msg: data.message || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "err", msg: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact reveal">
          <div>
            <div className="eyebrow">Contact</div>
            <h2>Let's build something intelligent.</h2>
            <p className="sub">
              Have a role, a project, or an idea around AI and LLMs? Drop me a
              message — I read everything.
            </p>
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <span className="k">Email</span> {profile.email}
            </a>
            <a className="contact-link" href={`tel:${profile.phoneHref}`}>
              <span className="k">Phone</span> {profile.phone}
            </a>
            <a className="contact-link" href={profile.linkedin} target="_blank" rel="noopener">
              <span className="k">LinkedIn</span> {profile.linkedinLabel}
            </a>
            <a className="contact-link" href={profile.github} target="_blank" rel="noopener">
              <span className="k">GitHub</span> {profile.githubLabel}
            </a>
          </div>

          <form onSubmit={handleSubmit}>
            {/* honeypot — bots fill this, humans don't */}
            <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="you@email.com" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me what you have in mind…" required />
            </div>
            <button type="submit" disabled={sending}>
              {sending ? "Sending…" : "Send message"}
            </button>
            <div className={`form-note ${status.type}`}>{status.msg}</div>
          </form>
        </div>
      </div>
    </section>
  );
}
