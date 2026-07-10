import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/service-page.css';

export default function StructuralRehabilitation() {
  useScrollTop();
  useSEO({
    title: 'Structural Rehabilitation | Prisci Constructions',
    description: 'Structural rehabilitation of distressed RCC buildings in Hyderabad. Prisci Constructions restores full structural capacity using BASF, Fosroc, and Sika repair systems.',
    path: '/services/structural-rehabilitation',
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
        if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
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
      {/* Subnav */}
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

      {/* Hero */}
      <div className="sp-hero">
        <div className="container sp-hero-inner">
          <div className="sp-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sp-breadcrumb-sep">/</span>
            <Link to="/#verticals">Services</Link>
            <span className="sp-breadcrumb-sep">/</span>
            Structural Rehabilitation
          </div>
          <div className="sp-eyebrow">Engineering Services</div>
          <h1 className="sp-title">STRUCTURAL REHABILITATION</h1>
          <p className="sp-lead">
            When a building's concrete frame is distressed — from rebar corrosion, carbonation, spalling, or inadequate
            original construction — demolition is rarely the only option. Prisci Constructions has restored structural
            integrity to aged defence installations, aviation maintenance facilities, industrial plants, and municipal
            buildings across South India since 1999, extending their service life by 25–40 years.
          </p>
          <div className="sp-hero-stats">
            <span className="sp-hero-stat"><strong>25+</strong> Years Experience</span>
            <span className="sp-hero-stat"><strong>BS EN 1504</strong> Compliant</span>
            <span className="sp-hero-stat"><strong>MES · Air India · HPCL</strong></span>
            <span className="sp-hero-stat"><strong>Pull-Off Tested</strong> Repairs</span>
          </div>
        </div>
      </div>

      <div className="container">

        {/* 01 Overview */}
        <section className="sp-section sp-reveal" id="sp-overview">
          <div className="sp-section-header">
            <span className="sp-section-idx">01</span>
            <h2 className="sp-section-title">Overview</h2>
          </div>
          <div className="sp-grid-2">
            <div className="sp-overview-text">
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>
                Structural rehabilitation encompasses the full spectrum of interventions needed to restore a deteriorated
                concrete structure to its design strength and intended service life. This ranges from localised concrete
                removal and reinstatement in spalled areas, through rebar cleaning and corrosion protection, to the
                application of pre-engineered repair mortars, concrete jacketing, FRP (fibre-reinforced polymer) wrapping
                for section strengthening, and carbonation-inhibiting protective coatings applied over the entire structure.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>
                Prisci Constructions follows the BS EN 1504 European Standard repair principle framework — the same standard
                used by major petrochemical, aviation, and defence clients in India — which requires that repair materials
                restore concrete equivalent to or better than the original. We do not use standard site-mixed mortars for
                structural repair; all materials are pre-engineered systems with documented compressive strength, tensile
                bond, modulus of elasticity, and chloride permeability data.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Our structural rehabilitation team is led by qualified civil engineers with hands-on experience in corrosion
                assessment, half-cell potential testing, carbonation depth measurement, and repair design. We can act as the
                specialist repair contractor under your structural consultant's specification, or provide an independent
                assessment-to-execution service across Telangana, Andhra Pradesh, Karnataka, and Maharashtra.
              </p>
            </div>
            <div>
              <div className="sp-stat-list">
                <div className="sp-stat-item">
                  <div className="sp-stat-label">BS EN 1504 Compliant</div>
                  <div className="sp-stat-desc">All repair systems specified and applied following the European concrete repair standard — the benchmark adopted by MES, HPCL, and aviation clients.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Non-Destructive Testing</div>
                  <div className="sp-stat-desc">Half-cell potential mapping, rebound hammer surveys, carbonation depth measurement, and chloride profiling before recommending any repair.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">25+ Year Track Record</div>
                  <div className="sp-stat-desc">Rehabilitation of defence, aviation, petrochemical, and municipal structures across Telangana and AP since 1999 — including MES, Air India, HPCL, and Kurnool Municipal Corporation projects.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Cost vs. Replacement Analysis</div>
                  <div className="sp-stat-desc">We provide a documented structural feasibility and cost comparison between rehabilitation and full reconstruction to inform client decisions.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 Common Problems */}
        <section className="sp-section sp-reveal" id="sp-problems">
          <div className="sp-section-header">
            <span className="sp-section-idx">02</span>
            <h2 className="sp-section-title">Common <span className="accent">Problems</span> We Solve</h2>
          </div>
          <ul className="sp-problem-list">
            <li>Concrete spalling from columns, beams, and slabs exposing corroded reinforcement bars to continued atmospheric attack</li>
            <li>Extensive cracking in structural members with rust staining along crack lines indicating active rebar corrosion within</li>
            <li>Carbonated concrete confirmed by phenolphthalein test — carbonation front has reached or breached reinforcement depth</li>
            <li>Chloride-contaminated concrete in coastal or industrial environments causing rapid, accelerated rebar section loss</li>
            <li>Delaminated concrete cover producing hollow sounds on tap-testing across beam soffits, column heads, and slab undersides</li>
            <li>Structural deficiency from construction error or overloading — inadequate section, missing reinforcement, or cold joint planes</li>
          </ul>
        </section>

        {/* 03 Root Causes */}
        <section className="sp-section sp-reveal" id="sp-causes">
          <div className="sp-section-header">
            <span className="sp-section-idx">03</span>
            <h2 className="sp-section-title">Root <span className="accent">Causes</span></h2>
          </div>
          <ul className="sp-causes-list">
            <li>Carbonation of concrete alkalinity — CO2 reaction lowers pH below 9, destroying the passive oxide film protecting embedded rebar</li>
            <li>Chloride ingress from marine exposure, contaminated aggregate, or industrial process emissions reaching threshold concentration at rebar depth</li>
            <li>Insufficient concrete cover to reinforcement allowing carbonation front to reach rebar within 15–20 years of construction</li>
            <li>Poor original concrete quality — high water-cement ratio and inadequate curing producing permeable concrete prone to rapid carbonation</li>
            <li>Honey-combing from inadequate compaction during original pours, creating voids that expose rebar without any concrete cover</li>
            <li>Overloading from building modifications — additional floor additions, changed occupancy use, or removal of load-bearing elements without structural review</li>
          </ul>
        </section>

        {/* 04 Our Approach */}
        <section className="sp-section sp-reveal" id="sp-approach">
          <div className="sp-section-header">
            <span className="sp-section-idx">04</span>
            <h2 className="sp-section-title">Our <span className="accent">Approach</span></h2>
          </div>
          <div className="sp-approach-steps">
            <div className="sp-approach-step">
              <div className="sp-step-num">01</div>
              <div className="sp-step-title">Diagnose</div>
              <p className="sp-step-desc">
                Full structural survey using rebound hammer, half-cell potential mapping, carbonation depth testing with
                phenolphthalein indicator, and visual spall mapping. Rebar corrosion activity is classified as active,
                passive, or uncertain across all structural elements. A condition report with quantified repair volumes is
                produced before any repair scope is priced or agreed.
              </p>
            </div>
            <div className="sp-approach-step">
              <div className="sp-step-num">02</div>
              <div className="sp-step-title">Design</div>
              <p className="sp-step-desc">
                Repair strategy is developed per BS EN 1504 principles: patch repair for localised spalls, section
                replacement for extensive damage, concrete jacketing for structural upgrading, and FRP wrapping for column
                and beam strengthening. Material systems are specified with full datasheets, mix designs, and application
                thicknesses documented for client and structural consultant review.
              </p>
            </div>
            <div className="sp-approach-step">
              <div className="sp-step-num">03</div>
              <div className="sp-step-title">Execute</div>
              <p className="sp-step-desc">
                Work proceeds systematically element by element with temporary propping before concrete removal where
                required. Each repaired section is tested by rebound hammer and pull-off adhesion test before the
                protective coating is applied. A photographic record of every element — from break-out to final coat —
                is maintained and submitted at project close.
              </p>
            </div>
          </div>
        </section>

        {/* 05 Materials Used */}
        <section className="sp-section sp-reveal" id="sp-materials">
          <div className="sp-section-header">
            <span className="sp-section-idx">05</span>
            <h2 className="sp-section-title">Materials <span className="accent">Used</span></h2>
          </div>
          <p className="sp-materials-intro">
            Structural repair materials must match or exceed the original concrete in strength, bond, and durability. We
            use only pre-engineered systems from India's leading construction chemistry manufacturers — all with published
            compressive strength, tensile bond strength, modulus of elasticity, and carbonation resistance data.
          </p>
          <div className="sp-materials">
            <span className="sp-material-tag">BASF MasterEmaco S488 (Repair Mortar)</span>
            <span className="sp-material-tag">BASF MasterEmaco T1100 (Thixotropic Mortar)</span>
            <span className="sp-material-tag">Fosroc Renderoc HB40 (High-Build Repair)</span>
            <span className="sp-material-tag">Fosroc Nitobond AR (Bonding Agent)</span>
            <span className="sp-material-tag">Sika MonoTop-615HB (Rebar Protection Mortar)</span>
            <span className="sp-material-tag">Sika Ferrogard 901 (Migrating Corrosion Inhibitor)</span>
            <span className="sp-material-tag">BASF MasterProtect 8000CI (Anti-Carbonation Coating)</span>
            <span className="sp-material-tag">Fosroc Dekguard Elastic (Anti-Carbonation Barrier)</span>
            <span className="sp-material-tag">Sika CarboDur CFRP Laminate (Structural Strengthening)</span>
            <span className="sp-material-tag">Fosroc Nitomortar FC (Fairing Coat Mortar)</span>
            <span className="sp-material-tag">Pidilite Dr. Fixit Primecote (Primer)</span>
            <span className="sp-material-tag">Zinc-Rich Epoxy Primer (Rebar Coating)</span>
          </div>
        </section>

        {/* 06 Our Process */}
        <section className="sp-section sp-reveal" id="sp-process">
          <div className="sp-section-header">
            <span className="sp-section-idx">06</span>
            <h2 className="sp-section-title">Our <span className="accent">Process</span></h2>
          </div>
          <div className="sp-process">
            <div className="sp-process-step">
              <div className="sp-process-num">01</div>
              <div className="sp-process-body">
                <h4>Structural Condition Assessment</h4>
                <p>
                  Rebound hammer (Schmidt hammer) tests conducted at a regular grid across all structural elements to map
                  concrete quality. Carbonation depth measured on drilled cores using phenolphthalein pH indicator.
                  Half-cell potential mapping (copper-copper sulphate electrode) identifies active corrosion zones before
                  any demolition. Chloride profile testing performed in coastal or industrial environments. All data is
                  compiled into a condition report with repair strategy recommendation and volume take-off.
                </p>
              </div>
            </div>
            <div className="sp-process-step">
              <div className="sp-process-num">02</div>
              <div className="sp-process-body">
                <h4>Temporary Propping and Access</h4>
                <p>
                  Where concrete is to be removed from load-bearing elements — beams, columns, or slabs — temporary
                  propping is erected per the structural engineer's shoring design before any concrete breaking commences.
                  Scaffolding access systems are erected for work at height. Perimeter hoarding with dust containment
                  sheeting protects occupied areas and public spaces below the work zone.
                </p>
              </div>
            </div>
            <div className="sp-process-step">
              <div className="sp-process-num">03</div>
              <div className="sp-process-body">
                <h4>Concrete Removal to Sound Substrate</h4>
                <p>
                  Delaminated, carbonated, and chloride-contaminated concrete is removed by pneumatic chipping or — where
                  vibration must be minimised in occupied buildings — by hydro-demolition (high-pressure water jet).
                  Removal continues to a sound substrate confirmed by rebound hammer reading. Break-out is extended to a
                  minimum 20mm behind the nearest rebar face to allow repair mortar to fully encapsulate the reinforcement
                  bar and provide adequate cover.
                </p>
              </div>
            </div>
            <div className="sp-process-step">
              <div className="sp-process-num">04</div>
              <div className="sp-process-body">
                <h4>Rebar Cleaning and Corrosion Protection</h4>
                <p>
                  Exposed reinforcement is mechanically cleaned to Sa 2.5 standard (near-white metal) using angle grinder
                  with wire cup or needle gun to remove all rust, mill scale, and contamination. Rebar section loss is
                  measured at each bar — if cross-sectional loss exceeds 20%, supplementary lapped bars are added per the
                  structural engineer's instruction. Rebar corrosion protection coating (Sika MonoTop-615HB or zinc-rich
                  epoxy primer) is applied wet-on-wet before repair mortar encapsulates the bar.
                </p>
              </div>
            </div>
            <div className="sp-process-step">
              <div className="sp-process-num">05</div>
              <div className="sp-process-body">
                <h4>Repair Mortar Application</h4>
                <p>
                  Substrate is pre-wetted to saturated surface dry (SSD) condition. Bonding agent (Fosroc Nitobond AR or
                  BASF Concresive Paste) is applied and allowed to become tacky before mortar placement. Pre-engineered
                  repair mortar (Fosroc Renderoc HB40 or BASF MasterEmaco S488) is applied in layers not exceeding 50mm
                  per pass for hand-applied work; form-and-pour systems (Renderoc HB) used for overhead repairs exceeding
                  150mm depth. Each layer is cured per datasheet before the next pass. Finished surface is matched to
                  original profile.
                </p>
              </div>
            </div>
            <div className="sp-process-step">
              <div className="sp-process-num">06</div>
              <div className="sp-process-body">
                <h4>Anti-Carbonation Protective Coating</h4>
                <p>
                  After repair mortar achieves minimum 28-day strength, a two-coat anti-carbonation elastomeric barrier
                  coating (BASF MasterProtect 8000CI or Fosroc Dekguard Elastic) is applied to all concrete surfaces
                  across the structure — not limited to repaired patches alone. This is the most critical step: uncoated
                  sound concrete will continue carbonating and initiate new corrosion cycles within 5–10 years, negating
                  the repair investment. Coating DFT (dry film thickness) is verified by comb gauge at 1 reading per 5m².
                </p>
              </div>
            </div>
            <div className="sp-process-step">
              <div className="sp-process-num">07</div>
              <div className="sp-process-body">
                <h4>Post-Repair Testing and Documentation</h4>
                <p>
                  Rebound hammer tests on all repaired patches confirm strength equivalence to surrounding concrete.
                  Pull-off adhesion tests per IS 13311 / BS EN 1542 are conducted on a minimum 5% sample of patch repairs.
                  Complete photographic record from initial break-out through rebar condition, mortar application, and
                  final coated finish is compiled and submitted to the client together with material delivery notes,
                  manufacturer data sheets, and QC test results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 07 FAQs */}
        <section className="sp-section sp-reveal" id="sp-faq">
          <div className="sp-section-header">
            <span className="sp-section-idx">07</span>
            <h2 className="sp-section-title">Frequently Asked <span className="accent">Questions</span></h2>
          </div>
          <div className="sp-faq">
            <div className="sp-faq-item">
              <div className="sp-faq-q">
                How do I know if my building needs structural rehabilitation vs. just cosmetic repair?
                <span className="sp-faq-chevron">+</span>
              </div>
              <div className="sp-faq-a">
                Cosmetic damage is purely surface — minor paint peeling, hairline plaster cracks, or surface staining with
                no depth. Structural distress shows different, unmistakable signs: concrete spalling off beams, columns, or
                slab soffits; exposed or visibly corroded rebar; map cracking (a network of fine cracks across a surface
                indicating internal concrete breakdown); rust staining tracking along crack lines; or a hollow thud when
                you tap the concrete surface. If any of these warning signs are present, the problem is at the
                reinforcement level, not the surface, and cosmetic treatment will not stop it. A proper assessment —
                carbonation depth measurement and half-cell potential mapping — will confirm the extent.
              </div>
            </div>
            <div className="sp-faq-item">
              <div className="sp-faq-q">
                Can structural rehabilitation be done while the building is occupied?
                <span className="sp-faq-chevron">+</span>
              </div>
              <div className="sp-faq-a">
                Yes, for most building types. We work element by element with temporary propping installed before any
                concrete is removed from load-bearing members, so the structure remains safe throughout. Dust and noise are
                managed with containment hoarding and, where required, low-vibration hydro-demolition instead of pneumatic
                chipping. We have completed structural rehabilitation in operational MES cantonment buildings, active Air
                India maintenance hangars, and occupied municipal offices — always co-ordinating work phases, access
                routes, and daily schedules with facility management to avoid disruption.
              </div>
            </div>
            <div className="sp-faq-item">
              <div className="sp-faq-q">
                What does the rehabilitation process involve — do you demolish the structure or repair it?
                <span className="sp-faq-chevron">+</span>
              </div>
              <div className="sp-faq-a">
                Rehabilitation is targeted repair, not demolition. We remove only the concrete that is damaged, carbonated,
                or chloride-contaminated — chipping or cutting back to a sound substrate — while the rest of the structural
                frame is retained. Exposed rebar is cleaned to bare metal, coated with a corrosion-inhibiting primer, and
                then encapsulated in a pre-engineered structural repair mortar (such as Fosroc Renderoc or BASF
                MasterEmaco) that matches or exceeds the original concrete in strength and bond. The final step — an
                anti-carbonation elastomeric coating applied to all concrete surfaces across the structure — is what
                prevents the deterioration cycle from restarting. The original structural frame is preserved, strengthened,
                and protected, not replaced.
              </div>
            </div>
            <div className="sp-faq-item">
              <div className="sp-faq-q">
                How many years of additional service life does structural rehabilitation add?
                <span className="sp-faq-chevron">+</span>
              </div>
              <div className="sp-faq-a">
                A fully executed rehabilitation — removing all deteriorated concrete, repairing corroded rebar, reinstating
                with pre-engineered repair mortar, and applying an anti-carbonation barrier coating to the entire structure
                — typically extends a building's service life by 25–40 years. The service life extension depends directly
                on the quality of the protective coating applied to the whole structure, not just repaired patches;
                uncoated sound concrete will continue carbonating and initiate new corrosion cycles within 5–10 years.
                Where structural capacity also needs upgrading, column jacketing or CFRP wrapping is designed for a design
                life consistent with the building's remaining intended use.
              </div>
            </div>
            <div className="sp-faq-item">
              <div className="sp-faq-q">
                Do you provide a warranty on structural rehabilitation work?
                <span className="sp-faq-chevron">+</span>
              </div>
              <div className="sp-faq-a">
                Yes. Prisci Constructions provides a written workmanship warranty on all structural rehabilitation works,
                covering defects in application, adhesion failure of repair mortars, and protective coating delamination.
                Warranty period and specific terms are documented in the contract and vary according to repair scope,
                material system specified, and site exposure conditions. Material systems from BASF, Fosroc, and Sika also
                carry their own manufacturer's product guarantees, which we pass through to the client. All work is backed
                by a complete QC record — pull-off adhesion test results, photographic documentation, and material delivery
                notes — submitted at project close.
              </div>
            </div>
            <div className="sp-faq-item">
              <div className="sp-faq-q">
                How much does structural rehabilitation cost?
                <span className="sp-faq-chevron">+</span>
              </div>
              <div className="sp-faq-a">
                Cost is highly variable and depends on the extent of concrete damage, degree of rebar corrosion, structural
                intervention required, access conditions, and material specification. As a broad guide: localised spall
                repair (patch repair of individual damaged areas) starts from approximately ₹200 per sq ft of repaired
                area; structural jacketing of columns or beams starts from approximately ₹1,500 per running metre. These
                are starting figures — a building with widespread carbonation, severely corroded rebar, and difficult
                access will cost considerably more per unit. An accurate scope and cost can only be produced after a
                structural condition assessment, which we conduct before any repair is priced. Contact us for a site
                inspection.
              </div>
            </div>
          </div>
        </section>

        {/* 08 Related Projects */}
        <section className="sp-section sp-reveal" id="sp-projects">
          <div className="sp-section-header">
            <span className="sp-section-idx">08</span>
            <h2 className="sp-section-title">Related <span className="accent">Projects</span></h2>
          </div>
          <div className="sp-projects">
            <div className="sp-project-card">
              <div className="sp-project-cat">Aviation / Air India</div>
              <div className="sp-project-name">Hangar Structural Frame Rehabilitation</div>
              <div className="sp-project-loc">Air India Maintenance, Begumpet Airport, Hyderabad</div>
            </div>
            <div className="sp-project-card">
              <div className="sp-project-cat">Defence / MES</div>
              <div className="sp-project-name">Colonial-Era Barracks Structural Restoration</div>
              <div className="sp-project-loc">Military Engineering Services, Secunderabad Cantonment</div>
            </div>
            <div className="sp-project-card">
              <div className="sp-project-cat">Municipal / Kurnool</div>
              <div className="sp-project-name">Civic Building Concrete Repair &amp; Strengthening</div>
              <div className="sp-project-loc">Kurnool Municipal Corporation, Andhra Pradesh</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sp-section">
          <div className="sp-cta">
            <div className="sp-cta-inner">
              <h2 className="sp-cta-title">Need Structural Rehabilitation?</h2>
              <p className="sp-cta-desc">
                Our engineers respond within 24 hours. Free site assessment available for qualifying projects in
                Hyderabad, Telangana, and Andhra Pradesh.
              </p>
              <div className="sp-cta-btns">
                <Link to="/#contact" className="btn-primary">Book a Site Inspection</Link>
                <a
                  href="https://wa.me/message/7CSIOQ57SPOLL1"
                  className="btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
                <a href="tel:+919000126099" className="btn-ghost">Call Us</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
