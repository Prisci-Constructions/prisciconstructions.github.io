import { CLIENTS } from '@/data';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './Clients.module.css';

export default function Clients() {
  return (
    <section className={styles.section}>
      <SectionHeader tag="OUR PRESTIGIOUS CLIENTS" title="Trusted By Leading Organizations" center />
      <div className={styles.row}>
        {CLIENTS.map((c) => (
          <div key={c.name} className={styles.card}>
            <div className={styles.name} style={{ color: c.color }}>{c.name}</div>
            <div className={styles.sub}>{c.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}