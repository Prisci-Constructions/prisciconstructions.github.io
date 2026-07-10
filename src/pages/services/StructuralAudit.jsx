import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/service-page.css';

export default function StructuralAudit() {
  useScrollTop();
  useSEO({
    title: 'Structural Audit | Prisci Constructions',
    description: 'Structural audit and condition assessment in Hyderabad. Prisci Constructions conducts NDT-based structural audits for RCC buildings, providing detailed condition reports and rehabilitation recommendations.',
    path: '/services/structural-audit',
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
          <a href="#sp-problems" className="sp-subnav-link">Why Needed</a>
          <a href="#sp-causes" className="sp-subnav-link">What We Test</a>
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
            <Link to="/">Home</Link> / <Link to="/#verticals">Services</Link> / Structural Audit
          </div>
          <div className="sp-eyebrow">Engineering Services</div>
          <h1 className="sp-title">STRUCTURAL AUDIT</h1>
          <p className="sp-lead">A structural audit is a comprehensive, instrument-based assessment of a building's current structural health — identifying deterioration, quantifying its severity, and recommending remediation before failure occurs. Prisci Constructions has conducted structural audits for MES, HPCL, SAAP, and private clients across Telangana and Andhra Pradesh, producing reports that form the basis of rehabilitation programmes and property transactions.</p>
          <div className="sp-hero-stats">
            <span className="sp-hero-stat"><strong>25+</strong> Years Experience</span>
            <span className="sp-hero-stat"><strong>IS 13311</strong> Compliant NDT</span>
            <span className="sp-hero-stat"><strong>A/B/C/D</strong> Condition Grading</span>
            <span className="sp-hero-stat"><strong>MES · Kurnool MC · SAAP</strong></span>
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
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem', fontSize: '0.95rem' }}>A structural audit goes significantly beyond a visual inspection. It combines non-destructive testing (NDT) techniques — rebound hammer, ultrasonic pulse velocity, cover meter survey, half-cell potential mapping, and carbonation depth measurement — with a systematic visual survey to produce a quantified, evidence-based condition rating for every structural element in the building.</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1rem', fontSize: '0.95rem' }}>In Hyderabad's construction context, where many buildings from the 1970s–2000s were built with inadequate concrete cover (often 10–15mm vs. the IS 456:2000 minimum of 25–40mm) and higher water-cement ratios, carbonation front reaches reinforcement within 15–20 years — triggering corrosion that causes spalling, section loss, and eventually structural inadequacy. A structured audit identifies which elements have reached this threshold and which are still in the safe zone, allowing prioritised repair investment.</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>Prisci Constructions produces audit reports to IS 13311 and BIS standards, with each NDT technique documented per element. Reports include a traffic-light condition rating (Good / Fair / Poor / Critical) for every column, beam, slab, and wall surveyed, plus a prioritised repair cost estimate.</p>
              </div>
              <ul className="sp-stat-list">
                <li style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.85rem 1.1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '0.2rem' }}>IS 13311 Compliant NDT</strong>
                  Rebound hammer, UPV, and half-cell tests conducted per IS 13311 Part 1 &amp; 2 standards.
                </li>
                <li style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.85rem 1.1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '0.2rem' }}>Element-by-Element Rating</strong>
                  Every column, beam, and slab individually assessed and assigned a condition rating — not a building-wide average.
                </li>
                <li style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.85rem 1.1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '0.2rem' }}>Prioritised Repair Cost Estimate</strong>
                  Audit report includes a phased repair cost estimate so the client can budget and prioritise without commissioning a separate quantity survey.
                </li>
                <li style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.85rem 1.1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '0.2rem' }}>Accepted by Institutions</strong>
                  Audit reports accepted by MES, HPCL, SAAP, municipal bodies, and banks for rehabilitation loan applications.
                </li>
              </ul>
            </div>
          </section>

          <section className="sp-section sp-reveal" id="sp-problems">
            <div className="sp-section-header">
              <span className="sp-section-idx">02</span>
              <h2 className="sp-section-title">Common <span className="accent">Problems</span> We Solve</h2>
            </div>
            <ul className="sp-problem-list">
              <li>Building owner unsure whether spalling and cracking visible in a 25+ year old structure requires urgent repair or routine maintenance</li>
              <li>Institutional client (defence, government) requiring a formal condition report before approving a rehabilitation budget</li>
              <li>Property buyer wanting an independent structural assessment before purchasing an older commercial or residential building</li>
              <li>Dispute between a building owner and a contractor about whether previous repair work was adequate</li>
              <li>Insurance claim requiring a third-party structural condition assessment to justify repair cost quantum</li>
              <li>Post-earthquake or post-fire assessment to determine which elements remain safe for continued occupation</li>
            </ul>
          </section>

          <section className="sp-section sp-reveal" id="sp-causes">
            <div className="sp-section-header">
              <span className="sp-section-idx">03</span>
              <h2 className="sp-section-title">Root <span className="accent">Causes</span></h2>
            </div>
            <ul className="sp-causes-list">
              <li>Concrete carbonation advancing through insufficient cover to reinforcement level — the commonest cause of structural deterioration in Hyderabad's building stock</li>
              <li>Chloride contamination in coastal or industrial environments driving accelerated corrosion at rebar level</li>
              <li>Original design or construction deficiency — understrength concrete, insufficient reinforcement, missing stirrups</li>
              <li>Cumulative deferred maintenance — minor repairs not attended to for 10+ years, allowing deterioration to compound</li>
              <li>Structural modification without engineering approval — removal of walls, addition of floors, change of use increasing loads</li>
              <li>Earthquake or differential settlement loading creating residual stress states beyond the original design assumptions</li>
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
                <p className="sp-step-desc">A systematic element-by-element survey is conducted using a combination of NDT instruments. Test results are recorded on element location drawings. Each structural element is assigned a preliminary condition rating based on NDT data. Areas requiring more detailed investigation (core drilling, half-cell mapping) are identified during this phase.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">02</div>
                <div className="sp-step-title">Design</div>
                <p className="sp-step-desc">The audit report is structured to serve the client's purpose — institutional reports follow the brief from MES or SAAP; pre-purchase due-diligence reports focus on risk and cost; rehabilitation planning reports include phased repair programmes. The report format is agreed with the client before fieldwork commences.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">03</div>
                <div className="sp-step-title">Execute</div>
                <p className="sp-step-desc">Fieldwork is conducted over 1–3 days depending on building size. NDT equipment is calibrated before use. Test results are recorded digitally on location plans. The written report is issued within 7–10 working days of fieldwork completion, including all test result data tables, annotated photographs, and recommendations.</p>
              </div>
            </div>
          </section>

          <section className="sp-section sp-reveal" id="sp-materials">
            <div className="sp-section-header">
              <span className="sp-section-idx">05</span>
              <h2 className="sp-section-title">Materials <span className="accent">Used</span></h2>
            </div>
            <p className="sp-materials-intro">A structural audit is conducted with calibrated NDT instruments — listed below are the instruments deployed and the core sampling consumables required for laboratory-verified testing where NDT findings require confirmation.</p>
            <div className="sp-materials">
              <span className="sp-material-tag">Schmidt Rebound Hammer (IS 13311 Pt.2)</span>
              <span className="sp-material-tag">UPV Tester — Ultrasonic Pulse Velocity (IS 13311 Pt.1)</span>
              <span className="sp-material-tag">Half-Cell Potential Meter (Cu-CuSO4)</span>
              <span className="sp-material-tag">Rebar Covermeter (Profometer)</span>
              <span className="sp-material-tag">Carbonation Depth — Phenolphthalein Cores</span>
              <span className="sp-material-tag">Capacitance Moisture Meter (Protimeter)</span>
              <span className="sp-material-tag">Optical Crack Gauge Comparator</span>
              <span className="sp-material-tag">Thermal Imaging Camera (FLIR)</span>
              <span className="sp-material-tag">Core Drilling Equipment (50mm dia)</span>
              <span className="sp-material-tag">Chloride Ion Profiling Kit (for coastal/industrial)</span>
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
                  <h4>Pre-Audit Document Review</h4>
                  <p>Original building drawings (architectural and structural), completion certificates, soil investigation reports, and any previous inspection or repair records are reviewed before the site visit. Where drawings are unavailable, an as-built sketch is prepared during the site survey. Understanding the original design intent is essential for interpreting NDT readings correctly.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">02</div>
                <div className="sp-process-body">
                  <h4>Visual Survey &amp; Defect Mapping</h4>
                  <p>A comprehensive visual survey of all accessible structural elements is conducted. Spalling, cracking, corrosion staining, deflection, and misalignment are noted on elevation drawings. Defect severity is classified (minor, moderate, severe, critical) based on BIS guidelines. This forms the basis for prioritising NDT test locations.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">03</div>
                <div className="sp-process-body">
                  <h4>Non-Destructive Testing (NDT)</h4>
                  <p>Rebound hammer tests at a 200mm grid on all columns, beams, and slab soffits (minimum 9 readings per element, converted to estimated compressive strength per IS 13311 Part 2). UPV testing to assess concrete quality and detect internal voids or delaminations. Covermeter survey to map concrete cover to reinforcement on 10% of elements per floor. Half-cell potential mapping on elements showing corrosion staining.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">04</div>
                <div className="sp-process-body">
                  <h4>Carbonation &amp; Chloride Testing</h4>
                  <p>Core samples (50mm diameter) are extracted at locations identified by NDT as potentially carbonated. Freshly broken cores are sprayed with phenolphthalein indicator solution — colourless zones (pH below 9) indicate carbonated concrete. Carbonation depth is measured and compared to rebar cover to determine whether the reinforcement is at risk. Chloride extraction testing is conducted on cores in coastal or industrial locations.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">05</div>
                <div className="sp-process-body">
                  <h4>Condition Rating &amp; Report Preparation</h4>
                  <p>All data — visual survey, NDT readings, carbonation depths — is compiled and each structural element is assigned a condition rating (Good: no significant defects; Fair: minor defects, monitor; Poor: repair recommended; Critical: urgent repair or load restriction required). The full audit report includes data tables, annotated photographs, condition rating drawings, and a prioritised repair cost estimate.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">06</div>
                <div className="sp-process-body">
                  <h4>Report Presentation &amp; Follow-Up</h4>
                  <p>The audit report is presented to the client's engineering or management team — not simply emailed — to explain findings and answer questions. For institutional clients (MES, HPCL, SAAP), the report is formatted to the client's specified standard. A 12-month follow-up monitoring visit is available to confirm that deterioration has not progressed in elements rated Fair.</p>
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
                <div className="sp-faq-q">What is a structural audit and who needs one? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">A structural audit is a systematic, instrument-based assessment of a building's structural health — combining visual inspection with non-destructive testing (NDT) to quantify the condition of every column, beam, slab, and wall. It provides measurable data on concrete strength, reinforcement cover, carbonation depth, and corrosion activity that no visual inspection can deliver. GHMC and HMDA recommend audits for all buildings over 15 years old; they are also commonly required before rehabilitation, pre-purchase due diligence, institutional budget approval, and post-event assessments after earthquake or fire. Any owner of an aging RCC building who needs a defensible, data-backed condition picture — not just an engineer's impression — needs a structural audit.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Does a structural audit require the building to be vacated? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">No — the standard visual and NDT survey is conducted with the building fully occupied. Rebound hammer, UPV, covermeter, and moisture meter tests are non-invasive and cause no disruption to occupants or day-to-day building use. Invasive testing such as core drilling (50mm diameter cores for carbonation or chloride analysis) is carried out only where NDT results indicate a need, and is always agreed with occupants in advance — it can be scheduled for off-hours if preferred, takes approximately 10 minutes per core, and the hole is sealed with repair mortar immediately after extraction.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Is a structural audit mandatory — legally or for insurance? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">There is no single national law requiring periodic structural audits for private buildings in India, but GHMC and HMDA formally recommend them for all buildings over 15 years old, and several municipal bodies have made audits mandatory for buildings over 30 years. Many lenders and insurers now require a structural condition certificate for older buildings before approving rehabilitation loans or renewing building insurance — an audit report from a qualified firm satisfies this requirement. For defence and government properties (MES, CPWD, SAAP), a formal audit is a contractual prerequisite before any rehabilitation budget is released.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Can a structural audit confirm whether the building can take an additional floor? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">A structural audit establishes the current condition of the structure — concrete strength, section integrity, reinforcement cover — and this data is the essential input for any additional-floor assessment. However, confirming structural adequacy for added loading requires a separate analysis by a licensed structural engineer who uses the audit's as-built material strengths and section sizes to run load calculations. Prisci Constructions coordinates with structural consultants for these combined assessments: we provide the verified condition data; the consultant performs the adequacy calculation and certifies the findings.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How long does a structural audit take, and what do you receive at the end? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Fieldwork for a typical 4-storey residential building takes 1–2 days for a two-engineer team; larger institutional or multi-block campuses take 3–5 days. The written audit report is issued within 7–10 working days of fieldwork completion. The report includes a full element-by-element condition rating, all NDT and material test results, annotated photographs, a load assessment summary, and a prioritised schedule of recommended repairs with an estimated cost range — and is presented in person to the client's team, not simply emailed.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How much does a structural audit cost? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">A structural audit is priced at ₹15,000–75,000 depending on building size, number of floors, and the scope of testing required (visual + NDT only, or with core drilling and laboratory analysis). A single-block residential building of 4–6 floors typically falls in the ₹20,000–35,000 range. The fee includes all fieldwork, calibrated NDT equipment, core sampling, laboratory test charges where applicable, the full written report with material test results and recommendations, and a post-report presentation meeting. A detailed scope and fee proposal is provided after a free initial site assessment.</div>
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
                <div className="sp-project-name">Cantonment Building Structural Audit Programme</div>
                <div className="sp-project-loc">Military Engineering Services, Secunderabad Cantonment</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Institutional / SAAP</div>
                <div className="sp-project-name">Government Campus Condition Assessment</div>
                <div className="sp-project-loc">State Agriculture Authority, Andhra Pradesh</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Industrial / HPCL</div>
                <div className="sp-project-name">Facility Structure NDT Audit &amp; Rehabilitation Brief</div>
                <div className="sp-project-loc">HPCL Installation, Hyderabad</div>
              </div>
            </div>
          </section>

          <section className="sp-section sp-reveal">
            <div className="sp-cta">
              <div className="sp-cta-inner">
                <h2 className="sp-cta-title">Need a Structural Audit?</h2>
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
