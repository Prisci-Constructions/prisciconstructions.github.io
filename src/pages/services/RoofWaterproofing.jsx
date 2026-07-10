import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/service-page.css';

export default function RoofWaterproofing() {
  useScrollTop();
  useSEO({
    title: 'Roof Waterproofing | Prisci Constructions',
    description: 'Industrial and sloped roof waterproofing in Hyderabad. Prisci Constructions protects metal sheet, RCC, and AC sheet roofs with BASF, Fosroc, Sika coatings.',
    path: '/services/roof-waterproofing',
  });

  useEffect(() => {
    const qs = document.querySelectorAll('.sp-faq-q');
    const handlers = [];
    qs.forEach(q => { const fn = () => { const item = q.parentElement; document.querySelectorAll('.sp-faq-item.open').forEach(i => { if (i !== item) i.classList.remove('open'); }); item.classList.toggle('open'); }; q.addEventListener('click', fn); handlers.push({ el: q, fn }); });
    const reveals = document.querySelectorAll('.sp-reveal');
    const ro = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } }), { threshold: 0.1 });
    reveals.forEach(el => ro.observe(el));
    return () => { handlers.forEach(({ el, fn }) => el.removeEventListener('click', fn)); ro.disconnect(); };
  }, []);

  return (
    <Layout>
      <div className="sp-subnav">
        <div className="container sp-subnav-inner">
          <a href="#sp-overview" className="sp-subnav-link">Overview</a>
          <a href="#sp-problems" className="sp-subnav-link">Problems</a>
          <a href="#sp-causes" className="sp-subnav-link">Causes</a>
          <a href="#sp-approach" className="sp-subnav-link">Approach</a>
          <a href="#sp-materials" className="sp-subnav-link">Materials</a>
          <a href="#sp-process" className="sp-subnav-link">Process</a>
          <a href="#sp-faq" className="sp-subnav-link">FAQ</a>
          <a href="#sp-projects" className="sp-subnav-link">Projects</a>
        </div>
      </div>

      <div className="sp-hero">
        <div className="container sp-hero-inner">
          <div className="sp-breadcrumb">
            <Link to="/">Home</Link>{' '}
            <span className="sp-breadcrumb-sep">/</span>{' '}
            <Link to="/#verticals">Services</Link>{' '}
            <span className="sp-breadcrumb-sep">/</span>{' '}
            Roof Waterproofing
          </div>
          <div className="sp-eyebrow">Engineering Services</div>
          <h1 className="sp-title">ROOF WATERPROOFING</h1>
          <p className="sp-lead">Industrial sheds, warehouses, and large-span roofs — whether GI sheet, Mangalore tile, or AC sheet — develop chronic leaks at laps, ridges, and fastener points that disrupt operations and damage inventory. Prisci Constructions provides industrial-grade roof coatings and sealing systems designed for large-area applications with minimum operational disruption.</p>
          <div className="sp-hero-stats">
            <span className="sp-hero-stat"><strong>25+</strong> Years Experience</span>
            <span className="sp-hero-stat"><strong>Flood Tested</strong> on Completion</span>
            <span className="sp-hero-stat"><strong>MES · HPCL · SAAP</strong> Clients</span>
            <span className="sp-hero-stat"><strong>10-Yr</strong> Warranty Available</span>
          </div>
        </div>
      </div>

      <main>
        <div className="container">

          <section className="sp-section sp-reveal" id="sp-overview">
            <div className="sp-section-header">
              <span className="sp-section-idx">01</span>
              <h2 className="sp-section-title">Overview</h2>
            </div>
            <div className="sp-grid-2">
              <div className="sp-overview-text">
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>Sloped and industrial roofs present a different waterproofing challenge from flat terraces. GI sheet roofs expand and contract by several centimetres over a 30°C daily temperature swing — standard coatings crack and delaminate within one season because they cannot accommodate this movement. Asbestos cement (AC) sheet roofs deteriorate chemically with age, developing porosity and edge crumbling that no paint can seal permanently.</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>Prisci Constructions uses elastomeric polyurethane coatings, aluminium-faced bituminous coatings, and butyl rubber seam tapes specifically formulated for metal and AC sheet substrates. These systems elongate with the roof under thermal movement and seal lap joints and fastener holes without requiring sheet replacement — making them cost-effective for large industrial footprints.</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>We have waterproofed industrial roofs for HPCL, Air India maintenance hangars, and MES military structures — roofs that must remain operational and meet strict safety requirements throughout the treatment period.</p>
              </div>
              <div>
                <div className="sp-stat-list">
                  <div className="sp-stat-item">
                    <div className="sp-stat-label">GI / Metal Sheet Roofs</div>
                    <div className="sp-stat-desc">Elastomeric PU and aluminium-based systems that flex with thermal movement without cracking.</div>
                  </div>
                  <div className="sp-stat-item">
                    <div className="sp-stat-label">AC Sheet Roofs</div>
                    <div className="sp-stat-desc">Specialised penetrating sealants plus elastomeric top-coat to seal aged and porous AC sheets without removal.</div>
                  </div>
                  <div className="sp-stat-item">
                    <div className="sp-stat-label">Large-Area Coverage</div>
                    <div className="sp-stat-desc">Airless spray application available for high-efficiency coverage of industrial roof areas exceeding 5,000 sqm.</div>
                  </div>
                  <div className="sp-stat-item">
                    <div className="sp-stat-label">Heat Reduction Benefit</div>
                    <div className="sp-stat-desc">White or aluminium-pigmented roof coatings reduce roof surface temperature by 12–18°C, lowering internal building temperature.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="sp-section sp-reveal" id="sp-problems">
            <div className="sp-section-header">
              <span className="sp-section-idx">02</span>
              <h2 className="sp-section-title">Common <span className="accent">Problems</span> We Solve</h2>
            </div>
            <ul className="sp-problem-list">
              <li>Dripping at lap joints and purlin connections in GI sheet roofs during monsoon — staining and rusting below</li>
              <li>Porous and crumbling AC sheet allowing rainfall to percolate through the sheet material itself</li>
              <li>Rust streaks and perforation at fastener holes in aged metal sheet roofing</li>
              <li>Ridge cap leakage — the longitudinal joint at the highest point collecting and channelling water inside</li>
              <li>Water entry at wall-to-roof junction (apron flashing failure) causing wall and column staining</li>
              <li>Seasonal leakage from skylight or translucent sheet panels installed without adequate lap sealing</li>
            </ul>
          </section>

          <section className="sp-section sp-reveal" id="sp-causes">
            <div className="sp-section-header">
              <span className="sp-section-idx">03</span>
              <h2 className="sp-section-title">Root <span className="accent">Causes</span></h2>
            </div>
            <ul className="sp-causes-list">
              <li>Thermal expansion stress at laps causing sealant to stretch and crack, creating open gaps during rain</li>
              <li>Fastener holes enlarging from vibration and repeated thermal cycling, losing their waterproof neoprene washers</li>
              <li>Galvanic corrosion where dissimilar metals contact (steel purlins + GI sheets) accelerating sheet perforation</li>
              <li>AC sheet carbonation and chemical breakdown in Hyderabad's alkaline rainwater creating micro-porosity</li>
              <li>Inadequate lap dimension or improperly bedded laps at original installation not sealed with mastic</li>
              <li>UV degradation of original bituminous or silicone sealants at joints over 8–10 years of exposure</li>
            </ul>
          </section>

          <section className="sp-section sp-reveal" id="sp-approach">
            <div className="sp-section-header">
              <span className="sp-section-idx">04</span>
              <h2 className="sp-section-title">Our <span className="accent">Approach</span></h2>
            </div>
            <div className="sp-approach-steps">
              <div className="sp-approach-step">
                <div className="sp-step-num">01</div>
                <div className="sp-step-title">Diagnose</div>
                <p className="sp-step-desc">A roof walk-over is conducted with a checklist for every lap, ridge, fastener point, flashing, and penetration. Leak locations from inside the building are correlated with roof features above. Areas of corrosion, perforation, and seal failure are photographed and measured.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">02</div>
                <div className="sp-step-title">Design</div>
                <p className="sp-step-desc">We specify whether the roof requires targeted seam-and-fastener treatment or a full-coverage elastomeric coating. Corroded sheets requiring replacement are identified separately. Material quantities, access scaffolding requirements, and work sequences for occupied facilities are planned.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">03</div>
                <div className="sp-step-title">Execute</div>
                <p className="sp-step-desc">Seams are cleaned, primed, and sealed with self-adhesive butyl tape before the liquid coating is applied. Airless spray or roller application proceeds systematically from ridge to eave. Post-application hose test is conducted at all previously identified leak points to confirm seal.</p>
              </div>
            </div>
          </section>

          <section className="sp-section sp-reveal" id="sp-materials">
            <div className="sp-section-header">
              <span className="sp-section-idx">05</span>
              <h2 className="sp-section-title">Materials <span className="accent">Used</span></h2>
            </div>
            <p className="sp-materials-intro">Metal and AC sheet roofs require materials with high elasticity (&gt;200% elongation) and excellent adhesion to non-porous substrates — standard cementitious products are unsuitable; we specify only elastomeric polymer systems tested for cyclic thermal movement.</p>
            <div className="sp-materials">
              <span className="sp-material-tag">BASF MasterSeal 6100 (Polyurethane)</span>
              <span className="sp-material-tag">Fosroc Dekguard Elastic</span>
              <span className="sp-material-tag">Sika Sarnafil TS 77</span>
              <span className="sp-material-tag">Pidilite Dr. Fixit Roofseal Flex</span>
              <span className="sp-material-tag">STP Bitumat Alutape (Seam Tape)</span>
              <span className="sp-material-tag">Atul Butyl Rubber Tape</span>
              <span className="sp-material-tag">Sunanda Sunproof NXT (Elastomeric)</span>
              <span className="sp-material-tag">Berger Bison Metal Primer (Rust Inhibiting)</span>
              <span className="sp-material-tag">Sika Sikaflex 11FC (Fastener Sealing)</span>
              <span className="sp-material-tag">BASF MasterProtect 8000CI (Reflective)</span>
            </div>
          </section>

          <section className="sp-section sp-reveal" id="sp-process">
            <div className="sp-section-header">
              <span className="sp-section-idx">06</span>
              <h2 className="sp-section-title">Our <span className="accent">Process</span></h2>
            </div>
            <div className="sp-process">
              <div className="sp-process-step">
                <div className="sp-process-num">01</div>
                <div className="sp-process-body">
                  <h4>Roof Condition Survey</h4>
                  <p>All roof surfaces, laps, fasteners, ridges, and flashings are inspected and mapped. Interior leak stain locations from inside the building are noted and GPS-correlated with roof features to prioritise sealing sequence.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">02</div>
                <div className="sp-process-body">
                  <h4>Loose Fastener &amp; Perforated Sheet Replacement</h4>
                  <p>Failed or missing fasteners are replaced with new neoprene-washered self-drilling screws. Sheets with extensive corrosion perforation (beyond sealable area) are replaced before coating — applying coating over heavily corroded metal only postpones the problem.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">03</div>
                <div className="sp-process-body">
                  <h4>Surface Cleaning &amp; Rust Treatment</h4>
                  <p>Roof surface is high-pressure washed to remove dirt, algae, and loose rust. Remaining rust is treated with a rust converter (phosphoric acid-based) and allowed to cure. AC sheet surfaces are cleaned and any friable areas consolidated with penetrating primer.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">04</div>
                <div className="sp-process-body">
                  <h4>Seam Sealing with Butyl Tape</h4>
                  <p>All longitudinal and transverse lap joints, ridge caps, and apron flashings are sealed with 75mm-wide self-adhesive butyl rubber tape pressed firmly into all gaps. This addresses the primary infiltration routes before the surface coating is applied.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">05</div>
                <div className="sp-process-body">
                  <h4>Primer Application</h4>
                  <p>Rust-inhibiting metal primer is applied across the entire roof surface. This improves elastomeric coating adhesion and provides additional corrosion protection for the metal substrate. Adequate drying time is observed before the next coat.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">06</div>
                <div className="sp-process-body">
                  <h4>Elastomeric Coating Application</h4>
                  <p>Two or three coats of elastomeric waterproofing coating (BASF MasterSeal 6100 or equivalent) are applied by airless spray or long-pile roller, achieving the specified DFT of 800–1200 microns. Reflective aluminium or white pigment provides UV protection and heat reduction.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">07</div>
                <div className="sp-process-body">
                  <h4>Hose Test &amp; Inspection</h4>
                  <p>On completion, a hose test simulating rainfall is conducted at all previously identified leak points, lap joints, and ridge areas. Any re-emergence of leakage is immediately traced and remedied. A written sign-off report is issued before the project is closed.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="sp-section sp-reveal" id="sp-faq">
            <div className="sp-section-header">
              <span className="sp-section-idx">07</span>
              <h2 className="sp-section-title">Frequently Asked <span className="accent">Questions</span></h2>
            </div>
            <div className="sp-faq">
              <div className="sp-faq-item">
                <div className="sp-faq-q">Why is my factory or warehouse roof leaking even though it looks intact from below? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">The most common causes in Hyderabad's industrial belt are lap joint failure and fastener hole corrosion — not obvious sheet damage. GI sheet roofs expand and contract by several centimetres over a single day's temperature swing; sealants applied at installation fatigue and crack within a few seasons, opening gaps at laps, ridges, and purlin connections. Rust accelerates at fastener holes — particularly where galvanic contact occurs between dissimilar metals — and eventually perforates the sheet itself. AC sheet roofs develop micro-porosity as the cement matrix carbonates with age, allowing rainfall to percolate through the sheet body rather than only at joints, making the leak source hard to pinpoint from inside.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Can the roof be treated without replacing the GI or AC sheets? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">In most cases, yes. If the sheets are structurally sound — not perforated by deep rust or cracked beyond a sealable area — lap joints, fastener points, and ridge caps can be sealed with butyl rubber tape and an elastomeric coating applied over the entire surface, eliminating the need for sheet replacement. This approach is significantly more cost-effective on large industrial footprints common in areas like Patancheru, Jeedimetla, and IDA Nacharam. Sheets with extensive corrosion perforation or irreparable cracks are identified during our roof survey and replaced individually as part of the preparation stage, so the rest of the roof can be treated as a single system.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Which coating system is suitable for my roof — acrylic, polyurethane, or bituminous? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">The right system depends on the substrate and the degree of thermal movement it undergoes. Polyurethane (PU) elastomeric coatings — such as BASF MasterSeal 6100 — are the strongest choice for GI and metal sheet roofs because they achieve over 300% elongation, accommodating thermal cycling without cracking; these are what we specify for most industrial sheds in Hyderabad. Acrylic coatings are water-based and lower in cost but have limited elongation (80–120%) and shorter service life on metal substrates in high-temperature climates. Aluminium-faced bituminous coatings are a proven option for AC sheet roofs where movement is lower and budget is a constraint, offering good UV resistance and adhesion to porous cement surfaces. We confirm the specification after a site assessment — no single product performs equally on all roof types.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How long does an industrial roof coating last? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">A properly applied PU elastomeric system on a well-prepared metal roof lasts 8–12 years under Hyderabad conditions — the combination of intense UV, monsoon saturation, and a 30°C-plus daily temperature range is among the most demanding in India. Bituminous and acrylic systems on AC sheet roofs typically perform for 6–8 years before recoating is needed. Service life is primarily determined by surface preparation: a coating applied over active rust or inadequately cleaned substrate will fail within 2–3 seasons regardless of product quality, which is why our process includes rust conversion, priming, and butyl tape sealing at all joints before any topcoat is applied.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Do you provide a warranty on roof waterproofing work? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Yes. Prisci Constructions provides a written workmanship warranty on all roof waterproofing projects, covering defects in application — delamination, coating failure at sealed joints, and re-emergence of leakage at treated areas. The warranty period and specific terms are stated in the project contract and vary based on the system applied and the roof condition at the time of treatment. Where applicable, manufacturer material warranties from BASF, Fosroc, or Sika are passed through to the client as well. Having operated in Hyderabad since 1999, we stand behind our work with documentation, not just a verbal commitment.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How much does roof waterproofing cost for an industrial shed? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Pricing typically ranges from ₹60 to ₹130 per square foot, depending on roof condition, the coating system specified, and site access requirements. A lap-seal-and-coat treatment on a sound GI sheet roof with good access falls toward the lower end; a full PU system with rust treatment, selective sheet replacement, seam taping, and reflective topcoat on a heavily corroded roof sits toward the upper end. An accurate figure requires a site visit — roof condition varies considerably and we do not provide reliable estimates without inspecting the substrate. Contact us to schedule a free site assessment for projects across Hyderabad's industrial belt.</div>
              </div>
            </div>
          </section>

          <section className="sp-section sp-reveal" id="sp-projects">
            <div className="sp-section-header">
              <span className="sp-section-idx">08</span>
              <h2 className="sp-section-title">Related <span className="accent">Projects</span></h2>
            </div>
            <div className="sp-projects">
              <div className="sp-project-card">
                <div className="sp-project-cat">Aviation / Air India</div>
                <div className="sp-project-name">Maintenance Hangar Roof Waterproofing</div>
                <div className="sp-project-loc">Air India Technical Centre, Begumpet, Hyderabad</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Industrial / HPCL</div>
                <div className="sp-project-name">Storage Shed Roof Coating &amp; Sealing</div>
                <div className="sp-project-loc">HPCL Depot, Hyderabad</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Defence / MES</div>
                <div className="sp-project-name">Ammunition Store Roof Rehabilitation</div>
                <div className="sp-project-loc">Military Engineering Services, Secunderabad</div>
              </div>
            </div>
          </section>

          <section className="sp-section">
            <div className="sp-cta">
              <div className="sp-cta-inner">
                <h2 className="sp-cta-title">Need Roof Waterproofing?</h2>
                <p className="sp-cta-desc">Our engineers respond within 24 hours. Free site assessment available for qualifying projects.</p>
                <div className="sp-cta-btns">
                  <Link to="/#contact" className="btn-primary">Book a Site Inspection</Link>
                  <a href="https://wa.me/message/7CSIOQ57SPOLL1" className="btn-ghost" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                  <a href="tel:+919000126099" className="btn-ghost">Call Us</a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
}
