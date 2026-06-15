import Layout from '@/components/layout/Layout';
import { SERVICES } from '@/data';
import SectionHeader from '@/components/ui/SectionHeader';
import { useScrollTop } from '@/hooks/useScrollTop';

export default function ServicesPage() {
  useScrollTop();
  return (
    <Layout>
      <section style={{ padding: '56px 52px', background: 'var(--light)' }}>
        <SectionHeader tag="WHAT WE DO" title="Our Services" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 32 }}>
          {SERVICES.map((s) => (
            <div key={s.id} id={s.id} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ background: s.bg, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={'ti ' + s.icon} style={{ fontSize: 32, color: '#fff' }} aria-hidden="true" />
              </div>
              <div style={{ padding: 18 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--text)', marginBottom: 6 }}>{s.name}</h3>
                <p style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.7 }}>{s.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}