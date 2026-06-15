import { Link } from 'react-router-dom';
import { COMPANY, SERVICES } from '@/data';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.brandName}>{COMPANY.name.toUpperCase()}</div>
          <div className={styles.brandTag}>{COMPANY.tagline}</div>
          <p className={styles.about}>Delivering waterproofing, rehabilitation, diagnostics, architecture and interior solutions with engineering excellence and integrity since {COMPANY.since}.</p>
          <div className={styles.social}>
            {Object.entries(COMPANY.social).map(([k, v]) => (
              <a key={k} href={v} aria-label={k}><i className={`ti ti-brand-${k}`} /></a>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.heading}>QUICK LINKS</div>
          <div className={styles.links}>
            {['Home','About Us','Projects','Case Studies','Contact'].map((l) => (
              <Link key={l} to={l === 'Home' ? '/' : `/${l.toLowerCase().replace(' ','-')}`}>
                <i className="ti ti-chevron-right" aria-hidden="true" /> {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.heading}>OUR SERVICES</div>
          <div className={styles.links}>
            {SERVICES.map((s) => (
              <Link key={s.id} to={`/services#${s.id}`}>
                <i className="ti ti-chevron-right" aria-hidden="true" /> {s.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.heading}>CONTACT US</div>
          <div className={styles.contact}>
            <div><i className="ti ti-map-pin" aria-hidden="true" /> {COMPANY.address}</div>
            <div><i className="ti ti-phone" aria-hidden="true" /> {COMPANY.phone}</div>
            <div><i className="ti ti-mail" aria-hidden="true" /> {COMPANY.email}</div>
            <div><i className="ti ti-world" aria-hidden="true" /> {COMPANY.regions}</div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2024 {COMPANY.name}. All Rights Reserved.</span>
        <div>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}