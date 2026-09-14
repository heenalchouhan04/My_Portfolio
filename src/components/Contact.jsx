import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// Fill these in after completing the EmailJS setup (see README or instructions)
const EMAILJS_SERVICE_ID = 'service_5g2vryl';   // from EmailJS → Email Services
const EMAILJS_TEMPLATE_ID = 'template_4jbusef'; // from EmailJS → Email Templates
const EMAILJS_PUBLIC_KEY = 'nOJXMQ3PalM606EaI';   // from EmailJS → Account → General
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const fireConfetti = () => {
    try {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    } catch (_) { }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'New Message from Portfolio',
          message: formData.message,
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      setSubmitted(true);
      fireConfetti();
    } catch (err) {
      console.error('EmailJS error:', err);
      setLoading(false);
      setError(
        "Couldn't send the message right now. Please email me directly at heenalchauhan06@gmail.com"
      );
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setError('');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        {/* ── Section Header ──────────────────────────────────────────────── */}
        <div className="section-header">
          <span className="section-subtitle">CONTACT DETAILS</span>
        </div>

        <div className="contact-grid">
          {/* ── Contact Info ──────────────────────────────────────────────── */}
          <div>
            <h3 className="contact-info-title">
              Contact <span className="contact-info-title-accent">Information</span>
            </h3>
            <p className="contact-info-desc">
              Feel free to call, email, or connect with me across social platforms.
            </p>

            <div className="contact-cards">
              <a href="tel:8003527592" className="glass-card contact-card">
                <div className="contact-card-icon"><Phone size={22} /></div>
                <div>
                  <div className="contact-card-label">Phone Call / WhatsApp</div>
                  <div className="contact-card-value contact-card-value--phone">+91 8003527592</div>
                </div>
              </a>

              <a href="mailto:heenalchauhan06@gmail.com" className="glass-card contact-card">
                <div className="contact-card-icon"><Mail size={22} /></div>
                <div>
                  <div className="contact-card-label">Email Address</div>
                  <div className="contact-card-value contact-card-value--email">heenalchauhan06@gmail.com</div>
                </div>
              </a>

              <div className="glass-card contact-card">
                <div className="contact-card-icon"><MapPin size={22} /></div>
                <div>
                  <div className="contact-card-label">Location</div>
                  <div className="contact-card-value">Udaipur, RJ, India 📍</div>
                </div>
              </div>
            </div>

            <div>
              <div className="contact-social-label">SOCIAL PROFILES</div>
              <div className="contact-social-links">
                {[
                  { icon: <LinkedinIcon size={20} />, href: 'https://linkedin.com/in/heenal', label: 'LinkedIn' },
                  { icon: <GithubIcon size={20} />, href: 'https://github.com/heenalchouhan04', label: 'GitHub' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="contact-social-link"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Contact Form ──────────────────────────────────────────────── */}
          <div className="glass-card contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <CheckCircle2 size={38} />
                </div>
                <h3 className="contact-success-title">Message Sent! 🎉</h3>
                <p className="contact-success-text">
                  Thank you for reaching out, <strong>{formData.name}</strong>!
                  I'll reply to you at <strong>{formData.email}</strong> soon.
                </p>
                <button onClick={resetForm} className="btn btn-secondary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div>
                  <label htmlFor="contact-name" className="contact-form-label">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="contact-form-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="contact-form-label">Your Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    className="contact-form-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="contact-form-label">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Hiring"
                    className="contact-form-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="contact-form-label">Your Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Heenal, I would like to discuss a UI design / web project..."
                    className="contact-form-textarea"
                  />
                </div>

                {error && (
                  <div className="contact-form-error" role="alert">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary contact-form-submit"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="contact-form-spinner" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
