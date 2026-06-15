import { STATS, SERVICES } from '@/data';
import Button from '@/components/ui/Button';
import StatCard from '@/components/ui/StatCard';
import styles from './HeroSplit.module.css';

export default function HeroSplit() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.left}>
        <div className={styles.geo1} aria-hidden="true" />
        <div className={styles.geo2} aria-hidden="true" />
        <div className={styles.geo3} aria-hidden="true" />
        <div className={styles.geo4} aria-hidden="true" />

        <div>
          <p className={styles.tag}>ENGINEERING. REHABILITATION. DESIGN.</p>
          <h1 className={styles.title}>
            Engineering Solutions<br/>For Buildings That <span>Last</span>
          </h1>
          <p className={styles.sub}>
            From waterproofing and structural rehabilitation to diagnostics,
            architecture and interiors — we help buildings perform better and endure longer.
          </p>
          <div className={styles.btns}>
            <Button to="/contact#inspection" icon="ti-search">REQUEST INSPECTION</Button>
            <Button to="/projects" variant="ghost" icon="ti-briefcase">VIEW PROJECTS</Button>
          </div>
        </div>

        <div className={styles.stats}>
          {STATS.map((s) => <StatCard key={s.label} num={s.num} label={s.label} />)}
        </div>
      </div>

      <div className={styles.right}>
        <p className={styles.rightHeading}>OUR SERVICES</p>
        {SERVICES.map((s) => (
          <div key={s.id} className={styles.svcRow}>
            <div className={styles.iconWrap}><i className={`ti ${s.icon}`} aria-hidden="true" /></div>
            <div>
              <div className={styles.svcName}>{s.name.toUpperCase()}</div>
              <div className={styles.svcDesc}>{s.shortDesc}</div>
            </div>
            <i className="ti ti-chevron-right" aria-hidden="true" style={{ marginLeft: 'auto', color: 'var(--blue)', opacity: 0.5 }} />
          </div>
        ))}
      </div>
    </section>
  );
}