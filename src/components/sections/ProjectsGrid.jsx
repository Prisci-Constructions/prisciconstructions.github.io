import { PROJECTS } from '@/data';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './ProjectsGrid.module.css';

export default function ProjectsGrid() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.head}>
        <SectionHeader tag="FEATURED PROJECTS" title="Building Trust Through Quality Work" white />
        <Link to="/projects" className={styles.viewAll}>View All Projects <i className="ti ti-arrow-right" aria-hidden="true" /></Link>
      </div>
      <div className={styles.grid}>
        {PROJECTS.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.thumb} style={{ background: p.bg }}>
              <i className={`ti ${p.icon}`} aria-hidden="true" />
            </div>
            <div className={styles.body}>
              <div className={styles.name}>{p.name}</div>
              <div className={styles.loc}><i className="ti ti-map-pin" aria-hidden="true" />{p.location}</div>
              <span className={styles.tag}>{p.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}