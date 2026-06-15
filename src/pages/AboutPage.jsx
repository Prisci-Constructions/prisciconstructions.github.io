import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';

export default function AboutPage() {
  useScrollTop();
  return (
    <Layout>
      <section style={{ padding: '80px 52px', minHeight: '60vh' }}>
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