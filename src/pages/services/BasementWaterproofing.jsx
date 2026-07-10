import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/service-page.css';

export default function BasementWaterproofing() {
  useScrollTop();
  useSEO({
    title: 'Basement Waterproofing | Prisci Constructions',
    description: 'Basement waterproofing specialists in Hyderabad. Prisci Constructions uses crystalline, injection, and tanking systems to permanently stop basement water ingress.',
    path: '/services/basement-waterproofing',
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

      {/* IN-PAGE SUBNAV */}
      <div className="sp-subnav">
        <div className="container sp-subnav-inner">
          <a href="#sp-overview"  className="sp-subnav-link">Overview</a>
          <a href="#sp-problems"  className="sp-subnav-link">Problems</a>
          <a href="#sp-causes"    className="sp-subnav-link">Causes</a>
          <a href="#sp-approach"  className="sp-subnav-link">Approach</a>
          <a href="#sp-materials" className="sp-subnav-link">Materials</a>
          <a href="#sp-process"   className="sp-subnav-link">Process</a>
          <a href="#sp-faq"       className="sp-subnav-link">FAQ</a>
          <a href="#sp-projects"  className="sp-subnav-link">Projects</a>
        </div>
      </div>

      {/* HERO */}
      <div className="sp-hero">
        <div className="container sp-hero-inner">
          <div className="sp-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sp-breadcrumb-sep">/</span>
            <Link to="/#verticals">Services</Link>
            <span className="sp-breadcrumb-sep">/</span>
            <span>Basement Waterproofing</span>
          </div>
          <div className="sp-eyebrow">Engineering Services</div>
          <h1 className="sp-title">BASEMENT<br />WATERPROOFING</h1>
          <p className="sp-lead">Basements in Hyderabad face hydrostatic pressure from the high water table and red-soil moisture retention — causing persistent seepage that destroys structural integrity and makes below-grade spaces unusable. Prisci Constructions delivers permanent, engineered solutions for both new-build and remedial basement waterproofing.</p>
          <div className="sp-hero-stats">
            <span className="sp-hero-stat"><strong>25+</strong> Years Experience</span>
            <span className="sp-hero-stat"><strong>Diagnosed</strong> Before Treatment</span>
            <span className="sp-hero-stat"><strong>MES · HPCL · SAAP</strong> Clients</span>
            <span className="sp-hero-stat"><strong>Hyderabad</strong> Based</span>
          </div>
        </div>
      </div>

      <main>
        <div className="container">

          {/* 01 Overview */}
          <section className="sp-section sp-reveal" id="sp-overview">
            <div className="sp-section-header">
              <span className="sp-section-idx">01</span>
              <h2 className="sp-section-title">Overview</h2>
            </div>
            <div className="sp-grid-2">
              <div className="sp-overview-text">
                <p>Basement waterproofing is one of the most technically demanding areas of building protection. Unlike terrace treatments, basement systems must resist positive hydrostatic pressure — water actively being forced through the structure from the saturated soil side. Standard coatings applied to the interior face routinely fail because the pressure pushes the coating off the concrete rather than holding it in place.</p>
                <p>Prisci Constructions employs three fundamentally different system types depending on the severity of water ingress and access to the structure: crystalline integral systems (which become part of the concrete matrix and resist pressure from both sides), cementitious tanking membranes for negative-side application, and polyurethane injection grouting for active crack sealing and void filling.</p>
                <p>We have executed basement waterproofing for defence cantonments in Secunderabad, commercial basements in Hyderabad's CBD, and industrial facility sub-structures for clients including HPCL. Each project begins with a hydrostatic pressure assessment and water table study.</p>
              </div>
              <div className="sp-stat-list">
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Negative &amp; Positive Side Systems</div>
                  <div className="sp-stat-desc">Interior tanking and exterior membrane systems — chosen based on access and water pressure severity.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Active Leak Sealing</div>
                  <div className="sp-stat-desc">Rapid-set hydraulic cement and PU injection for live water-entry cracks before main treatment.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Crystalline Technology</div>
                  <div className="sp-stat-desc">Xypex or Dr. Fixit Crystalline systems that self-seal hairline cracks over time as the structure works.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Drainage Integration</div>
                  <div className="sp-stat-desc">French drain and sump pump design for basements with persistent inflow that cannot be fully blocked at source.</div>
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
              <li>Active water seeping through basement walls or floor slab under hydrostatic pressure during monsoon</li>
              <li>Persistent damp walls and floor with efflorescence (white salt deposits) indicating chronic moisture migration</li>
              <li>Flooded basement during heavy rainfall events due to water table rising above basement slab level</li>
              <li>Rusting of stored equipment, mould growth, and musty odour making basement unusable</li>
              <li>Concrete honeycombing or construction joint leaks allowing direct water entry paths</li>
              <li>Failed waterproofing applied during construction peeling off due to hydrostatic back-pressure</li>
            </ul>
          </section>

          {/* 03 Root Causes */}
          <section className="sp-section sp-reveal" id="sp-causes">
            <div className="sp-section-header">
              <span className="sp-section-idx">03</span>
              <h2 className="sp-section-title">Root <span className="accent">Causes</span></h2>
            </div>
            <ul className="sp-causes-list">
              <li>High seasonal water table rising into the basement zone during and after monsoon rainfall</li>
              <li>Inadequate or absent waterproofing at construction stage — reliance on increased cement content alone</li>
              <li>Construction joint between basement wall and slab — a structurally weak plane that water exploits</li>
              <li>Red laterite soil with high water retention creating sustained hydrostatic pressure after rain</li>
              <li>Cracking from structural settlement, shrinkage, or thermal movement providing direct water pathways</li>
              <li>Inadequate site drainage and no provision for sub-soil drain to relieve groundwater pressure on walls</li>
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
                <p className="sp-step-desc">We assess water table depth (via borehole or existing borewell levels), identify all water entry points, map crack patterns, and review original construction drawings if available. This determines whether positive-side, negative-side, or combination treatment is required.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">02</div>
                <div className="sp-step-title">Design</div>
                <p className="sp-step-desc">System is specified: crystalline coating for concrete slabs with multiple hairline cracks; rigid cementitious tanking for clean surfaces; PU injection for active crack sealing; drainage layer for high-inflow situations. All junction and penetration details are drawn before work begins.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">03</div>
                <div className="sp-step-title">Execute</div>
                <p className="sp-step-desc">Active leaks are arrested first with hydraulic cement. Surface is prepared and system applied in sequence per specification. Drainage integration, if required, is completed and tested. A post-monsoon inspection is included to confirm long-term performance.</p>
              </div>
            </div>
          </section>

          {/* 05 Materials Used */}
          <section className="sp-section sp-reveal" id="sp-materials">
            <div className="sp-section-header">
              <span className="sp-section-idx">05</span>
              <h2 className="sp-section-title">Materials <span className="accent">Used</span></h2>
            </div>
            <p className="sp-materials-intro">Basement systems are specified based on hydrostatic pressure rating, surface condition, and whether access is available from the water-side (positive) or interior (negative) face.</p>
            <div className="sp-materials">
              <span className="sp-material-tag">Xypex Concentrate (Crystalline)</span>
              <span className="sp-material-tag">Dr. Fixit Crystalline</span>
              <span className="sp-material-tag">BASF MasterSeal 501</span>
              <span className="sp-material-tag">BASF MasterSeal 588</span>
              <span className="sp-material-tag">Fosroc Renderoc Plug (Hydraulic Cement)</span>
              <span className="sp-material-tag">Fosroc Thioflex 600</span>
              <span className="sp-material-tag">Sika SikaTop Seal 107</span>
              <span className="sp-material-tag">Sika Injection-451</span>
              <span className="sp-material-tag">Sunanda Perma WP</span>
              <span className="sp-material-tag">STP Hydrostop</span>
              <span className="sp-material-tag">Pidilite Dr. Fixit Pidicrete URP</span>
              <span className="sp-material-tag">Bentonite Waterproofing Sheet (new construction)</span>
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
                  <h4>Water Table Assessment &amp; Entry-Point Mapping</h4>
                  <p>Engineer inspects the basement during and after monsoon (or triggers water ingress by hosing externally) to map all entry points. Existing borewell or municipal data is used to estimate seasonal water table levels relative to the slab depth.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">02</div>
                <div className="sp-process-body">
                  <h4>Active Leak Arrest</h4>
                  <p>Running cracks and joints actively passing water are plugged with Fosroc Renderoc Plug (rapid-hardening hydraulic cement) or Sika Injection-451 expanding foam to stop water flow before surface treatment commences. This is a critical step — no tanking system can be applied over an actively flowing crack.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">03</div>
                <div className="sp-process-body">
                  <h4>Surface Preparation</h4>
                  <p>Substrate is mechanically prepared to CSP4 profile (wire brush or grinding). Laitance, efflorescence, and debonded material are removed. Honeycombed concrete is cut out and filled with non-shrink repair mortar (BASF MasterEmaco or Fosroc Renderoc LA) prior to waterproofing.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">04</div>
                <div className="sp-process-body">
                  <h4>Cementitious Tanking Application</h4>
                  <p>Multi-coat cementitious waterproofing system is applied from floor slab up the walls to above-grade level. Horizontal/vertical junctions receive additional reinforcement with fillets and extra coats. Each coat is applied to the specified thickness and allowed to cure before the next coat.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">05</div>
                <div className="sp-process-body">
                  <h4>Drainage Layer Installation (if required)</h4>
                  <p>For basements with persistent high-volume inflow, a Delta-type drainage board or gravel sub-floor drain is installed to channel water to a sump point. This manages inflow rather than blocking it — appropriate when hydrostatic pressure exceeds what a coating system can resist.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">06</div>
                <div className="sp-process-body">
                  <h4>Protection &amp; Curing</h4>
                  <p>Crystalline and cementitious systems require continuous wet curing for 72 hours minimum after application. Polythene sheeting or wet hessian is used to retain moisture. Protection boards are installed before backfilling or screed laying to prevent mechanical damage to the membrane.</p>
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
                <div className="sp-faq-q">Why is my basement leaking or getting damp? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">The most common cause in Hyderabad is a rising seasonal water table during and after monsoon. Saturated red laterite soil retains moisture long after rains stop and exerts sustained hydrostatic pressure on basement walls and slabs, forcing water through construction joints, hairline cracks, and porous concrete. Dampness that persists between monsoons is typically capillary moisture migration through untreated concrete. Both are engineering problems — the correct fix depends on accurately identifying whether the ingress is pressure-driven or capillary-driven, which is why we assess before we specify.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Can basement waterproofing be done from inside without excavation? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Yes, and this is the standard approach for existing basements in Hyderabad where exterior excavation is impractical or prohibitively expensive. Negative-side (interior-face) application using crystalline systems is particularly effective because the ingress water actually aids the chemical reaction — crystals grow into the concrete matrix from within and block capillary pathways. Standard bitumen or generic polymer coatings are not suitable for negative-side application under significant hydrostatic pressure and will debond and peel off. Active leaks must be arrested with hydraulic cement before any negative-side system is applied.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Which system is right for my basement — tanking, crystalline, or drainage? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">The correct system depends on hydrostatic pressure, substrate condition, and available access — there is no single universal answer. Crystalline systems (Xypex, Dr. Fixit Crystalline) are specified for concrete with multiple hairline cracks and moderate pressure; they penetrate and self-seal. Cementitious tanking (SikaTop Seal 107, BASF MasterSeal 501) forms a physical barrier on sound, prepared surfaces. Drainage systems (French drain, sump pump) are used when groundwater pressure is too high for any coating to resist indefinitely — water is managed rather than blocked. Most remedial projects in Hyderabad's high-water-table zones combine two systems for redundancy; our engineer specifies after a site assessment.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How long does basement waterproofing last? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Crystalline systems are effectively permanent once they have reacted within the concrete matrix — they do not degrade and continue to self-seal micro-cracks as the structure moves. Cementitious tanking systems last 15–25 years when mechanically protected and not subjected to significant structural cracking. The most common cause of recurrence is new structural movement — settlement or thermal cracks — opening fresh pathways that were not present at the time of treatment. We recommend a post-monsoon inspection every 3 years to identify and seal any new ingress points before they develop into a larger problem.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Do you provide a warranty on basement waterproofing work? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Yes. Prisci Constructions provides a written workmanship warranty on all basement waterproofing projects. The warranty period and specific terms depend on the system applied and the site conditions documented during assessment — your project engineer will detail these in the proposal before work begins. Our warranty covers failure of the applied system under the conditions it was designed for; structural cracking caused by new external events such as adjacent deep excavation or significant settlement falls outside the scope of any waterproofing warranty.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How much does basement waterproofing cost in Hyderabad? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Basement waterproofing in Hyderabad typically ranges from ₹150 to ₹350 per sq ft, depending on the depth of the basement, the system specified, and the hydrostatic pressure to be resisted. Deeper basements in areas with a high seasonal water table — common across Gachibowli, Kondapur, and parts of the cantonment zone — require more robust multi-layer systems and fall toward the higher end of that range. An accurate quote is only possible after a site visit and hydrostatic assessment. Contact us to schedule a free site inspection and written estimate.</div>
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
                <div className="sp-project-cat">Defence / MES</div>
                <div className="sp-project-name">Underground Storage &amp; Basement Sealing</div>
                <div className="sp-project-loc">Military Engineering Services, Secunderabad Cantonment</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Industrial</div>
                <div className="sp-project-name">Sub-Structure Waterproofing</div>
                <div className="sp-project-loc">HPCL Installation, Hyderabad</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Residential</div>
                <div className="sp-project-name">Apartment Complex Basement Rehabilitation</div>
                <div className="sp-project-loc">Gachibowli / Kondapur, Hyderabad</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="sp-section sp-reveal">
            <div className="sp-cta">
              <div className="sp-cta-inner">
                <h2 className="sp-cta-title">Need Basement Waterproofing?</h2>
                <p className="sp-cta-desc">Our engineers respond within 24 hours. Free site assessment available for qualifying projects.</p>
                <div className="sp-cta-btns">
                  <Link to="/#contact" className="btn-primary">Book a Site Inspection</Link>
                  <a href="https://wa.me/message/7CSIOQ57SPOLL1" className="btn-ghost" target="_blank" rel="noopener">WhatsApp Us</a>
                  <a href="tel:+919000126099" className="btn-ghost">Call Us</a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="sp-footer">
            <span className="sp-footer-copy">© 2025 Prisci Constructions · Hyderabad, India</span>
            <div className="sp-footer-links">
              <Link to="/">Home</Link>
              <Link to="/#verticals">All Services</Link>
              <Link to="/#projects">Projects</Link>
              <Link to="/#contact">Get a Quote</Link>
            </div>
          </div>
        </div>
      </footer>

    </Layout>
  );
}
