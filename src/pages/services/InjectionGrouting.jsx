import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/service-page.css';

export default function InjectionGrouting() {
  useScrollTop();
  useSEO({
    title: 'Injection Grouting | Prisci Constructions',
    description: 'Polyurethane and epoxy injection grouting in Hyderabad for crack sealing, void filling, and waterproofing in RCC structures. Prisci Constructions since 1999.',
    path: '/services/injection-grouting',
  });

  useEffect(() => {
    const qs = document.querySelectorAll('.sp-faq-q');
    const handlers = [];
    qs.forEach(q => {
      const fn = () => {
        const item = q.parentElement;
        document.querySelectorAll('.sp-faq-item.open').forEach(i => {
          if (i !== item) i.classList.remove('open');
        });
        item.classList.toggle('open');
      };
      q.addEventListener('click', fn);
      handlers.push({ el: q, fn });
    });

    const reveals = document.querySelectorAll('.sp-reveal');
    const ro = new IntersectionObserver(
      es => es.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          ro.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    reveals.forEach(el => ro.observe(el));

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener('click', fn));
      ro.disconnect();
    };
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
            <Link to="/">Home</Link>
            <span className="sp-breadcrumb-sep">/</span>
            <Link to="/#verticals">Services</Link>
            <span className="sp-breadcrumb-sep">/</span>
            Injection Grouting
          </div>
          <div className="sp-eyebrow">Engineering Services</div>
          <h1 className="sp-title">INJECTION GROUTING</h1>
          <p className="sp-lead">
            When surface treatments cannot reach the root of the problem — cracks deep within a wall, voids behind a slab, or active water flowing through a crack under pressure — injection grouting is the engineering solution. Prisci Constructions injects polyurethane, epoxy, and cementitious grouts deep into structural elements to seal leaks, fill voids, and restore structural integrity from the inside out.
          </p>
          <div className="sp-hero-stats">
            <span className="sp-hero-stat"><strong>25+</strong> Years Experience</span>
            <span className="sp-hero-stat"><strong>Polyurethane</strong> &amp; Epoxy Systems</span>
            <span className="sp-hero-stat"><strong>MES · HPCL · SAAP</strong> Clients</span>
            <span className="sp-hero-stat"><strong>Active Leak</strong> Specialists</span>
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
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Injection grouting involves drilling ports at calculated intervals along a crack or at the face of a void-affected area, then pumping liquid grout material under controlled pressure. The material penetrates hairline cracks down to 0.1mm width that no surface coating can reach, cures in place, and either seals water pathways (polyurethane foam) or restores structural monolithicity (epoxy resin).
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Prisci Constructions uses three primary injection materials depending on the application: hydrophilic polyurethane foam for active water-bearing cracks (reacts with water to expand and seal the crack); rigid epoxy resin for structural crack repair where tensile strength recovery is needed; and cementitious micro-fine grout for void filling in masonry and behind shotcrete linings.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  We have deployed injection grouting on defence structures in Secunderabad Cantonment (including bomb shelters and underground facilities), HPCL tank foundations, and water retaining structures across Telangana and Andhra Pradesh.
                </p>
              </div>
              <div className="sp-stat-list">
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Active Leak Sealing</div>
                  <div className="sp-stat-desc">PU foam injection reacts with water in the crack itself — works even under flowing water conditions.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Structural Recovery</div>
                  <div className="sp-stat-desc">Epoxy injection restores full tensile and shear strength across repaired cracks in structural elements.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Minimal Disruption</div>
                  <div className="sp-stat-desc">No demolition or structural opening required — ports are 10–14mm diameter drilled holes, patched after grouting.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Void Filling</div>
                  <div className="sp-stat-desc">Micro-fine cement grout fills hollow spaces behind walls and slabs to restore composite structural action.</div>
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
              <li>Active water gushing or dripping through cracks in basement walls, retaining walls, or tunnels</li>
              <li>Structural cracks in columns, beams, or slabs requiring watertight and load-carrying repair</li>
              <li>Hollow-sounding areas behind wall plaster or behind concrete lining indicating voids in the substrate</li>
              <li>Seepage through construction joints in water retaining structures, tanks, and sumps</li>
              <li>Water entry through cold joints in RCC slabs and walls where pour sequences were not properly treated</li>
              <li>Delaminated shotcrete or plaster with voids behind — grout injection pins the layer back to the substrate</li>
            </ul>
          </section>

          <section className="sp-section sp-reveal" id="sp-causes">
            <div className="sp-section-header">
              <span className="sp-section-idx">03</span>
              <h2 className="sp-section-title">Root <span className="accent">Causes</span></h2>
            </div>
            <ul className="sp-causes-list">
              <li>Structural cracks from overloading, differential settlement, or shrinkage providing open water pathways through the section</li>
              <li>Construction cold joints in multi-pour structures left without waterstop or inadequately bonded</li>
              <li>Honeycombing in concrete from inadequate vibration during casting — open voids connected to water-bearing soil</li>
              <li>Corrosion-induced cracking where rebar rust expansion has split the concrete cover, allowing direct water ingress</li>
              <li>Earthquake or dynamic load-induced cracking in previously sound structures reopening dormant crack planes</li>
              <li>Chemical attack (sulphate or chloride) dissolving cement paste and creating permeable pathways in the concrete matrix</li>
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
                <p className="sp-step-desc">Crack width is measured with an optical crack gauge. Flow rate of active seepage is estimated. Ground penetrating radar (GPR) or impulse hammer testing identifies void locations and extents. We determine whether the crack is dormant (epoxy) or live (PU foam) and whether structural repair is also needed.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">02</div>
                <div className="sp-step-title">Design</div>
                <p className="sp-step-desc">Port spacing, drill angle, and depth are calculated based on element thickness and crack geometry. Injection material is selected (PU foam, flexible PU resin, rigid epoxy, or micro-fine cement). Injection sequence (low-to-high for waterproofing, end-to-end for structural) is designed before drilling commences.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">03</div>
                <div className="sp-step-title">Execute</div>
                <p className="sp-step-desc">Ports are drilled, packers seated, and injection proceeds under controlled pressure with visual monitoring at adjacent ports to confirm material travel. On completion, ports are sealed flush with repair mortar and surface crack is routed and sealed. Post-injection inspection confirms leak arrest.</p>
              </div>
            </div>
          </section>

          <section className="sp-section sp-reveal" id="sp-materials">
            <div className="sp-section-header">
              <span className="sp-section-idx">05</span>
              <h2 className="sp-section-title">Materials <span className="accent">Used</span></h2>
            </div>
            <p className="sp-materials-intro" style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
              Injection material selection is the most critical engineering decision in grouting — the wrong material in the wrong application will fail; we specify based on crack activity, water presence, required strength, and element type.
            </p>
            <div className="sp-materials">
              <span className="sp-material-tag">Sika Injection-451 (PU Foam)</span>
              <span className="sp-material-tag">Fosroc Conbextra GP (Cementitious)</span>
              <span className="sp-material-tag">BASF MasterFlow 648 (Epoxy Grout)</span>
              <span className="sp-material-tag">BASF MasterInject 1315 (Epoxy Injection)</span>
              <span className="sp-material-tag">Fosroc Nitobond EP (Epoxy)</span>
              <span className="sp-material-tag">Sika Sikadur 52 (Low-Viscosity Epoxy)</span>
              <span className="sp-material-tag">Pidilite Dr. Fixit PU Injection Grout</span>
              <span className="sp-material-tag">Sunanda Poly Grout PU</span>
              <span className="sp-material-tag">Micro-Fine OPC Grout (Void Filling)</span>
              <span className="sp-material-tag">Rubber Injection Packers (10mm / 13mm)</span>
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
                  <h4>Crack Mapping &amp; Port Layout</h4>
                  <p>All cracks and seepage points are mapped on an elevation drawing. Port positions are marked at calculated spacings (typically 150–300mm centres, drilled at 45° angle to intersect the crack midpoint through the section thickness). For voids, hammer sounding identifies the hollow zone boundary.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">02</div>
                <div className="sp-process-body">
                  <h4>Drilling &amp; Packer Installation</h4>
                  <p>10mm or 13mm holes are drilled to the calculated depth using a rotary hammer drill. Rubber injection packers with one-way valves are installed and hand-tightened. Drill dust is removed from each port with compressed air before packer seating to ensure good sealing.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">03</div>
                <div className="sp-process-body">
                  <h4>Surface Crack Sealing (V-Groove)</h4>
                  <p>For PU and epoxy injection, the crack surface is V-grouted with a fast-setting epoxy mortar between ports. This prevents blowout of injected material through the crack face and forces the grout to travel laterally through the full crack depth before reaching the surface.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">04</div>
                <div className="sp-process-body">
                  <h4>Injection Under Controlled Pressure</h4>
                  <p>Injection pump is connected to the lowest (or end) packer and material pumped at the specified pressure (typically 0.3–0.5 MPa for epoxy; 0.2–0.3 MPa for PU foam). Injection continues until material appears at the adjacent port — confirming travel through the crack — then that port is sealed and injection moves to the next.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">05</div>
                <div className="sp-process-body">
                  <h4>Curing &amp; Packer Removal</h4>
                  <p>Injection material is allowed to cure (PU foam: 30–60 minutes; epoxy: 24–48 hours) before packers are removed. Packer holes are patched flush with a thixotropic epoxy mortar (Fosroc Nitomortar or BASF MasterEmaco). Crack face is ground flush with the structural surface.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">06</div>
                <div className="sp-process-body">
                  <h4>Post-Injection Verification</h4>
                  <p>Water is applied to the treated surface (or the structure is returned to service and monitored) to confirm leak arrest. For structural epoxy injection, pull-off tests can be performed to confirm adhesion. A grouting record — materials used, pressures, volumes injected per port — is submitted to the client.</p>
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
                <div className="sp-faq-q">What is injection grouting and when is it needed? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Injection grouting is a process where liquid repair material — polyurethane foam, epoxy resin, or cementitious grout — is pumped under pressure into cracks, voids, or construction joints inside a structural element. It is needed when the problem originates deep within the structure and cannot be resolved by surface coatings alone: active water flowing through a basement wall crack, voids behind a slab, or a structural crack that has split a column through its full thickness. Essentially, if the defect is internal, injection grouting is the appropriate engineering response.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">What is the difference between PU foam and epoxy injection? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Polyurethane (PU) foam is a hydrophilic resin that reacts on contact with water, expanding rapidly to form a flexible, closed-cell foam that physically plugs the crack — making it ideal for active, water-bearing cracks even under flowing conditions. Epoxy injection is a high-strength, rigid adhesive that bonds the two crack faces together, restoring tensile and shear strength across the repaired zone; however, it requires a dry substrate to cure properly and bond effectively. Choosing the wrong material is a common cause of grouting failures — we specify the correct system after assessing crack activity and moisture conditions on site.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Can injection grouting stop active water leaks? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Yes — stopping active leaks is one of the primary applications of polyurethane foam injection. The hydrophilic PU resin is designed to react the moment it contacts water inside the crack, expanding to several times its liquid volume and sealing the flow pathway within minutes. For high-pressure seepage through basement walls, retaining structures, or underground rooms, we use fast-reacting PU foam grades that gel quickly enough to arrest even running water. Epoxy is not suitable for active leaks; PU foam is the correct material in those conditions.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How long does injection grouting last? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Epoxy injection into a dormant, stable crack is effectively permanent — the cured epoxy bonds the crack faces together and the repaired zone is typically stronger than the surrounding concrete. PU foam injection is long-lasting for static cracks; however, if the underlying cause (settlement, overload, thermal movement) continues to widen the crack, the foam seal can be disrupted over time. In dynamic or cyclically moving situations we specify a flexible PU resin rather than foam, which accommodates minor movement while maintaining the water seal. Addressing the root cause of cracking always extends the life of any grouting repair.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Do you provide a warranty on injection grouting work? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Yes, Prisci Constructions provides a warranty on workmanship for all injection grouting projects. The warranty period and its terms are specified in the project contract and depend on the nature of the defect, the material system selected, and the site conditions. Our warranty covers the treated area returning to the agreed performance standard — typically confirmed as leak-free after injection. It does not cover new cracking arising from structural causes unrelated to the original repair, which is why we always recommend a structural assessment alongside any grouting work.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How much does injection grouting cost? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Injection grouting is typically priced per injection port, with rates ranging from approximately ₹800 to ₹3,000 per port depending on the material used (PU foam is generally lower cost than structural epoxy), crack depth, element thickness, and site accessibility. A single crack may require 5–15 ports depending on its length and the port spacing required. Because every crack is different in geometry and severity, an accurate quote requires a site survey — our engineers will assess the structure, map the defects, and provide a fixed-price proposal. Contact us to arrange a free site inspection.</div>
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
                <div className="sp-project-cat">Defence / MES</div>
                <div className="sp-project-name">Underground Structure Crack Sealing</div>
                <div className="sp-project-loc">Military Engineering Services, Secunderabad Cantonment</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Industrial / HPCL</div>
                <div className="sp-project-name">Tank Foundation Void Filling &amp; Grouting</div>
                <div className="sp-project-loc">HPCL Facility, Hyderabad</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Infrastructure</div>
                <div className="sp-project-name">Water Retaining Structure Joint Sealing</div>
                <div className="sp-project-loc">Kurnool Municipal Corporation, Andhra Pradesh</div>
              </div>
            </div>
          </section>

          <section className="sp-section sp-reveal" id="sp-cta">
            <div className="sp-cta">
              <div className="sp-cta-inner">
                <h2 className="sp-cta-title">Need Injection Grouting?</h2>
                <p className="sp-cta-desc">Our engineers respond within 24 hours. Free site assessment available for qualifying projects.</p>
                <div className="sp-cta-btns">
                  <Link to="/#contact" className="btn-primary">Book a Site Inspection</Link>
                  <a href="https://wa.me/message/7CSIOQ57SPOLL1" className="btn-ghost" target="_blank" rel="noreferrer">WhatsApp Us</a>
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
