import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/service-page.css';

export default function TerraceWaterproofing() {
  useScrollTop();
  useSEO({
    title: 'Terrace Waterproofing | Prisci Constructions',
    description: 'Expert terrace waterproofing in Hyderabad. Prisci Constructions uses Pidilite Dr. Fixit, BASF, Fosroc systems for lasting protection since 1999.',
    path: '/services/terrace-waterproofing',
  });

  useEffect(() => {
    // FAQ accordion
    const qs = document.querySelectorAll('.sp-faq-q');
    const handlers = [];
    qs.forEach(q => {
      const fn = () => {
        const item = q.parentElement;
        document.querySelectorAll('.sp-faq-item.open').forEach(i => { if (i !== item) i.classList.remove('open'); });
        item.classList.toggle('open');
      };
      q.addEventListener('click', fn);
      handlers.push({ el: q, fn });
    });
    // Scroll reveal
    const reveals = document.querySelectorAll('.sp-reveal');
    const ro = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } }), { threshold: 0.1 });
    reveals.forEach(el => ro.observe(el));
    return () => { handlers.forEach(({ el, fn }) => el.removeEventListener('click', fn)); ro.disconnect(); };
  }, []);

  return (
    <Layout>

      {/* IN-PAGE SUBNAV */}
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

      {/* HERO */}
      <div className="sp-hero">
        <div className="container sp-hero-inner">
          <div className="sp-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sp-breadcrumb-sep">/</span>
            <Link to="/#verticals">Services</Link>
            <span className="sp-breadcrumb-sep">/</span>
            <span>Terrace Waterproofing</span>
          </div>
          <div className="sp-eyebrow">Waterproofing Services</div>
          <h1 className="sp-title">TERRACE<br />WATERPROOFING</h1>
          <p className="sp-lead">Exposed terrace slabs in Hyderabad's climate endure extreme UV, thermal cycling, and monsoon ponding — a combination that destroys inadequate coatings within two seasons. Prisci Constructions designs and installs terrace waterproofing systems engineered for 10+ year service life under real Indian conditions.</p>
          <div className="sp-hero-stats">
            <span className="sp-hero-stat"><strong>25+</strong> Years Experience</span>
            <span className="sp-hero-stat"><strong>10-Yr</strong> System Warranty</span>
            <span className="sp-hero-stat"><strong>Flood Tested</strong> on Completion</span>
            <span className="sp-hero-stat"><strong>MES · HPCL · SAAP</strong> Clients</span>
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
                <p>A terrace slab is one of the most exposed structural elements in any building. Constant UV radiation causes surface oxidation and microcracking; the 40°C+ temperature differential between summer day and monsoon night drives cyclical thermal movement that opens hairline cracks wide enough for water ingress. In Hyderabad's red-soil geology, even minor leaks accelerate rebar corrosion rapidly.</p>
                <p>Prisci Constructions has waterproofed terraces across residential complexes, industrial facilities, defence installations, and government buildings since 1999. Every system we specify is selected after a site investigation — we do not apply a generic coat over an undiagnosed substrate, which is the primary reason most terrace waterproofing jobs fail within two years.</p>
                <p>Our terrace systems include crystalline slurry, polymer-modified bituminous membranes, APP/SBS torch-applied membranes, and cold-applied liquid membranes — each matched to the structural condition, terrace use, and budget.</p>
              </div>
              <div className="sp-stat-list">
                <div className="sp-stat-item">
                  <div className="sp-stat-label">25+ Years Experience</div>
                  <div className="sp-stat-desc">Terrace waterproofing across residential, industrial, and institutional projects in Telangana and AP.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">10-Year System Warranty</div>
                  <div className="sp-stat-desc">Torch-applied and liquid membrane systems backed by written workmanship warranty.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Pre-Monsoon Readiness</div>
                  <div className="sp-stat-desc">Specialised fast-track schedules to complete treatment before the Southwest monsoon onset.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">No Demolition Option</div>
                  <div className="sp-stat-desc">Overlay systems for occupied buildings where full screed demolition is not feasible.</div>
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
              <li>Water seeping through terrace slab into rooms below, causing ceiling stains and plaster delamination</li>
              <li>Ponding water on terrace due to inadequate slope or blocked drainage outlets</li>
              <li>Failed or blistering existing waterproofing membrane with visible bubbles and tears</li>
              <li>Corrosion stains at soffit of RCC slab indicating rebar carbonation from water ingress</li>
              <li>Cracked or hollow terrace tile / china mosaic that allows capillary water entry</li>
              <li>Parapet wall seepage where roof meets the vertical wall junction — a chronic leak point</li>
            </ul>
          </section>

          {/* 03 Root Causes */}
          <section className="sp-section sp-reveal" id="sp-causes">
            <div className="sp-section-header">
              <span className="sp-section-idx">03</span>
              <h2 className="sp-section-title">Root <span className="accent">Causes</span></h2>
            </div>
            <ul className="sp-causes-list">
              <li>Poor concrete mix design or inadequate curing during original construction leaving a porous substrate</li>
              <li>Thermal expansion and contraction creating hairline cracks in screed and slab over successive seasons</li>
              <li>UV degradation of bituminous and acrylic coatings applied without UV-stable top coat</li>
              <li>Incorrect or missing slope in screed causing water ponding and hydrostatic pressure build-up</li>
              <li>Junction detailing failures at parapets, pipe penetrations, and expansion joints</li>
              <li>Vegetation root penetration through existing waterproofing layer on green or garden terraces</li>
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
                <p className="sp-step-desc">Thorough site investigation: tap-testing screed for delamination, moisture-mapping with a capacitance meter, and tracing water pathways from leak points to their source. We inspect parapets, drainage outlets, and all penetrations before recommending any treatment.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">02</div>
                <div className="sp-step-title">Design</div>
                <p className="sp-step-desc">Based on findings, we specify the correct system — crystalline for active-water slabs, torch-applied APP membrane for heavy-duty protection, or liquid membrane for complex geometry terraces. Slope correction, drainage, and junction details are designed before a single product is ordered.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">03</div>
                <div className="sp-step-title">Execute</div>
                <p className="sp-step-desc">Application follows manufacturer datasheet protocols strictly. Each layer is tested before the next is applied. On completion, a flood test (50 mm head for 24 hours) is conducted and a written inspection report is issued. Snagging defects are rectified before handover.</p>
              </div>
            </div>
          </section>

          {/* 05 Materials Used */}
          <section className="sp-section sp-reveal" id="sp-materials">
            <div className="sp-section-header">
              <span className="sp-section-idx">05</span>
              <h2 className="sp-section-title">Materials <span className="accent">Used</span></h2>
            </div>
            <p className="sp-materials-intro">We source from India's top waterproofing chemical manufacturers and specify only systems proven in Hyderabad's specific climate — high UV, high humidity, and 900 mm+ annual monsoon rainfall.</p>
            <div className="sp-materials">
              <span className="sp-material-tag">Pidilite Dr. Fixit Roofseal</span>
              <span className="sp-material-tag">Dr. Fixit Crystalline</span>
              <span className="sp-material-tag">BASF MasterSeal 550</span>
              <span className="sp-material-tag">BASF MasterSeal 6100</span>
              <span className="sp-material-tag">Fosroc Proofex Engage</span>
              <span className="sp-material-tag">Fosroc Nitobond AR</span>
              <span className="sp-material-tag">Sika SikaTop Seal 107</span>
              <span className="sp-material-tag">Sika Sikaflex 11FC</span>
              <span className="sp-material-tag">STP Bitumat APP Membrane</span>
              <span className="sp-material-tag">Sunanda Perma Kote</span>
              <span className="sp-material-tag">Sunanda Sunproof NXT</span>
              <span className="sp-material-tag">Atul Butyl Tape</span>
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
                  <h4>Site Investigation &amp; Moisture Mapping</h4>
                  <p>Engineer visits the terrace and ceiling below. Capacitance moisture meter readings are taken across a grid. Delaminated screed is identified by tap-test. Water entry points are mapped and photographed to produce a condition report.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">02</div>
                <div className="sp-process-body">
                  <h4>Substrate Preparation</h4>
                  <p>Delaminated screed, failed waterproofing, and loose material are removed by chipping or grinding. The RCC surface is cleaned, blowholes and honeycombing are repaired with Fosroc Renderoc LA or BASF MasterEmaco repair mortar, and the surface is brought to a CSP3 profile.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">03</div>
                <div className="sp-process-body">
                  <h4>Slope Correction (if required)</h4>
                  <p>Screed is laid to achieve a minimum 1:80 slope toward drainage points. Polymer-modified screed (Sika MonoTop or Dr. Fixit Screed Fix) is used for enhanced bonding. Slope is confirmed with a straight-edge and spirit level before waterproofing commences.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">04</div>
                <div className="sp-process-body">
                  <h4>Primer Application</h4>
                  <p>Appropriate primer (solvent-based bituminous for APP systems; cement slurry primer for crystalline systems) is applied to the prepared substrate. Full coverage and dry-to-touch confirmation are verified before membrane application.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">05</div>
                <div className="sp-process-body">
                  <h4>Waterproofing Membrane / Coating Application</h4>
                  <p>The specified waterproofing system is applied in required layers with mandatory inter-coat curing periods. Laps, junctions, pipe boots, and parapet terminations are reinforced with fibre mesh and additional membrane. Each layer is inspected before the next coat proceeds.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">06</div>
                <div className="sp-process-body">
                  <h4>Protection Layer</h4>
                  <p>On trafficked terraces, a 50 mm brick bat coba or UV-stable screed topping is laid to protect the membrane from mechanical damage and direct UV. On non-trafficked areas, a reflective aluminium-faced UV coat or light-coloured protective coat is applied.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">07</div>
                <div className="sp-process-body">
                  <h4>Flood Test &amp; Handover</h4>
                  <p>All drainage outlets are plugged and 50 mm of water is ponded across the treated area for 24 hours. The ceiling below is inspected for any new staining. On passing, a written flood test certificate and photographic record are issued to the client.</p>
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
                <div className="sp-faq-q">Why is my terrace leaking even though it was waterproofed before? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Most terrace leaks trace back to three root causes: hairline cracks in the RCC slab or screed that have widened through thermal cycling, a failed or delaminated waterproofing coating that has reached end of life, and blocked drainage outlets that allow water to pond under hydrostatic pressure. Hyderabad's climate accelerates all three — the 40°C+ temperature swing between summer afternoons and monsoon nights opens micro-cracks season after season, while UV radiation degrades most coating materials within 3–5 years. Water typically enters at the weakest junctions first — parapet corners, pipe penetrations, and expansion joints — rather than uniformly across the open terrace.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Can my terrace be waterproofed without breaking up the existing tiles or screed? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Yes, but only if the existing screed is still fully bonded to the slab — we confirm this by tap-testing the surface across a grid. A hollow sound indicates delamination, and any overlay membrane applied over delaminated screed will blister and fail within one or two monsoon seasons. Where the screed is sound, a cold-applied liquid membrane or torch-applied system can go directly on top without demolition. Where delamination exists in patches, targeted removal and re-screeding delivers a far more durable result than a blanket overlay, and we will recommend it honestly even when it means more cost upfront.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Which waterproofing system is best suited for a terrace? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">There is no single correct answer — the right system depends on the terrace condition, its usage, and your budget. For residential terraces with moderate wear, a cold-applied polymer-modified liquid membrane (such as Dr. Fixit Roofseal or BASF MasterSeal 550) provides excellent protection with minimal disruption. For heavily trafficked or industrial terraces, a torch-applied APP bituminous membrane with a protective screed overlay offers superior long-term durability. Where the slab is actively wet or showing live seepage, a crystalline slurry treatment is applied first to block the water pathway before any membrane system goes on. Our site assessment determines which combination suits your specific terrace — we do not recommend a single product for every situation.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How long will a terrace waterproofing treatment last? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Torch-applied APP or SBS bituminous membrane systems, correctly installed, deliver 10–15 years of service life. Cold-applied polymer-modified liquid membranes typically perform well for 7–10 years. Cement-based crystalline coatings, when applied in adequate thickness, provide 5–8 years before recoating. The most critical variable in any system is substrate preparation — a properly prepared, clean, and primed surface allows the membrane to reach its rated life, while shortcuts on prep are the primary reason terrace waterproofing fails within a season or two regardless of the product used.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Do you offer a warranty on terrace waterproofing work? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Yes. Prisci Constructions provides a written workmanship warranty of 3 to 10 years depending on the system specified and the scope of the job. The warranty covers defects attributable to our application — blistering, delamination, or re-leakage through treated areas. Material performance is additionally backed by the respective manufacturer's product guarantee. Warranty validity requires standard maintenance: no drilling through the membrane, no unapproved changes to drainage outlets or parapets, and no heavy point loads on coated surfaces.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How much does terrace waterproofing cost in Hyderabad? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Terrace waterproofing in Hyderabad typically ranges from ₹80 to ₹150 per sq ft for supply and application, depending on the system chosen (liquid membrane vs. torch-applied), the condition and extent of existing damage, whether slope correction or screed replacement is required, and site accessibility. Area alone does not determine cost — a badly deteriorated 500 sq ft terrace can cost more to treat than a well-maintained 800 sq ft one. An exact quotation requires a site visit, which we offer at no obligation for most projects in and around Hyderabad.</div>
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
                <div className="sp-project-name">Officers' Mess Terrace Rehabilitation</div>
                <div className="sp-project-loc">Military Engineering Services, Secunderabad Cantonment, Hyderabad</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Industrial</div>
                <div className="sp-project-name">HPCL Storage Facility Roof Waterproofing</div>
                <div className="sp-project-loc">Hindustan Petroleum Corporation Ltd, Hyderabad</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Residential</div>
                <div className="sp-project-name">Multi-Storey Apartment Terrace Treatment</div>
                <div className="sp-project-loc">Banjara Hills / Jubilee Hills, Hyderabad</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="sp-section sp-reveal">
            <div className="sp-cta">
              <div className="sp-cta-inner">
                <h2 className="sp-cta-title">Need Terrace Waterproofing?</h2>
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

    </Layout>
  );
}
