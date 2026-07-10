import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/service-page.css';

export default function ConcreteRepair() {
  useScrollTop();
  useSEO({
    title: 'Concrete Repair | Prisci Constructions',
    description: 'Expert concrete repair in Hyderabad — spalling, honeycombing, delamination, and surface scaling treated using Fosroc Renderoc, BASF MasterEmaco, Sika MonoTop, and Pidilite Dr. Fixit systems. Prisci Constructions, est. 1999.',
    path: '/services/concrete-repair',
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
            <span>Concrete Repair</span>
          </div>
          <div className="sp-eyebrow">Specialist Repair Services</div>
          <h1 className="sp-title">CONCRETE REPAIR</h1>
          <p className="sp-lead">Spalling concrete, honeycombing, delamination, and surface scaling are not cosmetic problems — they are visible signs of active deterioration that will accelerate with every monsoon season until the structure is compromised. Prisci Constructions has diagnosed and repaired concrete defects across defence installations, aviation facilities, municipal infrastructure, and industrial plants throughout Telangana and Andhra Pradesh since 1999, using only pre-engineered polymer-modified repair systems and carbonation treatment protocols that produce durable results.</p>
          <div className="sp-hero-stats">
            <span className="sp-hero-stat"><strong>25+</strong> Years Experience</span>
            <span className="sp-hero-stat"><strong>BS EN 1504</strong> Systems</span>
            <span className="sp-hero-stat"><strong>MES · HPCL · Kurnool MC</strong></span>
            <span className="sp-hero-stat"><strong>Pull-Off Tested</strong> Repairs</span>
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
                <p>Concrete repair covers a broad range of interventions — from shallow surface defect rectification (surface scaling, honeycombing, pop-outs) to deep structural patch repairs of spalled columns and beams where reinforcement has corroded through. The common requirement across all these defect types is that a deteriorated concrete section must be removed, the substrate prepared to a sound and clean base, exposed reinforcement treated where present, and the void reinstated with a repair mortar that bonds durably to the parent concrete and matches or exceeds its original structural and durability properties.</p>
                <p>Prisci Constructions specifies polymer-modified cementitious repair mortars — from Fosroc's Renderoc range, BASF's MasterEmaco range, Sika's MonoTop range, Pidilite Dr. Fixit, and Sunanda repair products — all pre-bagged, factory-controlled systems with published tensile bond strength, compressive strength, and carbonation resistance data. Site-mixed cement-sand mortars are never used for structural or semi-structural repair; they shrink on curing, debond from the substrate within 2–5 years, and offer no corrosion protection to the reinforcement beneath.</p>
                <p>Where carbonation is identified as the underlying cause of corrosion, repair mortar alone is only half the solution. After patching, an anti-carbonation protective coating is applied to all concrete surfaces on the repaired structure — not just the patched areas. This arrests the advancing carbonation front in the surrounding sound concrete and prevents the well-documented "halo effect," where new corrosion initiates in a ring around repairs within 5–10 years of the original work.</p>
              </div>
              <div className="sp-stat-list">
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Pre-Engineered Systems Only</div>
                  <div className="sp-stat-desc">All repair mortars are pre-bagged, factory-controlled products with documented compressive and bond strength data — no site-mixed cement-sand substitutes, ever.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Root-Cause Diagnosis First</div>
                  <div className="sp-stat-desc">The cause of deterioration — carbonation, chloride attack, honeycombing, or mechanical damage — is established before any repair work is specified or priced.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">25+ Years Across Demanding Clients</div>
                  <div className="sp-stat-desc">Concrete repair executed for MES, HPCL, Air India, Kurnool Municipal Corporation, and SAAP since 1999 — clients who require documented quality systems and pull-off test records.</div>
                </div>
                <div className="sp-stat-item">
                  <div className="sp-stat-label">Full-Surface Carbonation Treatment</div>
                  <div className="sp-stat-desc">Anti-carbonation elastomeric coating applied to all concrete surfaces after repair — including sound concrete — to prevent halo-effect corrosion recurrence.</div>
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
              <li>Concrete spalling from beam soffits, column faces, and slab edges exposing rust-stained, corroded reinforcement bars</li>
              <li>Honeycombing — interconnected voids in structural concrete from inadequate vibration during casting, leaving permeable, weak zones</li>
              <li>Delamination of the concrete cover — sections that sound hollow on tap-testing and are progressively separating from the parent body of concrete</li>
              <li>Surface scaling and aggregate pop-outs on slabs and external facades, reducing cover depth and accelerating carbonation front penetration</li>
              <li>Active cracking with rust staining at crack edges, indicating ongoing rebar corrosion driving further concrete fracture from within</li>
              <li>Construction cold joints and pour lines that never bonded, creating planes of weakness and uncontrolled water ingress paths through the structure</li>
            </ul>
          </section>

          {/* 03 Root Causes */}
          <section className="sp-section sp-reveal" id="sp-causes">
            <div className="sp-section-header">
              <span className="sp-section-idx">03</span>
              <h2 className="sp-section-title">Root <span className="accent">Causes</span></h2>
            </div>
            <ul className="sp-causes-list">
              <li>Carbonation of concrete — atmospheric CO2 reacts with calcium hydroxide, reducing the concrete pH below 9 and depassivating the protective oxide layer on steel reinforcement</li>
              <li>Chloride ingress from coastal environments, industrial process chemicals, or contaminated mix water reaching threshold concentrations at the rebar depth</li>
              <li>Inadequate concrete cover to reinforcement during original construction, allowing carbonation to reach and depassivate the steel within 10–15 years</li>
              <li>Poor original concrete quality — high water-cement ratio, low cement content, or insufficient vibration creating honeycombing and permeable sections</li>
              <li>Mechanical impact or abrasion damage in industrial and heavy-traffic areas exceeding the original concrete's surface wear resistance</li>
              <li>Construction errors — cold joints between pours, premature formwork removal before concrete gains adequate strength, or incorrect reinforcement positioning</li>
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
                <div className="sp-step-title">Assess</div>
                <p className="sp-step-desc">A systematic defect survey is completed before any repair work is specified. Visual mapping and tap-testing identify all spalled, hollow, and cracked areas. Carbonation depth is measured on core samples using phenolphthalein indicator. Rebound hammer readings confirm concrete strength. The cause of deterioration is established per defect area before the repair strategy is written.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">02</div>
                <div className="sp-step-title">Specify</div>
                <p className="sp-step-desc">The repair system is matched to the defect type and depth: thin-bed polymer-modified mortar for surface defects; thixotropic high-build mortar for overhead and vertical spall patching; form-and-pour fluid mortar for deep section reinstatement. Rebar treatment products and the final anti-carbonation protective coating are specified as part of the same repair scope — repair without protection is a short-term intervention.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">03</div>
                <div className="sp-step-title">Execute</div>
                <p className="sp-step-desc">Concrete removal is taken to a sound substrate confirmed by tap-test and rebound hammer. Reinforcement is cleaned to Sa 2.5 and treated with Fosroc Nitoprime Zincrich before mortar encapsulation. Repair mortar is applied in controlled layers per manufacturer's maximum thickness. On completion, pull-off adhesion tests are conducted and anti-carbonation coating is applied to all concrete surfaces.</p>
              </div>
            </div>
          </section>

          {/* 05 Materials Used */}
          <section className="sp-section sp-reveal" id="sp-materials">
            <div className="sp-section-header">
              <span className="sp-section-idx">05</span>
              <h2 className="sp-section-title">Materials <span className="accent">Used</span></h2>
            </div>
            <p className="sp-materials-intro">Repair mortar selection is based on defect depth, element orientation (vertical, overhead, or horizontal), and required working time. We carry a range of systems across leading manufacturers and select the appropriate product for site conditions on the day of application — not the cheapest option on the price list.</p>
            <div className="sp-materials">
              <span className="sp-material-tag">Fosroc Renderoc LA (General Repair Mortar)</span>
              <span className="sp-material-tag">Fosroc Renderoc HB40 (High Build Mortar)</span>
              <span className="sp-material-tag">Fosroc Renderoc FC (Fairing Coat)</span>
              <span className="sp-material-tag">Fosroc Nitoprime Zincrich (Rebar Primer)</span>
              <span className="sp-material-tag">Fosroc Nitobond AR (Cement Bonding Agent)</span>
              <span className="sp-material-tag">BASF MasterEmaco S488 (Polymer Modified Mortar)</span>
              <span className="sp-material-tag">BASF MasterEmaco T1100 (Overhead Thixotropic)</span>
              <span className="sp-material-tag">BASF MasterProtect 8000CI (Anti-Carbonation Coating)</span>
              <span className="sp-material-tag">Sika MonoTop-412N (Structural Repair Mortar)</span>
              <span className="sp-material-tag">Sika MonoTop-615HB (Rebar Corrosion Protection)</span>
              <span className="sp-material-tag">Pidilite Dr. Fixit Crack-X (Crack Sealing)</span>
              <span className="sp-material-tag">Sunanda Renu Crete (Repair Mortar)</span>
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
                  <h4>Defect Survey and Root-Cause Identification</h4>
                  <p>All defective areas are mapped on an elevation drawing with measured dimensions. Tap-testing extends the survey beyond the visible spall boundary to locate delaminated concrete that has not yet fallen. Carbonation depth is measured on freshly broken core faces using phenolphthalein indicator — the colourless zone confirms the carbonation front depth. Rebound hammer readings are taken across all elements to identify zones of reduced concrete strength. The output is a repair schedule with area quantities, depth classifications, and cause of deterioration per zone.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">02</div>
                <div className="sp-process-body">
                  <h4>Concrete Break-Out to Sound Substrate</h4>
                  <p>All delaminated, carbonated, and deteriorated concrete is removed by pneumatic chipping hammer or disc cutter to a sound substrate confirmed by tap-test and rebound hammer. All saw-cut or chipped edges are made perpendicular or slightly undercut — feathered edges are never accepted as they debond under thermal cycling. Where reinforcement is buried, the break-out extends to a minimum 20mm behind the bar to allow the repair mortar to fully encapsulate the rebar. Dust, loose material, and contamination are removed by high-pressure air blast.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">03</div>
                <div className="sp-process-body">
                  <h4>Reinforcement Cleaning and Section Loss Assessment</h4>
                  <p>Exposed reinforcement bars are mechanically cleaned to Sa 2.5 (near-white) standard using angle grinder or needle gun to remove all loose scale, active corrosion product, and contamination. Bar diameter is measured with a calliper to quantify section loss. Any bar with section loss exceeding 20% of cross-section is reported to the structural engineer for assessment before repair proceeds — supplementary bars may be required. Flash rusting after cleaning is addressed immediately before mortar application.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">04</div>
                <div className="sp-process-body">
                  <h4>Reinforcement Treatment with Nitoprime Zincrich</h4>
                  <p>All cleaned reinforcement is immediately coated with Fosroc Nitoprime Zincrich — a zinc-rich epoxy-modified primer that provides galvanic protection and re-establishes a passive environment around the steel surface. Two brush-applied coats are applied, each allowed to reach the specified touch-dry state before the next. This step is critical for preventing corrosion re-initiation at the repair boundary (the halo effect) and is non-negotiable in our repair specification.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">05</div>
                <div className="sp-process-body">
                  <h4>Bonding Agent Application and Repair Mortar Layering</h4>
                  <p>The concrete substrate is pre-wetted to saturated-surface-dry (SSD) condition. Fosroc Nitobond AR cement-based bonding slurry is scrubbed into the substrate and allowed to reach a tacky, not wet, state before mortar is applied. Pre-engineered polymer-modified repair mortar (Fosroc Renderoc LA, BASF MasterEmaco S488, Sika MonoTop-412N, or Sunanda Renu Crete as appropriate) is gauged strictly to the manufacturer's water ratio and applied in layers not exceeding 25mm per lift for hand application, or 50mm for thixotropic grades. Each layer is cross-hatched in the green state before the next lift. The finished surface is tooled flush to the original concrete profile.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">06</div>
                <div className="sp-process-body">
                  <h4>Curing, Pull-Off Testing, and Anti-Carbonation Coating</h4>
                  <p>Repaired surfaces are cured under wet hessian or plastic sheeting for a minimum of 7 days. After cure, pull-off adhesion tests are conducted on a sample of patches per IS 13311 — minimum 1.0 MPa acceptance for structural elements. All test results are recorded and submitted to the client. Anti-carbonation elastomeric coating (BASF MasterProtect 8000CI or Fosroc Dekguard Elastic) is then applied in two coats to all concrete surfaces on the structure — repaired and unrepaired — providing a full-surface CO2 barrier to prevent future carbonation-driven corrosion.</p>
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
                <div className="sp-faq-q">Why is the concrete on my building falling off in chunks? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">In the vast majority of cases, spalling concrete is caused by rebar corrosion working from the inside out. When atmospheric CO2 penetrates the concrete cover over many years — a process called carbonation — it lowers the concrete's pH and destroys the natural passivating oxide layer that protects the steel reinforcement. The corroding rebar expands to roughly four times its original volume, fracturing the concrete cover from within and causing the chunks you see falling. Honeycombing from poor original compaction and inadequate concrete cover depth during construction both accelerate how quickly this process reaches the steel.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Can spalled concrete just be filled with normal cement mortar? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">No — ordinary Portland cement mortar fails in concrete repair for three reasons: it shrinks significantly more than the surrounding parent concrete as it cures, creating a debonding gap at the interface; it achieves only 0.3–0.5 MPa tensile bond strength versus the 1.5–2.5 MPa required for a durable repair; and it contains no corrosion inhibitor, so the rebar beneath continues corroding regardless of how the surface looks. Polymer-modified pre-engineered repair mortars — such as Fosroc Renderoc, BASF MasterEmaco, or Sika MonoTop — are formulated to eliminate shrinkage, achieve high bond strength, and encapsulate rebar with a corrosion-resistant matrix. Site-mixed cement-sand patches typically debond and re-spall within 2–5 years; a properly executed polymer-modified repair lasts 20 years or more.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How do you decide how much concrete needs to be removed and replaced? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">We conduct a systematic defect survey before any break-out begins: all areas are tap-tested to identify hollow or delaminated concrete beyond the visible spall boundary, and carbonation depth is measured on freshly broken core faces using phenolphthalein indicator. Concrete removal then continues until a genuinely sound substrate is confirmed by tap-test and rebound hammer — not just until the loose material is gone. Where reinforcement is exposed, the break-out must extend at least 20mm behind the bar to allow the repair mortar to fully encapsulate the rebar. This is more concrete removal than clients sometimes expect, but cutting back to sound material is what determines whether the repair lasts 2 years or 20.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How long does a properly repaired concrete section last? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">A repair carried out to the correct specification — sound substrate preparation, rebar cleaned to Sa 2.5 and treated with a zinc-rich corrosion-inhibiting primer, polymer-modified mortar applied in controlled layers, and anti-carbonation coating applied across all concrete surfaces — should deliver a 20–25 year service life in the Hyderabad and Andhra Pradesh climate. The most important maintenance item is recoating the anti-carbonation barrier at 10–12 year intervals, as elastomeric coatings thin and lose CO2-barrier effectiveness with age. We provide a maintenance schedule and inspection checklist at project close-out so clients know exactly when to act.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Do you provide a warranty on concrete repair work? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Yes — Prisci Constructions provides a written warranty on all concrete repair works, covering both the repair mortar and the anti-carbonation protective coating. Warranty period and specific terms are confirmed in the contract prior to work commencing and depend on the defect type, depth, and the product system specified. The warranty is backed by our pull-off adhesion test records, material delivery receipts, and a photographic site record for every project — so there is a documented baseline if any question arises during the warranty period.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How much does concrete repair cost? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">As a general guide, concrete repair in Hyderabad ranges from approximately ₹200 to ₹600 per square foot, depending on the depth of deterioration, how much concrete requires removal, and the condition of the reinforcement — repairs where rebar has significant section loss or requires supplementary bars sit at the higher end. Surface defect rectification (shallow honeycombing, minor spalling with intact rebar) falls toward the lower end, while deep structural patch repairs with full rebar treatment and overhead access sit toward the upper end. An accurate quote requires a site survey — we carry out a free site assessment for qualifying projects in Hyderabad, Telangana, and Andhra Pradesh and provide a written repair schedule with quantities and unit rates within 48 hours.</div>
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
                <div className="sp-project-name">RCC Spall Repair and Carbonation Treatment — Barracks Blocks</div>
                <div className="sp-project-loc">Military Engineering Services, Secunderabad Cantonment</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Industrial / HPCL</div>
                <div className="sp-project-name">Structural Concrete Defect Repair — Process Plant</div>
                <div className="sp-project-loc">HPCL Installation, Hyderabad</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Municipal / Kurnool Corporation</div>
                <div className="sp-project-name">Concrete Repair and Protective Coating — Civic Infrastructure</div>
                <div className="sp-project-loc">Kurnool Municipal Corporation, Kurnool, Andhra Pradesh</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="sp-section sp-reveal">
            <div className="sp-cta">
              <div className="sp-cta-inner">
                <h2 className="sp-cta-title">Concrete Defects on Your Structure?</h2>
                <p className="sp-cta-desc">Our engineers carry out a site assessment and provide a repair specification within 48 hours. Free site visit available for qualifying projects in Hyderabad, Telangana, and Andhra Pradesh.</p>
                <div className="sp-cta-btns">
                  <a href="https://wa.me/message/7CSIOQ57SPOLL1" className="btn-primary" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
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
