import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';

export default function AboutPage() {
  useScrollTop();
  useSEO({
    title: 'About Us | Prisci Constructions',
    description: 'Since 1999, Prisci Constructions has delivered waterproofing, structural rehabilitation, diagnostics and architecture solutions with engineering excellence across AP, Telangana, Karnataka and Maharashtra.',
    path: '/about',
  });
  return (
    <Layout>
      <section style={{ padding: 'var(--section-py) var(--section-px)', minHeight: '60vh' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 48, color: 'var(--dark)' }}>ABOUT US</h1>
        <p style={{ marginTop: 16, color: 'var(--muted)', maxWidth: 600 }}>
          Since 1999, Prisci Constructions has delivered waterproofing, structural rehabilitation,
          diagnostics, architecture and interior solutions with engineering excellence across
          AP, Telangana, Karnataka and Maharashtra.
        </p>
      </section>
    </Layout>
  );
}