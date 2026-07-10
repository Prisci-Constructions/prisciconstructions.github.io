import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/service-page.css';

export default function ExpansionJointTreatment() {
  useScrollTop();
  useSEO({
    title: 'Expansion Joint Treatment | Prisci Constructions',
    description: 'Expert expansion joint sealing in Hyderabad — polysulfide, polyurethane, silicone, and EPDM compression seals for RCC structures. Prisci Constructions since 1999.',
    path: '/services/expansion-joint-treatment',
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
        <div className="container">
          <nav className="sp-subnav-inner">
            <a href="#sp-overview" className="sp-subnav-link">Overview</a>
            <a href="#sp-problems" className="sp-subnav-link">Problems</a>
            <a href="#sp-causes" className="sp-subnav-link">Causes</a>
            <a href="#sp-approach" className="sp-subnav-link">Approach</a>
            <a href="#sp-materials" className="sp-subnav-link">Materials</a>
            <a href="#sp-process" className="sp-subnav-link">Process</a>
            <a href="#sp-faq" className="sp-subnav-link">FAQ</a>
            <a href="#sp-projects" className="sp-subnav-link">Projects</a>
          </nav>
        </div>
      </div>

      <div className="sp-hero">
        <div className="container">
          <div className="sp-hero-inner">
            <div className="sp-breadcrumb">
              <Link to="/">Home</Link>{' '}
              <span className="sp-breadcrumb-sep">›</span>{' '}
              <Link to="/#verticals">Services</Link>{' '}
              <span className="sp-breadcrumb-sep">›</span>{' '}
              Expansion Joint Treatment
            </div>
            <div className="sp-eyebrow">Waterproofing &amp; Rehabilitation</div>
            <h1 className="sp-title">EXPANSION JOINT<br />TREATMENT</h1>
            <p className="sp-lead">
              Expansion joints are intentional breaks engineered into RCC structures to allow them to breathe — to expand in summer heat, contract in winter cold, and flex during seismic events without cracking. When the sealant in these joints degrades, the entire waterproofing system is breached at its most vulnerable point. Prisci Constructions has been restoring and replacing expansion joint seals in defence structures, stadiums, industrial facilities, and commercial buildings since 1999.
            </p>
            <div className="sp-hero-stats">
              <span className="sp-hero-stat"><strong>25+</strong> Years Experience</span>
              <span className="sp-hero-stat"><strong>Polysulfide</strong> &amp; PU Systems</span>
              <span className="sp-hero-stat"><strong>MES · HPCL · SAAP</strong></span>
              <span className="sp-hero-stat"><strong>Thermal Movement</strong> Specialists</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">

        {/* 1. OVERVIEW */}
        <section className="sp-section sp-reveal" id="sp-overview">
          <div className="sp-section-header">
            <span className="sp-section-idx">01</span>
            <h2 className="sp-section-title">Overview</h2>
          </div>
          <div className="sp-grid-2">
            <div className="sp-overview-text">
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>
                An expansion joint is a deliberate, continuous gap — typically 20 to 50mm wide — cut through the full depth of an RCC structure: slab, beam, column, and wall. This gap separates the structure into independent panels that are free to move independently. Without it, thermal and seismic forces build up as internal stress and eventually crack the concrete along an unpredictable trajectory. The gap itself must be sealed with a flexible, waterproof material that can compress and extend as the joint cycles open and closed without losing adhesion or tearing.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>
                Sealants are classified by chemistry: polysulfide (two-part, chemical-resistant, long service life), polyurethane (tough, paintable, UV-sensitive), silicone (extreme UV and temperature resistance, non-paintable), and pre-formed EPDM or neoprene compression seals (mechanical seal, no adhesive required, traffic-rated). Each has a defined application environment where it outperforms the others — specifying the wrong chemistry for the condition guarantees early failure regardless of application quality.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                A 50mm wide joint running 40 metres across a roof — with a failed seal — admits more water in one monsoon than a hundred hairline cracks combined. We have rehabilitated expansion joints on MES defence buildings in Secunderabad Cantonment, HPCL petroleum storage facilities, SAAP sports stadiums, and heavy industrial structures across Telangana and Andhra Pradesh.
              </p>
            </div>
            <div className="sp-stat-list">
              <div className="sp-stat-item">
                <span className="sp-stat-label">Thermal Movement</span>
                <span className="sp-stat-desc">RCC slabs move 1–2mm per metre across a 40°C temperature swing. A 30-metre slab can cycle ±30mm annually — only a flexible sealant with a sufficient movement accommodation factor can absorb this without failure.</span>
              </div>
              <div className="sp-stat-item">
                <span className="sp-stat-label">Seismic Accommodation</span>
                <span className="sp-stat-desc">Seismic joints in high-risk zones allow adjacent structural bays to respond independently to ground motion, preventing inter-bay pounding and progressive damage.</span>
              </div>
              <div className="sp-stat-item">
                <span className="sp-stat-label">Chemical Resistance</span>
                <span className="sp-stat-desc">HPCL and petroleum facilities require sealants resistant to hydrocarbon fuels and solvents — polysulfide is the specified choice in these environments.</span>
              </div>
              <div className="sp-stat-item">
                <span className="sp-stat-label">Traffic-Bearing Joints</span>
                <span className="sp-stat-desc">Stadium concourses, car parks, and industrial floors need compression seals or reinforced nosing systems rated for dynamic wheel loads — liquid sealants in these positions are destroyed by abrasion within months.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROBLEMS */}
        <section className="sp-section sp-reveal" id="sp-problems">
          <div className="sp-section-header">
            <span className="sp-section-idx">02</span>
            <h2 className="sp-section-title">Common <span className="accent">Problems</span> We Solve</h2>
          </div>
          <ul className="sp-problem-list">
            <li>Water infiltrating through failed or missing expansion joint seals in roofs, terraces, and external walls, causing ceiling leakage inside occupied spaces below</li>
            <li>Delaminated or hardened sealant that has lost adhesion to the joint faces and no longer forms a watertight seal despite appearing visually intact from above</li>
            <li>Sealant that has been over-compressed or bridged with rigid cement filler, preventing the joint from functioning and causing concrete spalling at the joint edges</li>
            <li>Compression seals in stadium and industrial floors that have extruded out of their groove or have shrunk and pulled away from joint walls, creating trip hazards</li>
            <li>Water tracking horizontally through failed wall joint sealant and emerging metres away from the joint — misdiagnosed as general seepage until the joint is inspected</li>
            <li>Vegetation growth from seeds lodged in degraded sealant — roots accelerate joint face deterioration and widen the gap progressively over successive monsoon seasons</li>
          </ul>
        </section>

        {/* 3. CAUSES */}
        <section className="sp-section sp-reveal" id="sp-causes">
          <div className="sp-section-header">
            <span className="sp-section-idx">03</span>
            <h2 className="sp-section-title">Root <span className="accent">Causes</span></h2>
          </div>
          <ul className="sp-causes-list">
            <li>UV degradation of polyurethane sealants on exposed roofs and facades — UV radiation crosslinks the polymer, causing surface chalking and cracking within 7–10 years without a UV-stable protective coating over it</li>
            <li>Wrong sealant chemistry for the application — a standard polyurethane in a chemical plant exposed to hydrocarbons, or a low movement accommodation factor sealant in a long-span structure where joint movement exceeds the product's rated range</li>
            <li>Inadequate joint preparation before sealing — failure to remove the old sealant fully, prime the joint faces, or install a correctly sized backer rod results in three-sided adhesion that prevents the sealant from elongating properly and causes tearing</li>
            <li>Backer rod omitted or wrong diameter — without the backer rod controlling sealant depth to the 2:1 width-to-depth ratio, the sealant develops stress concentrations at its bond line that cause premature adhesion or cohesive failure</li>
            <li>Differential settlement between adjacent structural bays exceeding the designed movement — one bay settles more than the other, permanently stretching the joint sealant beyond its elastic limit and breaking the seal</li>
            <li>Rigid filler packed into the joint gap instead of a proper sealant — cement mortar or plain concrete infill is common in older buildings; it cracks as the joint moves, provides no waterproofing, and causes concrete edge spalling</li>
          </ul>
        </section>

        {/* 4. APPROACH */}
        <section className="sp-section sp-reveal" id="sp-approach">
          <div className="sp-section-header">
            <span className="sp-section-idx">04</span>
            <h2 className="sp-section-title">Our <span className="accent">Approach</span></h2>
          </div>
          <div className="sp-approach-steps">
            <div className="sp-approach-step">
              <div className="sp-step-num">01</div>
              <div className="sp-step-title">Assess</div>
              <p className="sp-step-desc">We measure the joint width, document the existing sealant condition (adhesion loss, cohesive cracking, hardness, contamination), assess the joint face concrete for spalling or delamination, and identify the structure's temperature range and expected movement. Chemical exposure — fuel, solvent, acid — is confirmed with the client. This assessment determines sealant chemistry, required movement accommodation factor, and primer selection before any material is specified.</p>
            </div>
            <div className="sp-approach-step">
              <div className="sp-step-num">02</div>
              <div className="sp-step-title">Specify</div>
              <p className="sp-step-desc">Sealant is selected from polysulfide (chemical-resistant, two-part, for industrial and petroleum environments), polyurethane (tough, cost-effective, UV-sensitive, for building facades and roofs), silicone (UV and temperature-stable, non-paintable, for facades and high-temperature settings), or pre-formed EPDM compression seal (traffic-bearing joints, stadium decks, car parks). Backer rod size is calculated at 25% larger than joint width for correct compression. Primer compatibility is confirmed with the substrate.</p>
            </div>
            <div className="sp-approach-step">
              <div className="sp-step-num">03</div>
              <div className="sp-step-title">Execute</div>
              <p className="sp-step-desc">Old sealant is fully removed by angle grinder, cold chisel, or joint saw — no residue is left on the joint faces. Faces are ground clean, solvent-wiped, and primed. Backer rod is installed at the correct depth to set the 2:1 sealant width-to-depth ratio. Sealant is applied, tooled to a concave profile ensuring two-face adhesion only, and protected from traffic and rain during cure. For compression seals, the groove is cleaned and the seal inserted with lubricant to the specified compression ratio.</p>
            </div>
          </div>
        </section>

        {/* 5. MATERIALS */}
        <section className="sp-section sp-reveal" id="sp-materials">
          <div className="sp-section-header">
            <span className="sp-section-idx">05</span>
            <h2 className="sp-section-title">Materials <span className="accent">Used</span></h2>
          </div>
          <p className="sp-materials-intro">Sealant selection is an engineering decision based on joint movement, chemical exposure, substrate, temperature range, and traffic. We specify the correct material for the condition, not the most commonly available one. All products are sourced with current technical data sheets and batch traceability.</p>
          <div className="sp-materials">
            <span className="sp-material-tag">Fosroc Thioflex 600 (Polysulfide)</span>
            <span className="sp-material-tag">Sika Sikaflex-11FC (1-Part PU)</span>
            <span className="sp-material-tag">Sika Sikaflex-291 (Marine-Grade PU)</span>
            <span className="sp-material-tag">BASF MasterSeal NP 472 (PU Sealant)</span>
            <span className="sp-material-tag">Tremco Spectrem 2 (Silicone)</span>
            <span className="sp-material-tag">STP Bitumat EPDM Compression Seals</span>
            <span className="sp-material-tag">Closed-Cell PE Backer Rod (10–50mm)</span>
            <span className="sp-material-tag">Fosroc Nitoprime (Concrete Primer)</span>
            <span className="sp-material-tag">Sika Primer-3N (Multi-Surface Primer)</span>
            <span className="sp-material-tag">BASF MasterSeal P 770 (Concrete Primer)</span>
          </div>
        </section>

        {/* 6. PROCESS */}
        <section className="sp-section sp-reveal" id="sp-process">
          <div className="sp-section-header">
            <span className="sp-section-idx">06</span>
            <h2 className="sp-section-title">Our <span className="accent">Process</span></h2>
          </div>
          <div className="sp-process">
            <div className="sp-process-step">
              <div className="sp-process-num">01</div>
              <div className="sp-process-body">
                <h4>Joint Survey &amp; Movement Calculation</h4>
                <p>All expansion joints on the structure are mapped and recorded — width, depth, current sealant condition, and traffic classification. Where design documents are available, the design movement is confirmed. Where they are not, movement is estimated from span length, material, and the local temperature range. Joints with existing compression seals are measured against the groove dimensions specified by the seal manufacturer to confirm they are still within tolerance.</p>
              </div>
            </div>
            <div className="sp-process-step">
              <div className="sp-process-num">02</div>
              <div className="sp-process-body">
                <h4>Old Sealant Removal</h4>
                <p>Existing sealant is removed completely using a joint saw, cold chisel, and wire brush. No residue of the old sealant is left on the joint faces — even a thin film prevents adhesion of the new sealant. Rigid cement mortar infill is carefully broken out without damaging the joint edges. For compression seals, the groove is cleaned of all debris and the old seal extracted by hand or pry bar. Joint faces are inspected for concrete spalling or edge damage before proceeding.</p>
              </div>
            </div>
            <div className="sp-process-step">
              <div className="sp-process-num">03</div>
              <div className="sp-process-body">
                <h4>Joint Face Repair</h4>
                <p>Spalled or damaged joint edges are rebuilt with a fast-setting epoxy mortar (Fosroc Nitomortar or equivalent) to restore the correct joint width and provide a sound, plumb surface for sealant adhesion. Edges are re-cut square with a diamond blade if required. Repaired faces are cured to the manufacturer's specified minimum strength before priming proceeds — applying sealant over green repair mortar causes adhesion failure at the repair-concrete interface.</p>
              </div>
            </div>
            <div className="sp-process-step">
              <div className="sp-process-num">04</div>
              <div className="sp-process-body">
                <h4>Priming</h4>
                <p>Joint faces are blown clean with compressed air and wiped with a solvent-dampened cloth to remove all dust and surface contamination. The manufacturer-specified primer is applied to both faces by brush and allowed to reach the specified tack-free window before sealant application commences. Priming is not optional for polysulfide or polyurethane systems — it is the mechanism by which the sealant bonds to the concrete substrate. Omitting it reduces adhesion life from decades to months.</p>
              </div>
            </div>
            <div className="sp-process-step">
              <div className="sp-process-num">05</div>
              <div className="sp-process-body">
                <h4>Backer Rod Installation &amp; Sealant Application</h4>
                <p>Closed-cell polyethylene backer rod (sized 25% larger than the joint width for correct compression) is inserted to set the sealant depth so the width-to-depth ratio is 2:1. The backer rod also prevents three-sided adhesion, which would restrain the sealant from elongating freely under joint movement and cause cohesive tearing at the centre of the bead. Sealant is gunned into the joint in a continuous bead from one end, tooled to a smooth concave profile pressing against both faces, and finished flush with or slightly below the concrete surface to shed water away from the joint.</p>
              </div>
            </div>
            <div className="sp-process-step">
              <div className="sp-process-num">06</div>
              <div className="sp-process-body">
                <h4>Curing, Protection &amp; Final Inspection</h4>
                <p>Freshly applied sealant is protected from rain (24–48 hours minimum), foot traffic (48–72 hours), and vehicular traffic (7 days for polyurethane; per data sheet for polysulfide and silicone). Final inspection confirms continuous adhesion along both faces with no lifting or voids, correct concave profile, and complete coverage of every joint run. A photographic record of all completed joints and the materials data sheets are provided to the client as part of the handover documentation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="sp-section sp-reveal" id="sp-faq">
          <div className="sp-section-header">
            <span className="sp-section-idx">07</span>
            <h2 className="sp-section-title">Frequently Asked <span className="accent">Questions</span></h2>
          </div>
          <div className="sp-faq">
            <div className="sp-faq-item">
              <div className="sp-faq-q">Why is my expansion joint leaking even though it looked sealed? <span className="sp-faq-chevron">+</span></div>
              <div className="sp-faq-a">The most common cause is sealant that has aged past its serviceable life — the polymer hardens, loses elasticity, and pulls away from the joint faces as the structure moves through its seasonal thermal cycle. Once adhesion breaks at even one point along the run, water tracks along the back face of the sealant and enters the structure far from where the break is visible. A secondary cause is the absence of a slope or drainage channel at the joint, so standing water on a flat roof or terrace sits directly over the joint for extended periods, accelerating deterioration. In older buildings, the joint may never have had a proper sealant at all — cement mortar packing is common, and it cracks the first time the joint moves.</div>
            </div>
            <div className="sp-faq-item">
              <div className="sp-faq-q">Can the new sealant be applied over the old without removing it? <span className="sp-faq-chevron">+</span></div>
              <div className="sp-faq-a">No — this is the single most common reason expansion joint repairs fail prematurely. When new sealant is applied over old, it bonds to the surface of the degraded material rather than to the concrete joint face. That bond is to a non-structural, already-failed base, so the new bead loses adhesion at the first movement cycle, often within one monsoon season. The old sealant must be completely removed by joint saw, cold chisel, and wire brush before new material is applied — no residue, no shortcuts. We explain this to every client upfront because removal adds time and cost to the programme, but it is the only approach that delivers a durable result.</div>
            </div>
            <div className="sp-faq-item">
              <div className="sp-faq-q">Which sealant material is right for my joint — polyurethane, polysulfide, or an EPDM compression seal? <span className="sp-faq-chevron">+</span></div>
              <div className="sp-faq-a">The right chemistry depends on the joint's location, movement range, and exposure. Polyurethane (PU) — such as Sika Sikaflex-11FC or BASF MasterSeal NP 472 — is specified for internal building joints, protected wall joints, and roofs where UV exposure is managed with a protective coating; it is cost-effective and easy to apply. Polysulfide (e.g., Fosroc Thioflex 600) is the correct choice for horizontal and wet-area joints, including rooftop terraces, chemical plant bunds, and petroleum storage facilities, because of its superior resistance to standing water, fuel, and solvents. EPDM pre-formed compression seals are used for high-movement structural joints in traffic-bearing surfaces — stadium concourses, car park decks, and industrial floors — where abrasion from wheel loads or foot traffic would destroy a liquid-applied sealant within months. Specifying the wrong material for the exposure class guarantees early failure regardless of application quality.</div>
            </div>
            <div className="sp-faq-item">
              <div className="sp-faq-q">How long does a correctly installed expansion joint sealant last? <span className="sp-faq-chevron">+</span></div>
              <div className="sp-faq-a">Service life depends on sealant chemistry, UV exposure, thermal movement cycling, and chemical environment. Polysulfide in a protected industrial environment typically lasts 20–25 years. Polyurethane on a fully exposed Hyderabad roof — cycling through 45°C summers and monsoon saturation — typically gives 8–12 years before UV degradation requires replacement; with a UV-stable topcoat, this extends significantly. EPDM compression seals correctly sized and installed last 15–20 years before the rubber loses its resilience. We recommend joint sealant inspection every five years so planned replacement can be scheduled before a seal fails entirely — a failed joint in one monsoon admits more water than the cost of its seal many times over.</div>
            </div>
            <div className="sp-faq-item">
              <div className="sp-faq-q">Do you provide a warranty on expansion joint treatment work? <span className="sp-faq-chevron">+</span></div>
              <div className="sp-faq-a">Yes. Prisci Constructions provides a written warranty on all expansion joint treatment work covering both material performance and workmanship. The warranty period and specific terms depend on the sealant system specified and the site conditions, and are documented in the contract before work commences. Our warranty is backed by 25 years of completed projects across defence, petroleum, and infrastructure sectors — we stand behind the work because our reputation in Hyderabad depends on it. Warranty documentation, product data sheets, and a photographic record of completed joints are provided as part of every project handover package.</div>
            </div>
            <div className="sp-faq-item">
              <div className="sp-faq-q">How much does expansion joint treatment cost? <span className="sp-faq-chevron">+</span></div>
              <div className="sp-faq-a">Expansion joint treatment is priced per running metre (RMT) of joint treated. Indicative rates range from approximately ₹400 per RMT for a narrow internal joint sealed with a single-part polyurethane, up to ₹1,200 per RMT or more for a wide external joint requiring two-part polysulfide, extensive joint face repair, and a backer rod system. The key variables are joint width, sealant chemistry specified, degree of old sealant and edge damage, and site access. An accurate quote is only possible after a site survey — our engineers assess the joint condition, measure the run lengths, and provide a fixed-price proposal. Contact us to arrange a survey; most expansion joint assessments are completed in a single visit.</div>
            </div>
          </div>
        </section>

        {/* 8. PROJECTS */}
        <section className="sp-section sp-reveal" id="sp-projects">
          <div className="sp-section-header">
            <span className="sp-section-idx">08</span>
            <h2 className="sp-section-title">Related <span className="accent">Projects</span></h2>
          </div>
          <div className="sp-projects">
            <div className="sp-project-card">
              <div className="sp-project-cat">Defence / MES</div>
              <div className="sp-project-name">Expansion Joint Sealing — Administrative &amp; Residential Buildings</div>
              <div className="sp-project-loc">Military Engineering Services, Secunderabad Cantonment</div>
            </div>
            <div className="sp-project-card">
              <div className="sp-project-cat">Industrial / HPCL</div>
              <div className="sp-project-name">Polysulfide Joint Sealing — Tank Farm &amp; Bund Areas</div>
              <div className="sp-project-loc">HPCL Petroleum Facility, Hyderabad</div>
            </div>
            <div className="sp-project-card">
              <div className="sp-project-cat">Sports Infrastructure / SAAP</div>
              <div className="sp-project-name">Stadium Concourse &amp; Deck Expansion Joint Treatment</div>
              <div className="sp-project-loc">Sports Authority of Andhra Pradesh</div>
            </div>
            <div className="sp-project-card">
              <div className="sp-project-cat">Industrial</div>
              <div className="sp-project-name">Factory Floor &amp; Loading Bay Compression Seal Replacement</div>
              <div className="sp-project-loc">Heavy Manufacturing Facility, Patancheru, Telangana</div>
            </div>
            <div className="sp-project-card">
              <div className="sp-project-cat">Defence / MES</div>
              <div className="sp-project-name">Roof Terrace Expansion Joint Waterproofing — Multi-Block</div>
              <div className="sp-project-loc">Military Engineering Services, Trimulgherry</div>
            </div>
            <div className="sp-project-card">
              <div className="sp-project-cat">Industrial</div>
              <div className="sp-project-name">Warehouse Apron &amp; Internal Floor Joint Sealing</div>
              <div className="sp-project-loc">Logistics Park, Shamshabad, Hyderabad</div>
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="sp-section">
          <div className="sp-cta">
            <div className="sp-cta-inner">
              <h2 className="sp-cta-title">Expansion Joint Leaking?</h2>
              <p className="sp-cta-desc">Our engineers assess the joint, specify the correct sealant chemistry, and execute the full removal-and-replacement in a single mobilisation. Contact us for a site assessment — most joint surveys are completed within one visit.</p>
              <div className="sp-cta-btns">
                <a href="https://wa.me/message/7CSIOQ57SPOLL1" className="btn-primary" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                <a href="tel:+919000126099" className="btn-ghost">Call +91 90001 26099</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
