import { COMPANY } from '@/data';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <div className={styles.banner}>
      <div>
        <h3 className={styles.title}>Have a Project in Mind?</h3>
        <p className={styles.sub}>Let's build something strong and lasting together.</p>
      </div>
      <a href={`tel:${COMPANY.phone}`} className={styles.btn}>
        GET IN TOUCH &nbsp;<i className="ti ti-phone" aria-hidden="true" />
      </a>
    </div>
  );
}