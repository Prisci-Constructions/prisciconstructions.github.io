import Layout from '@/components/layout/Layout';
import { SERVICES } from '@/data';
import SectionHeader from '@/components/ui/SectionHeader';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import styles from './ServicesPage.module.css';

export default function ServicesPage() {
  useScrollTop();
  useSEO({
    title: 'Services | Waterproofing, Structural Repairs & More | Prisci Constructions',
    description: 'Waterproofing, building diagnostics, structural repairs, injection grouting, epoxy flooring and architecture & interior solutions across AP, Telangana, Karnataka and Maharashtra.',
    path: '/services',
  });
  return (
    <Layout>
      <section className={styles.section}>
        <SectionHeader tag="WHAT WE DO" title="Our Services" />
        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.id} id={s.id} className={styles.card} style={{ background: s.bg }}>
              <video
                className={styles.bgVideo}
                src={s.video}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <div className={styles.iconWrap}>
                  <i className={'ti ' + s.icon} aria-hidden="true" />
                </div>
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.desc}>{s.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
