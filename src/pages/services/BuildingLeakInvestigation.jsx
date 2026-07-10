import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/service-page.css';

export default function BuildingLeakInvestigation() {
  useScrollTop();
  useSEO({
    title: 'Building Leak Investigation | Prisci Constructions',
    description: 'Professional building leak investigation in Hyderabad. Prisci Constructions traces and diagnoses the source of water ingress in buildings using moisture mapping, thermal imaging, and flood testing.',
    path: '/services/building-leak-investigation',
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
          <a href="#sp-materials" className="sp-subnav-link">Equipment</a>
          <a href="#sp-process" className="sp-subnav-link">Process</a>
          <a href="#sp-faq" className="sp-subnav-link">FAQ</a>
          <a href="#sp-projects" className="sp-subnav-link">Projects</a>
        </div>
      </div>

      <div className="sp-hero">
        <div className="container">
          <div className="sp-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/#verticals">Services</Link> / Building Leak Investigation
          </div>
          <div className="sp-eyebrow">Engineering Services</div>
          <h1 className="sp-title">BUILDING LEAK INVESTIGATION</h1>
          <p className="sp-lead">
            Water staining on a ceiling could originate from a leaking pipe, a failed terrace membrane, a broken
            parapet, a condensation problem, or a plumbing fault — the visible symptom rarely reveals the cause.
            Prisci Constructions conducts methodical, instrument-aided leak investigations that trace water to its
            true source before any repair is recommended.
          </p>
          <div className="sp-hero-stats">
            <span className="sp-hero-stat"><strong>25+</strong> Years Experience</span>
            <span className="sp-hero-stat"><strong>Thermal Imaging</strong> &amp; Moisture Meters</span>
            <span className="sp-hero-stat"><strong>Written Report</strong> Delivered</span>
            <span className="sp-hero-stat"><strong>MES · HPCL · Air India</strong></span>
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
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  A building leak investigation is a systematic forensic exercise. Water entering a building at one
                  point can travel considerable distances through the structure before appearing — horizontally through
                  a screed layer, vertically down a cavity wall, or along a rebar line — before manifesting as a
                  stain or drip far from the actual ingress point. Treating the visible stain without tracing the
                  source is the reason most leak repairs repeat within a season.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Prisci Constructions uses a combination of capacitance moisture meters, thermal imaging cameras,
                  hose testing, and flood testing to isolate water pathways and confirm source locations. We
                  cross-check findings with building plans (where available) and correlate moisture patterns with
                  structural features, drainage details, and plumbing layouts before issuing a root-cause report.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  Our investigation reports are used to resolve inter-floor disputes in apartments, support insurance
                  claims, and form the brief for subsequent repair work. We offer investigation as a standalone
                  service — the client may then use their own contractor to execute the repair, or engage Prisci to
                  carry out the works.
                </p>
              </div>
              <div>
                <ul className="sp-stat-list">
                  <li><strong>Instrument-Aided Survey</strong>Capacitance moisture meters, thermal imaging, and hose tests — not guesswork or visual inspection alone.</li>
                  <li><strong>Written Root Cause Report</strong>Formal investigation report with annotated photographs, moisture readings, and a specific repair recommendation.</li>
                  <li><strong>Dispute Resolution</strong>Reports used in inter-floor disputes, society committee decisions, and insurance assessments — backed by instrument data.</li>
                  <li><strong>Independent Service</strong>Investigation is offered independently of repair — we do not inflate scope or create unnecessary repair recommendations.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="sp-section sp-reveal" id="sp-problems">
            <div className="sp-section-header">
              <span className="sp-section-idx">02</span>
              <h2 className="sp-section-title">Common <span className="accent">Problems</span> We Solve</h2>
            </div>
            <ul className="sp-problem-list">
              <li>Ceiling stain or drip in a room that does not sit directly below a bathroom or terrace — source unclear</li>
              <li>Recurring leak repaired multiple times but always returning — previous contractors treated wrong location</li>
              <li>Dispute between apartment owners about which flat is responsible for a leak between floors</li>
              <li>Wall dampness on an internal wall with no obvious external water source or plumbing nearby</li>
              <li>Intermittent leak appearing only during certain wind directions — façade or window junction issue</li>
              <li>New building with leaks shortly after occupation — construction defect identification for warranty claim</li>
            </ul>
          </section>

          <section className="sp-section sp-reveal" id="sp-causes">
            <div className="sp-section-header">
              <span className="sp-section-idx">03</span>
              <h2 className="sp-section-title">Root <span className="accent">Causes</span></h2>
            </div>
            <ul className="sp-causes-list">
              <li>Terrace or roof leak with horizontal migration in screed layer causing stain far from the actual ingress point</li>
              <li>Concealed plumbing pipe joint failure or hairline crack in embedded pipes — appearing unrelated to any external water source</li>
              <li>Façade crack or window frame sealant failure allowing wind-driven rain to enter the wall cavity</li>
              <li>Condensation from uninsulated cold-water pipes forming on surfaces and being mistaken for a structural leak</li>
              <li>Parapet or coping stone failure allowing water to travel down the wall cavity over several floors before appearing</li>
              <li>Failed waterproofing at a single junction point (e.g., expansion joint or pipe penetration) — the rest of the system intact</li>
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
                <p className="sp-step-desc">
                  We map the extent and pattern of moisture using calibrated instruments before any destructive
                  investigation. Moisture readings across a grid reveal whether saturation is localised or spread —
                  which indicates whether the source is a point defect or a wide-area failure. Thermal imaging
                  identifies wet areas not yet visible to the eye.
                </p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">02</div>
                <div className="sp-step-title">Design</div>
                <p className="sp-step-desc">
                  We design a structured elimination test — for example, isolating plumbing (by plugging and pressure
                  testing), then hose-testing wall sections, then flood-testing terrace zones in sequence — to confirm
                  or rule out each potential source. This eliminates guesswork and produces a defensible,
                  evidence-based conclusion about the cause.
                </p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">03</div>
                <div className="sp-step-title">Execute</div>
                <p className="sp-step-desc">
                  Tests are conducted systematically, with moisture readings taken before and after each test phase.
                  Photographs document every finding. A written investigation report is issued with the confirmed
                  source, the evidence supporting the conclusion, and a specific repair recommendation. We do not
                  issue vague reports suggesting multiple possible causes.
                </p>
              </div>
            </div>
          </section>

          <section className="sp-section sp-reveal" id="sp-materials">
            <div className="sp-section-header">
              <span className="sp-section-idx">05</span>
              <h2 className="sp-section-title">Materials <span className="accent">Used</span></h2>
            </div>
            <p className="sp-materials-intro">
              Building leak investigation is primarily a diagnostic service using instruments and structured testing
              protocols — the materials below are those used during investigation tests and any interim emergency
              sealing required to control active ingress during the investigation period.
            </p>
            <div className="sp-materials">
              <span className="sp-material-tag">Capacitance Moisture Meter (Protimeter)</span>
              <span className="sp-material-tag">Thermal Imaging Camera (FLIR)</span>
              <span className="sp-material-tag">Optical Crack Gauge Comparator</span>
              <span className="sp-material-tag">Relative Humidity Probes</span>
              <span className="sp-material-tag">Hose Test Equipment (BS 8200)</span>
              <span className="sp-material-tag">Flood Test Dam Equipment</span>
              <span className="sp-material-tag">Plumbing Pressure Test Gauge</span>
              <span className="sp-material-tag">Fosroc Renderoc Plug (Emergency Leak Arrest)</span>
              <span className="sp-material-tag">Sika Injection-451 (Interim PU Seal)</span>
              <span className="sp-material-tag">Phenolphthalein Solution (Carbonation Test)</span>
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
                  <h4>Client Briefing &amp; Historical Information Collection</h4>
                  <p>
                    We begin by reviewing the client's description of the leak pattern: when it occurs (during rain,
                    after rain, continuously, or randomly), where stains appear, how long the problem has existed,
                    and what repairs have been tried. Building drawings, if available, are reviewed to understand the
                    structure's waterproofing strategy, drainage layout, and plumbing routing.
                  </p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">02</div>
                <div className="sp-process-body">
                  <h4>Moisture Mapping with Instruments</h4>
                  <p>
                    A calibrated capacitance moisture meter is used to take readings at a 500mm grid across all
                    affected surfaces — ceiling, walls, and floor. A moisture contour map is produced. High-moisture
                    zones identify where water is present in the structure; the gradient of moisture distribution
                    reveals the probable direction of water travel and points toward the source.
                  </p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">03</div>
                <div className="sp-process-body">
                  <h4>Thermal Imaging Survey</h4>
                  <p>
                    A thermal imaging camera identifies zones of evaporative cooling (active moisture movement) and
                    temperature differences caused by wet substrate — detecting moisture invisible to moisture meters
                    and the naked eye. This is particularly useful for identifying leaks within hollow walls, under
                    screeds, and at concealed structural junctions.
                  </p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">04</div>
                <div className="sp-process-body">
                  <h4>Structured Elimination Testing</h4>
                  <p>
                    Potential sources are tested in sequence. Plumbing: pipes are isolated and pressure-tested to
                    confirm or rule out pipe leakage. Terrace/roof: drainage is plugged and the surface flooded for
                    4–24 hours while the ceiling below is monitored. Façade: hose testing is conducted at windows,
                    wall-roof junctions, and crack locations in a systematic grid pattern.
                  </p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">05</div>
                <div className="sp-process-body">
                  <h4>Limited Exploratory Opening (if required)</h4>
                  <p>
                    Where non-destructive methods cannot conclusively identify the source (e.g., a concealed pipe
                    joint within a screed), a targeted 300–400mm opening is made at the most probable source location
                    identified by the instrument survey. This is always the minimum intrusion necessary — we do not
                    open walls or floors speculatively.
                  </p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">06</div>
                <div className="sp-process-body">
                  <h4>Investigation Report &amp; Repair Brief</h4>
                  <p>
                    A written investigation report is issued within 3–5 working days of the site investigation. The
                    report includes: confirmed root cause (supported by instrument readings and test results),
                    annotated photographs of all significant findings, and a specific repair recommendation including
                    system type, scope of work, and estimated durability. The report can be used for insurance,
                    dispute resolution, or contractor briefing.
                  </p>
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
                <div className="sp-faq-q">
                  Why does the same leak keep coming back even after multiple repairs?{' '}
                  <span className="sp-faq-chevron">+</span>
                </div>
                <div className="sp-faq-a">
                  Repeated leak failures almost always share the same root cause: the repair addressed the symptom —
                  the visible stain or drip — rather than the actual source of water entry. Water migrates through
                  structures before appearing, so a terrace ingress point can show as a ceiling stain several metres
                  away, and a parapet failure can manifest as a wall stain two floors below. Our investigation traces
                  the moisture gradient back to its confirmed origin using capacitance moisture meters and thermal
                  imaging, and we test that conclusion before any repair is recommended. We do not issue a repair
                  brief until we can demonstrate, with instrument evidence, that we have found the real entry point.
                </div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">
                  My wall is damp but there is no bathroom or terrace above it — what could it be?{' '}
                  <span className="sp-faq-chevron">+</span>
                </div>
                <div className="sp-faq-a">
                  A damp wall with no obvious overhead water source is one of the most common investigation scenarios
                  we handle, and the cause is rarely what the client expects. The most frequent sources are: a
                  concealed plumbing pipe leak within the wall or floor slab, condensation forming on the surface of
                  an uninsulated cold-water pipe and being mistaken for a structural leak, or lateral seepage from
                  adjacent saturated soil or a neighbouring flat's wet area travelling through the screed or cavity.
                  Thermal imaging and moisture mapping quickly distinguish between these scenarios — each requires a
                  completely different repair approach.
                </div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">
                  What methods do you use to find the leak source without breaking walls?{' '}
                  <span className="sp-faq-chevron">+</span>
                </div>
                <div className="sp-faq-a">
                  We use a layered non-destructive approach before considering any opening. Capacitance moisture
                  meters produce a moisture contour map across all affected surfaces, revealing the direction of water
                  travel and pointing toward the source. Thermal imaging cameras detect evaporative cooling and
                  temperature differentials caused by wet substrate — identifying moisture concealed within walls,
                  under screeds, or behind finishes that neither meters nor the naked eye can reach. Where a plumbing
                  cause is suspected, pipes are isolated and pressure-tested without any opening. Flood testing of
                  the terrace or hose testing of the façade confirms or eliminates external sources. In most cases
                  these methods provide a conclusive answer; targeted wall openings of 300–400mm are reserved for the
                  minority of cases where a concealed joint failure cannot be confirmed any other way.
                </div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">
                  Can the investigation report be used in a neighbour or builder dispute?{' '}
                  <span className="sp-faq-chevron">+</span>
                </div>
                <div className="sp-faq-a">
                  Yes. Our investigation report is a professional engineering document — not a contractor's opinion —
                  and includes calibrated instrument readings, moisture maps, test protocols, annotated photographs,
                  and a specific confirmed conclusion about the source and responsible element. This report is
                  routinely used in apartment society committee hearings, inter-floor owner disputes, and builder
                  defect liability claims. We can structure the report for submission to a housing authority,
                  consumer forum, or legal counsel if the situation requires it.
                </div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">
                  How long does a building leak investigation take?{' '}
                  <span className="sp-faq-chevron">+</span>
                </div>
                <div className="sp-faq-a">
                  The site investigation typically takes one full day for a standard residential or commercial
                  building with up to four or five affected areas. Larger buildings, multi-floor cases, or
                  investigations requiring flood testing across multiple terrace zones may require two site visits.
                  The written investigation report is issued within three to five working days of the site visit.
                  Where the leak is triggered only by rain and cannot be replicated by hose or flood testing, a
                  second visit during the active monsoon period may be required to capture live moisture movement
                  data.
                </div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">
                  How much does a building leak investigation cost?{' '}
                  <span className="sp-faq-chevron">+</span>
                </div>
                <div className="sp-faq-a">
                  Investigation fees range from approximately ₹5,000 to ₹25,000 depending on the size of the
                  building, the number of affected areas, and the complexity of the testing required. The fee
                  includes the full site investigation, all instrument surveys (moisture mapping and thermal
                  imaging), any hose or flood testing conducted, and a written report with annotated photographs,
                  confirmed root cause, and repair recommendation. Investigation is offered as a standalone service —
                  there is no obligation to engage Prisci for the subsequent repair work.
                </div>
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
                <div className="sp-project-name">Multi-Building Leak Source Investigation</div>
                <div className="sp-project-loc">Military Engineering Services, Secunderabad Cantonment</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Aviation / Air India</div>
                <div className="sp-project-name">Operational Building Water Ingress Diagnosis</div>
                <div className="sp-project-loc">Air India Technical Centre, Hyderabad</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Residential</div>
                <div className="sp-project-name">Apartment Inter-Floor Leak Dispute Investigation</div>
                <div className="sp-project-loc">Jubilee Hills / Banjara Hills, Hyderabad</div>
              </div>
            </div>
          </section>

          <section className="sp-section">
            <div className="sp-cta">
              <div className="sp-cta-inner">
                <h2 className="sp-cta-title">Need a Leak Investigation?</h2>
                <p className="sp-cta-desc">
                  Our engineers respond within 24 hours. Free site assessment available for qualifying projects.
                </p>
                <div className="sp-cta-btns">
                  <Link to="/#contact" className="btn-primary">Book a Site Inspection</Link>
                  <a href="tel:+919000126099" className="btn-ghost">Call +91 90001 26099</a>
                  <a
                    href="https://wa.me/message/7CSIOQ57SPOLL1"
                    className="btn-ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
}
