import Layout from '@/components/layout/Layout';
import { PROJECTS } from '@/data';
import SectionHeader from '@/components/ui/SectionHeader';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';

export default function ProjectsPage() {
  useScrollTop();
  useSEO({
    title: 'Projects | Prisci Constructions Portfolio',
    description: 'Completed projects including OHT waterproofing, industrial structural works, stadium restoration and epoxy flooring across Hyderabad, AP, Karnataka and Maharashtra.',
    path: '/projects',
  });
  return (
    <Layout>
      <section style={{ background: 'var(--dark)', padding: '56px 52px' }}>
        <SectionHeader tag="OUR WORK" title="All Projects" white />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 32 }}>
          {PROJECTS.map((p) => (
            <div key={p.id} style={{ background: 'var(--dark3)', border: '1px solid var(--blue-border)', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ background: p.bg, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={'ti ' + p.icon} style={{ fontSize: 32, color: 'rgba(255,255,255,0.7)' }} aria-hidden="true" />
              </div>
              <div style={{ padding: 14 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: '#eceff1' }}>{p.name}</div>
                <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 4 }}>{p.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}