import { useState } from 'react';
import { COMPANY, SERVICES } from '@/data';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { isEmail, isPhone, required } from '@/utils/validators';
import styles from './InspectionForm.module.css';

const BENEFITS = [
  { icon: 'ti-check',            title: 'No-cost site visit',        sub: 'Our engineer comes to you, free' },
  { icon: 'ti-file-description', title: 'Detailed assessment report', sub: 'Written diagnosis of every issue' },
  { icon: 'ti-clock',            title: 'Response within 24 hours',  sub: 'We get back to you fast, always' },
  { icon: 'ti-shield-check',     title: 'Certified engineers',        sub: '25+ years of field expertise' },
];

const INITIAL = { name: '', phone: '', email: '', city: '', propertyType: '', service: '', problem: '' };

export default function InspectionForm() {
  const [form, setForm]           = useState(INITIAL);
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [sendError, setSendError] = useState('');

  const validate = () => {
    const e = {};
    if (!required(form.name))  e.name  = 'Name is required';
    if (!isPhone(form.phone))  e.phone = 'Enter a valid phone number';
    if (form.email && !isEmail(form.email)) e.email = 'Enter a valid email';
    if (!required(form.city))  e.city  = 'City is required';
    if (!form.service)         e.service = 'Please select a service';
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

    const serviceName = SERVICES.find((s) => s.id === form.service)?.name || form.service;

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      subject:    `New Inspection Request — ${form.name} (${form.city})`,
      from_name:  'Prisci Constructions Website',
      name:       form.name,
      phone:      form.phone,
      email:      form.email || 'Not provided',
      city:       form.city,
      property_type: form.propertyType || 'Not specified',
      service:    serviceName,
      problem:    form.problem || 'Not provided',
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
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
    <section className={styles.section} id="inspection">
      <div className={styles.geo1} aria-hidden="true" />
      <div className={styles.geo2} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.info}>
          <SectionHeader tag="FREE SITE INSPECTION" title={"REQUEST AN\nINSPECTION\nTODAY"} white />
          <p className={styles.subtext}>Our certified engineers will visit your site, assess the problem and provide a detailed written report — completely free of charge.</p>
          <div className={styles.benefits}>
            {BENEFITS.map((b) => (
              <div key={b.title} className={styles.benefit}>
                <div className={styles.benefitIcon}><i className={`ti ${b.icon}`} aria-hidden="true" /></div>
                <div>
                  <div className={styles.benefitTitle}>{b.title}</div>
                  <div className={styles.benefitSub}>{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.boxTitle}>BOOK YOUR FREE INSPECTION</div>
          <div className={styles.boxSub}>Fill in your details — we'll respond within 24 hours.</div>

          {submitted ? (
            <div className={styles.success}>
              <i className="ti ti-circle-check" aria-hidden="true" />
              <div className={styles.successTitle}>Request Submitted!</div>
              <div className={styles.successSub}>{COMPANY.name} will contact you within 24 hours.</div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" placeholder="e.g. Rajesh Kumar" value={form.name} onChange={handle} className={errors.name ? styles.inputError : ''} />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handle} className={errors.phone ? styles.inputError : ''} />
                  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>
              </div>
              <div className={styles.group}>
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="yourname@email.com" value={form.email} onChange={handle} className={errors.email ? styles.inputError : ''} />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label htmlFor="city">City / Location *</label>
                  <input id="city" name="city" type="text" placeholder="e.g. Hyderabad" value={form.city} onChange={handle} className={errors.city ? styles.inputError : ''} />
                  {errors.city && <span className={styles.error}>{errors.city}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="propertyType">Property Type</label>
                  <select id="propertyType" name="propertyType" value={form.propertyType} onChange={handle}>
                    <option value="">Select type</option>
                    {['Residential','Commercial','Industrial','Government / Municipal'].map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className={styles.group}>
                <label htmlFor="service">Service Required *</label>
                <select id="service" name="service" value={form.service} onChange={handle} className={errors.service ? styles.inputError : ''}>
                  <option value="">Select service</option>
                  {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                  <option value="unsure">Not Sure — Need Assessment</option>
                </select>
                {errors.service && <span className={styles.error}>{errors.service}</span>}
              </div>
              <div className={styles.group}>
                <label htmlFor="problem">Describe Your Problem</label>
                <textarea id="problem" name="problem" rows={3} placeholder="e.g. Water seepage through basement walls after heavy rain..." value={form.problem} onChange={handle} />
              </div>

              {sendError && <div className={styles.sendError}>{sendError}</div>}

              <Button type="submit" size="lg" icon={sending ? 'ti-loader' : 'ti-arrow-right'} className={styles.submit} disabled={sending}>
                {sending ? 'SENDING...' : 'SUBMIT INSPECTION REQUEST'}
              </Button>
              <div className={styles.note}><i className="ti ti-lock" aria-hidden="true" /> Your information is secure and will never be shared.</div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
