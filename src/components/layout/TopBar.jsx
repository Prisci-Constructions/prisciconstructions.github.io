import { COMPANY } from '@/data';
import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <i className="ti ti-map-pin" aria-hidden="true" />
        Hyderabad &nbsp;|&nbsp; {COMPANY.regions}
      </div>
      <div className={styles.right}>
        <a href={`tel:${COMPANY.phone}`} className={styles.item}>
          <i className="ti ti-phone" aria-hidden="true" /> {COMPANY.phone}
        </a>
        <a href={`mailto:${COMPANY.email}`} className={styles.item}>
          <i className="ti ti-mail" aria-hidden="true" /> {COMPANY.email}
        </a>
        <div className={styles.social}>
          <a href={COMPANY.social.facebook}  aria-label="Facebook"><i className="ti ti-brand-facebook" /></a>
          <a href={COMPANY.social.linkedin}  aria-label="LinkedIn"><i className="ti ti-brand-linkedin" /></a>
          <a href={COMPANY.social.instagram} aria-label="Instagram"><i className="ti ti-brand-instagram" /></a>
          <a href={COMPANY.social.youtube}   aria-label="YouTube"><i className="ti ti-brand-youtube" /></a>
        </div>
      </div>
    </div>
  );
}