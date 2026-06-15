import { CASE_STUDIES } from '@/data';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import styles from './CaseStudy.module.css';

export default function CaseStudy() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <SectionHeader tag="CASE STUDIES" title="Real Problems. Proven Solutions." />
        <a href="/case-studies" className={styles.viewAll}>View All <i className="ti ti-arrow-right" aria-hidden="true" /></a>
      </div>
      {CASE_STUDIES.map((c) => (
        <div key={c.id} className={styles.card}>
          <div className={styles.baPanel}>
            <div className={styles.before}>
              <span className={styles.beforeLabel}>BEFORE</span>
              <i className="ti ti-alert-triangle" aria-hidden="true" />
            </div>
            <div className={styles.after}>
              <span className={styles.afterLabel}>AFTER</span>
              <i className="ti ti-circle-check" aria-hidden="true" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{c.title}</div>
            <div className={styles.location}><i className="ti ti-map-pin" aria-hidden="true" />{c.location} — {c.type}</div>
            <div className={styles.cols}>
              {[['PROBLEM', c.problem], ['SOLUTION', c.solution], ['OUTCOME', c.outcome]].map(([lbl, txt]) => (
                <div key={lbl}>
                  <div className={styles.colLabel}>{lbl}</div>
                  <div className={styles.colText}>{txt}</div>
                </div>
              ))}
            </div>
            <Button variant="outline" to="/case-studies" icon="ti-arrow-right">VIEW CASE STUDY</Button>
          </div>
        </div>
      ))}
    </section>
  );
}