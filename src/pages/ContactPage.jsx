import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { COMPANY } from '@/data';
import { WEB3FORMS_KEY, CONTACT_EMAIL } from '@/config';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import { isEmail, isPhone, required } from '@/utils/validators';
import styles from './ContactPage.module.css';

const INFO_CARDS = [
  {
    icon: 'ti-map-pin',
    label: 'Our Office',
    value: COMPANY.address,
  },
  {
    icon: 'ti-phone',
    label: 'Call Us',
    value: <><a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a><br /><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></>,
  },
  {
    icon: 'ti-clock',
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 6:00 PM\nSunday: By appointment',
  },
];

const REGIONS = ['Andhra Pradesh', 'Telangana', 'Karnataka', 'Maharashtra'];

const HOURS = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM', open: true },
  { day: 'Saturday',        time: '9:00 AM – 4:00 PM', open: true },
  { day: 'Sunday',          time: 'By Appointment',    open: false },
];

const INITIAL = { name: '', email: '', phone: '', message: '' };

export default function ContactPage() {
  useScrollTop();
  useSEO({
    title: 'Contact Us | Prisci Constructions',
    description: 'Get in touch with Prisci Constructions. Call +91 9000 126099, email info@prisciconstructions.com or send us a message. Serving AP, Telangana, Karnataka and Maharashtra.',
    path: '/contact',
  });

  const [form, setForm]           = useState(INITIAL);
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [sendError, setSendError] = useState('');

  const validate = () => {
    const e = {};
    if (!required(form.name))    e.name    = 'Name is required';
    if (!isEmail(form.email))    e.email   = 'Valid email is required';
    if (form.phone && !isPhone(form.phone)) e.phone = 'Enter a valid phone number';
    if (!required(form.message)) e.message = 'Please write a message';
    return e;
  };

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => { const n = { ...er }; delete n[name]; return n; });
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSending(true);
    setSendError('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          to:         CONTACT_EMAIL,
          subject:    `Website Message from ${form.name}`,
          from_name:  'Prisci Constructions Website',
          replyto:    form.email,
          name:       form.name,
          email:      form.email,
          phone:      form.phone || 'Not provided',
          message:    form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSendError('Submission failed. Please call us at ' + COMPANY.phone);
      }
    } catch {
      setSendError('Network error. Please call us directly at ' + COMPANY.phone);
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      {/* ── Page header ── */}
      <div className={styles.header}>
        <p className={styles.headerTag}>GET IN TOUCH</p>
        <h1 className={styles.headerTitle}>Contact Us</h1>
        <p className={styles.headerSub}>
          Reach out for queries, quotations, or to discuss your project.
          Our team responds within 24 hours.
        </p>
      </div>

      {/* ── Info cards ── */}
      <div className={styles.cards}>
        {INFO_CARDS.map((c) => (
          <div key={c.label} className={styles.infoCard}>
            <div className={styles.infoIcon}><i className={`ti ${c.icon}`} aria-hidden="true" /></div>
            <div className={styles.infoLabel}>{c.label}</div>
            <div className={styles.infoValue}>{c.value}</div>
          </div>
        ))}
      </div>

      {/* ── Body: details + form ── */}
      <div className={styles.body}>

        {/* Left — details */}
        <div className={styles.details}>
          <h2 className={styles.detailsTitle}>Our Reach</h2>
          <p className={styles.detailsSub}>
            Prisci Constructions has been delivering waterproofing, structural rehabilitation
            and architecture solutions since {COMPANY.since} across four states.
          </p>

          <div className={styles.regionBox}>
            <div className={styles.regionLabel}>States We Serve</div>
            <div className={styles.regionTags}>
              {REGIONS.map((r) => <span key={r} className={styles.regionTag}>{r}</span>)}
            </div>
          </div>

          <div className={styles.hoursBox}>
            <div className={styles.hoursTitle}>
              <i className="ti ti-clock" aria-hidden="true" /> Office Hours
            </div>
            {HOURS.map((h) => (
              <div key={h.day} className={styles.hoursRow}>
                <span className={styles.hoursDay}>{h.day}</span>
                <span>
                  <span className={styles.hoursTime}>{h.time}</span>
                  {h.open && <span className={styles.hoursBadge} style={{ marginLeft: 8 }}>OPEN</span>}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — message form */}
        <div className={styles.formWrap}>
          <h2 className={styles.formTitle}>Send a Message</h2>
          <p className={styles.formSub}>Have a question or want a quote? Write to us directly.</p>

          <div className={styles.formBox}>
            {submitted ? (
              <div className={styles.success}>
                <i className="ti ti-circle-check" aria-hidden="true" />
                <div className={styles.successTitle}>Message Sent!</div>
                <div className={styles.successSub}>We'll get back to you within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label htmlFor="cname">Full Name *</label>
                    <input id="cname" name="name" type="text" placeholder="Rajesh Kumar" value={form.name} onChange={handle} className={errors.name ? styles.inputError : ''} />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="cemail">Email Address *</label>
                    <input id="cemail" name="email" type="email" placeholder="yourname@email.com" value={form.email} onChange={handle} className={errors.email ? styles.inputError : ''} />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                </div>
                <div className={styles.group}>
                  <label htmlFor="cphone">Phone Number</label>
                  <input id="cphone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handle} className={errors.phone ? styles.inputError : ''} />
                  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="cmessage">Your Message *</label>
                  <textarea id="cmessage" name="message" rows={4} placeholder="Tell us about your project or query..." value={form.message} onChange={handle} className={errors.message ? styles.inputError : ''} />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>

                {sendError && <div className={styles.sendError}>{sendError}</div>}

                <button type="submit" className={styles.submitBtn} disabled={sending}>
                  <i className={`ti ${sending ? 'ti-loader' : 'ti-send'}`} aria-hidden="true" />
                  {sending ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
                <div className={styles.note}><i className="ti ti-lock" aria-hidden="true" /> Your details are secure and never shared.</div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Inspection CTA strip ── */}
      <div className={styles.inspectionStrip}>
        <div className={styles.stripText}>
          <div className={styles.stripTitle}>Need a Free Site Inspection?</div>
          <div className={styles.stripSub}>Our certified engineers visit your property and provide a full written assessment — at no cost.</div>
        </div>
        <Link to="/#inspection" className={styles.stripBtn}>
          <i className="ti ti-search" aria-hidden="true" /> BOOK FREE INSPECTION
        </Link>
      </div>
    </Layout>
  );
}
