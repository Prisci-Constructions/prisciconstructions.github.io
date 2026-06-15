import { TESTIMONIALS } from '@/data';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <SectionHeader tag="TESTIMONIALS" title="What Our Clients Say" white />
      <div className={styles.grid}>
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className={styles.card}>
            <div className={styles.quote}>"</div>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.who}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}