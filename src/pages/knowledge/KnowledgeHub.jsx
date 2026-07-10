import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';

export default function KnowledgeHub() {
  useScrollTop();
  useSEO({
    title: 'Knowledge Center | Prisci Constructions',
    description: 'Engineering guides on waterproofing, structural rehabilitation, and building diagnostics.',
    path: '/knowledge',
  });
  const [filter, setFilter] = useState('all');

  return (
    <Layout>
      <style>{`
        /* ── KNOWLEDGE HUB STYLES ─────────────────────── */
        .kh-hero {
          padding: 7rem 2rem 4rem;
          text-align: center;
          background: linear-gradient(160deg, #07090f 0%, #0d1117 50%, #111827 100%);
          border-bottom: 1px solid var(--border);
        }
        .kh-hero-label {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1rem;
        }
        .kh-hero h1 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          color: var(--text);
          line-height: 1;
          margin: 0 0 1rem;
        }
        .kh-hero p {
          font-size: 1rem;
          color: var(--text-muted);
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* category filter tabs */
        .kh-filter {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          padding: 2rem 2rem 0;
          flex-wrap: wrap;
        }
        .kh-filter-btn {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.45rem 1.1rem;
          border-radius: 2rem;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .kh-filter-btn:hover,
        .kh-filter-btn.active {
          background: var(--gold);
          color: #070A14;
          border-color: var(--gold);
        }

        /* grid */
        .kh-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2.5rem 2rem 5rem;
        }
        .kh-category-section { margin-bottom: 3.5rem; }
        .kh-category-heading {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .kh-category-heading h2 {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: var(--text);
          margin: 0;
        }
        .kh-category-pill {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.25rem 0.65rem;
          border-radius: 2rem;
        }
        .kh-category-pill.waterproofing { background: rgba(30,90,168,0.2); color: #6fa3e0; border: 1px solid rgba(30,90,168,0.35); }
        .kh-category-pill.structural    { background: rgba(243,156,18,0.15); color: #f3ae45; border: 1px solid rgba(243,156,18,0.3); }
        .kh-category-pill.diagnostics   { background: rgba(46,160,100,0.15); color: #5ecc8b; border: 1px solid rgba(46,160,100,0.3); }

        .kh-rule { border: none; border-top: 1px solid var(--border); margin: 0 0 1.5rem; }

        .kh-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .kh-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          position: relative;
          overflow: hidden;
        }
        .kh-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .kh-card.waterproofing::before { background: linear-gradient(90deg, #1e5aa8, #6fa3e0); }
        .kh-card.structural::before    { background: linear-gradient(90deg, #f39c12, #f3ae45); }
        .kh-card.diagnostics::before   { background: linear-gradient(90deg, #2ecc71, #5ecc8b); }
        .kh-card:hover { border-color: var(--gold); transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.35); }
        .kh-card:hover::before { opacity: 1; }

        .kh-card-cat {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .kh-card.waterproofing .kh-card-cat { color: #6fa3e0; }
        .kh-card.structural    .kh-card-cat { color: #f3ae45; }
        .kh-card.diagnostics   .kh-card-cat { color: #5ecc8b; }

        .kh-card h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
          margin: 0;
          line-height: 1.35;
        }
        .kh-card p {
          font-size: 0.8rem;
          color: var(--text-dim);
          margin: 0;
          line-height: 1.55;
          flex: 1;
        }
        .kh-card-meta {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.07em;
          color: var(--text-dim);
          opacity: 0.6;
          margin-top: 0.25rem;
        }
        .kh-card-arrow {
          font-size: 0.8rem;
          color: var(--gold);
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
          margin-top: auto;
          padding-top: 0.5rem;
        }
        .kh-card:hover .kh-card-arrow { opacity: 1; transform: translateX(4px); }

        @media (max-width: 640px) {
          .kh-grid { grid-template-columns: 1fr; }
          .kh-hero { padding: 5rem 1.25rem 2.5rem; }
          .kh-main { padding: 1.5rem 1.25rem 4rem; }
        }
      `}</style>

      {/* HERO */}
      <div className="kh-hero">
        <div className="kh-hero-label">Knowledge Center</div>
        <h1>Engineering Insights</h1>
        <p>Practical guides on waterproofing, structural repair, and building diagnostics — written by engineers, for building owners.</p>
      </div>

      {/* FILTER TABS */}
      <div className="kh-filter">
        <button
          className={`kh-filter-btn${filter === 'all' ? ' active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Articles
        </button>
        <button
          className={`kh-filter-btn${filter === 'waterproofing' ? ' active' : ''}`}
          onClick={() => setFilter('waterproofing')}
        >
          Waterproofing
        </button>
        <button
          className={`kh-filter-btn${filter === 'structural' ? ' active' : ''}`}
          onClick={() => setFilter('structural')}
        >
          Structural
        </button>
        <button
          className={`kh-filter-btn${filter === 'diagnostics' ? ' active' : ''}`}
          onClick={() => setFilter('diagnostics')}
        >
          Diagnostics
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="kh-main">

        {/* WATERPROOFING */}
        <div
          className="kh-category-section"
          style={{ display: filter === 'all' || filter === 'waterproofing' ? '' : 'none' }}
        >
          <div className="kh-category-heading">
            <h2>Waterproofing</h2>
            <span className="kh-category-pill waterproofing">5 Articles</span>
          </div>
          <hr className="kh-rule" />
          <div className="kh-grid">
            <Link to="/knowledge/why-waterproofing-fails" className="kh-card waterproofing">
              <div className="kh-card-cat">Waterproofing</div>
              <h3>Why Waterproofing Fails</h3>
              <p>The five root causes behind every failed treatment — wrong system, bad prep, skipped details, and more.</p>
              <div className="kh-card-meta">8 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
            <Link to="/knowledge/terrace-waterproofing-guide" className="kh-card waterproofing">
              <div className="kh-card-cat">Waterproofing</div>
              <h3>Terrace Waterproofing Guide</h3>
              <p>System selection, application sequence, and maintenance for RCC terraces in Hyderabad's climate.</p>
              <div className="kh-card-meta">10 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
            <Link to="/knowledge/basement-leakage-guide" className="kh-card waterproofing">
              <div className="kh-card-cat">Waterproofing</div>
              <h3>Basement Leakage Guide</h3>
              <p>How water enters basements, the difference between hydrostatic and capillary ingress, and how to stop both.</p>
              <div className="kh-card-meta">9 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
            <Link to="/knowledge/pu-grouting" className="kh-card waterproofing">
              <div className="kh-card-cat">Waterproofing</div>
              <h3>PU Grouting — A Complete Guide</h3>
              <p>Polyurethane injection vs. epoxy: when to use each, how the process works, and what the results look like.</p>
              <div className="kh-card-meta">7 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
            <Link to="/knowledge/expansion-joints" className="kh-card waterproofing">
              <div className="kh-card-cat">Waterproofing</div>
              <h3>Expansion Joints — Why They Leak and How to Fix Them</h3>
              <p>Sealant selection, joint geometry, and the most common mistakes that cause repeat failures.</p>
              <div className="kh-card-meta">6 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
          </div>
        </div>

        {/* STRUCTURAL */}
        <div
          className="kh-category-section"
          style={{ display: filter === 'all' || filter === 'structural' ? '' : 'none' }}
        >
          <div className="kh-category-heading">
            <h2>Structural Rehabilitation</h2>
            <span className="kh-category-pill structural">5 Articles</span>
          </div>
          <hr className="kh-rule" />
          <div className="kh-grid">
            <Link to="/knowledge/concrete-cracks" className="kh-card structural">
              <div className="kh-card-cat">Structural</div>
              <h3>Concrete Cracks — Classification and Repair</h3>
              <p>How to tell a structural crack from a cosmetic one, and the correct repair method for each type.</p>
              <div className="kh-card-meta">8 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
            <Link to="/knowledge/honeycombing" className="kh-card structural">
              <div className="kh-card-cat">Structural</div>
              <h3>Honeycombing in Concrete</h3>
              <p>Why it happens, how to find it, and the repair sequence that restores structural integrity.</p>
              <div className="kh-card-meta">7 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
            <Link to="/knowledge/carbonation" className="kh-card structural">
              <div className="kh-card-cat">Structural</div>
              <h3>Carbonation of Concrete</h3>
              <p>The chemical process that destroys the protective alkalinity around rebar — and how to measure and stop it.</p>
              <div className="kh-card-meta">8 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
            <Link to="/knowledge/corrosion" className="kh-card structural">
              <div className="kh-card-cat">Structural</div>
              <h3>Rebar Corrosion in Buildings</h3>
              <p>The mechanism behind rusting steel, detection with half-cell potential mapping, and repair strategies.</p>
              <div className="kh-card-meta">9 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
            <Link to="/knowledge/spalling" className="kh-card structural">
              <div className="kh-card-cat">Structural</div>
              <h3>Concrete Spalling — Causes, Warning Signs, and Repair</h3>
              <p>Why chunks of concrete fall off buildings, the early warning signs, and the correct repair sequence.</p>
              <div className="kh-card-meta">7 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
          </div>
        </div>

        {/* DIAGNOSTICS */}
        <div
          className="kh-category-section"
          style={{ display: filter === 'all' || filter === 'diagnostics' ? '' : 'none' }}
        >
          <div className="kh-category-heading">
            <h2>Building Diagnostics</h2>
            <span className="kh-category-pill diagnostics">4 Articles</span>
          </div>
          <hr className="kh-rule" />
          <div className="kh-grid">
            <Link to="/knowledge/moisture-testing" className="kh-card diagnostics">
              <div className="kh-card-cat">Diagnostics</div>
              <h3>Moisture Testing in Buildings</h3>
              <p>The instruments used to find hidden moisture — from pin meters to relative humidity probes — and what the readings mean.</p>
              <div className="kh-card-meta">6 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
            <Link to="/knowledge/infrared-inspection" className="kh-card diagnostics">
              <div className="kh-card-cat">Diagnostics</div>
              <h3>Infrared Thermal Inspection</h3>
              <p>How thermography reveals hidden leaks, delamination, and moisture without breaking walls.</p>
              <div className="kh-card-meta">7 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
            <Link to="/knowledge/rebound-hammer" className="kh-card diagnostics">
              <div className="kh-card-cat">Diagnostics</div>
              <h3>Rebound Hammer Test</h3>
              <p>How the Schmidt hammer estimates concrete strength, what the rebound number means, and where the test has limits.</p>
              <div className="kh-card-meta">6 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
            <Link to="/knowledge/upv-test" className="kh-card diagnostics">
              <div className="kh-card-cat">Diagnostics</div>
              <h3>UPV Test — Ultrasonic Pulse Velocity</h3>
              <p>How ultrasonic waves detect voids, cracks, and concrete quality — and how to read a PUNDIT report.</p>
              <div className="kh-card-meta">7 min read</div>
              <div className="kh-card-arrow">Read article →</div>
            </Link>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', margin: 0 }}>
          © 2025 Prisci Constructions · Hyderabad ·{' '}
          <Link to="/#contact" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Get a Free Consultation</Link>
        </p>
      </footer>
    </Layout>
  );
}
