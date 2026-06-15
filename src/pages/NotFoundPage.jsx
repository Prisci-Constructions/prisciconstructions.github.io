import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <section style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 52px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 96, fontWeight: 900, color: 'var(--blue)', lineHeight: 1 }}>404</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--dark)', marginTop: 8 }}>PAGE NOT FOUND</h2>
        <p style={{ fontSize: 13, color: 'var(--muted)', margin: '12px 0 24px' }}>The page you are looking for does not exist.</p>
        <Link to="/" style={{ background: 'var(--blue)', color: '#fff', padding: '11px 24px', borderRadius: 5, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '1.5px' }}>BACK TO HOME</Link>
      </section>
    </Layout>
  );
}