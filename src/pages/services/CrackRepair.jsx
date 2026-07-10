import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/service-page.css';

export default function CrackRepair() {
  useScrollTop();
  useSEO({
    title: 'Crack Repair | Prisci Constructions',
    description: 'Structural and non-structural crack repair in Hyderabad. Prisci Constructions diagnoses crack causes and provides durable repairs using epoxy, polyurethane, and polymer mortar systems.',
    path: '/services/crack-repair',
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
            <Link to="/">Home</Link>
            <span className="sp-breadcrumb-sep">/</span>
            <Link to="/#verticals">Services</Link>
            <span className="sp-breadcrumb-sep">/</span>
            Crack Repair
          </div>
          <div className="sp-eyebrow">Engineering Services</div>
          <h1 className="sp-title">CRACK REPAIR</h1>
          <p className="sp-lead">Not all cracks are equal — a 0.1mm dormant shrinkage crack in a wall is categorically different from a 2mm active crack running through a load-bearing column. Prisci Constructions classifies every crack before recommending a repair method, ensuring structural cracks receive structural repair and cosmetic cracks are not over-engineered at the client's expense.</p>
          <div className="sp-hero-stats">
            <span className="sp-hero-stat"><strong>25+</strong> Years Experience</span>
            <span className="sp-hero-stat"><strong>Epoxy</strong> &amp; PU Injection</span>
            <span className="sp-hero-stat"><strong>Active vs Dormant</strong> Classification</span>
            <span className="sp-hero-stat"><strong>MES · Air India · HPCL</strong></span>
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
                <p>Cracks in concrete and masonry buildings fall into several distinct categories: plastic shrinkage cracks (appearing in fresh concrete within 24 hours); drying shrinkage cracks (weeks to months after construction); thermal movement cracks (seasonal, opening and closing with temperature); structural cracks from overloading or settlement (typically wider at one end, associated with measurable deflection); and corrosion-induced cracks (linear along the reinforcement bar direction).</p>
                <p>The repair method depends entirely on classification: dormant cracks get routed and filled with rigid epoxy mortar or flexible sealant; live (active) cracks are sealed with flexible polyurethane or bridged with an elastomeric coating; structural cracks need epoxy injection followed by surface repair. Applying the wrong method — commonly epoxy injection into a live crack — results in failure at the repair interface within months.</p>
                <p>Prisci Constructions has repaired cracks in RCC frames, masonry walls, plaster surfaces, and water-retaining structures across Hyderabad and South India since 1999. Our crack survey documentation includes width, length, orientation, and activity — all required inputs for selecting the correct protocol.</p>
              </div>
              <div>
                <ul className="sp-stat-list">
                  <li className="sp-stat-item">
                    <strong className="sp-stat-label">Crack Classification First</strong>
                    <span className="sp-stat-desc">Activity (dormant vs. live), structural significance, and measured width all assessed before any repair method is selected.</span>
                  </li>
                  <li className="sp-stat-item">
                    <strong className="sp-stat-label">Optical Crack Gauge</strong>
                    <span className="sp-stat-desc">Crack width measured with a calibrated optical comparator gauge — not estimated by eye.</span>
                  </li>
                  <li className="sp-stat-item">
                    <strong className="sp-stat-label">Demec Gauge Monitoring</strong>
                    <span className="sp-stat-desc">Demountable mechanical (Demec) gauges installed at suspect-active cracks and monitored over 3–4 weeks before repair commitment.</span>
                  </li>
                  <li className="sp-stat-item">
                    <strong className="sp-stat-label">Masonry &amp; Plaster Cracks</strong>
                    <span className="sp-stat-desc">Non-structural wall and plaster cracks treated with polymer-modified bonding agent and fibre-mesh reinforced render for permanent cosmetic repair.</span>
                  </li>
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
              <li>Diagonal cracks at corners of doors and windows in masonry walls — recurring each monsoon season</li>
              <li>Structural cracks through RCC columns or beams with corrosion staining or visible rebar exposure</li>
              <li>Map cracking (crazing) on concrete surfaces from plastic shrinkage or alkali-silica reaction</li>
              <li>Active cracks seeping water in retaining walls, basement walls, and water-retaining tanks</li>
              <li>Long horizontal cracks in masonry below beam or slab line from differential deflection</li>
              <li>Recurring plaster cracks at slab-wall junctions that reappear within a year of every re-plaster attempt</li>
            </ul>
          </section>

          <section className="sp-section sp-reveal" id="sp-causes">
            <div className="sp-section-header">
              <span className="sp-section-idx">03</span>
              <h2 className="sp-section-title">Root <span className="accent">Causes</span></h2>
            </div>
            <ul className="sp-causes-list">
              <li>Differential foundation settlement causing racking distortion of the structural frame and infill walls</li>
              <li>Thermal movement at the slab-wall interface — concrete slab expands and contracts differently from masonry infill</li>
              <li>Drying shrinkage of concrete or mortar during initial curing — higher water-cement ratio increases shrinkage significantly</li>
              <li>Overloading of structural elements beyond design capacity — flexural and shear cracking in beams and columns</li>
              <li>Rebar corrosion expansion splitting the concrete cover longitudinally along the bar direction</li>
              <li>Alkali-silica reaction (ASR) in concrete made with reactive silica aggregates — random map cracking pattern</li>
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
                <p className="sp-step-desc">Every crack is measured (width, length, depth, orientation), photographed, and classified as dormant or active. Structural elements are assessed with rebound hammer. Demec points are installed at suspect-active cracks for monitoring before repair. A crack survey drawing is produced for the full structure.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">02</div>
                <div className="sp-step-title">Design</div>
                <p className="sp-step-desc">Repair method is selected per crack type: rigid epoxy mortar for dormant structural cracks; flexible PU sealant for active movement cracks; epoxy injection for fine structural cracks less than 0.5mm wide; polymer-modified render with fibre-mesh for masonry and plaster cracks. A complete repair schedule is issued before work begins.</p>
              </div>
              <div className="sp-approach-step">
                <div className="sp-step-num">03</div>
                <div className="sp-step-title">Execute</div>
                <p className="sp-step-desc">Cracks are routed, cleaned, and treated per the specified method with the correct product. Critical structural cracks are addressed first. All repairs are photographed and logged in a crack repair register. A post-repair check at 3 months confirms no recurrence in dormant cracks and sealant integrity in active ones.</p>
              </div>
            </div>
          </section>

          <section className="sp-section sp-reveal" id="sp-materials">
            <div className="sp-section-header">
              <span className="sp-section-idx">05</span>
              <h2 className="sp-section-title">Materials <span className="accent">Used</span></h2>
            </div>
            <p className="sp-materials-intro">Crack repair materials span from low-viscosity epoxies for fine structural cracks to flexible MS polymer sealants for movement-active cracks — product selection is determined solely by crack classification, not by convenience or cost preference.</p>
            <div className="sp-materials">
              <span className="sp-material-tag">Sika Sikadur 52 (Low-Viscosity Epoxy)</span>
              <span className="sp-material-tag">BASF MasterInject 1315 (Epoxy Injection)</span>
              <span className="sp-material-tag">Fosroc Nitoprime 25 (Crack Primer)</span>
              <span className="sp-material-tag">Fosroc Nitoseal MS600 (MS Polymer Sealant)</span>
              <span className="sp-material-tag">Sika Sikaflex 11FC (PU Sealant)</span>
              <span className="sp-material-tag">Dr. Fixit Crack-X Paste</span>
              <span className="sp-material-tag">BASF MasterEmaco S488 (Mortar Fill)</span>
              <span className="sp-material-tag">Fosroc Renderoc LA (Fine Repair Mortar)</span>
              <span className="sp-material-tag">Sika SikaWall (Polymer Render)</span>
              <span className="sp-material-tag">Alkali-Resistant Fibre Mesh Tape (65g/m²)</span>
              <span className="sp-material-tag">Sunanda Polyseal (Joint Sealant)</span>
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
                  <h4>Crack Survey &amp; Classification</h4>
                  <p>All cracks are measured with an optical crack gauge comparator, photographed, and classified by location (structural vs. non-structural), width (below 0.2mm, 0.2–0.5mm, above 0.5mm), orientation, and activity (confirmed by monitoring or crack plaster tell-tales). Classification drives the repair specification — this step is non-negotiable.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">02</div>
                <div className="sp-process-body">
                  <h4>Crack Routing (Surface Cracks)</h4>
                  <p>Surface cracks to be sealed are routed with an angle grinder or crack chaser to create a uniform 10–20mm wide, 15–20mm deep channel with vertical sides. Routing removes loose material at crack edges and creates a geometrically consistent channel that sealant can fill and bond reliably — unrouted cracks with feather edges cannot be durably sealed.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">03</div>
                <div className="sp-process-body">
                  <h4>Cleaning &amp; Drying</h4>
                  <p>Routed channels and injection-port drill holes are blown clean with oil-free compressed air. All dust, loose aggregate, and any existing paint or coating are removed from crack faces. For epoxy injection, the substrate must be completely dry; PU sealants tolerate damp but not actively flowing water at the time of application.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">04</div>
                <div className="sp-process-body">
                  <h4>Repair Application — Method-Specific</h4>
                  <p>Dormant structural cracks: epoxy injection (Sika Sikadur 52) pumped from lowest port upward, confirming travel through the full crack depth at adjacent ports. Active-movement cracks: backer rod inserted and flexible PU sealant (Sikaflex 11FC) or MS polymer (Nitoseal MS600) gun-applied and tooled to a concave profile. Masonry and plaster cracks: V-groove cut, fibre-mesh tape embedded in bonding slurry, skim-coated with polymer render.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">05</div>
                <div className="sp-process-body">
                  <h4>Surface Reinstatement</h4>
                  <p>On RCC elements, repaired surfaces are ground flush and a fairing coat (Fosroc Nitomortar FC or BASF MasterEmaco) is applied to a smooth, colour-matched finish. On plastered walls, the repair area is re-plastered and textured to blend with the surrounding finish. Anti-carbonation protective coating is applied over structural element repairs to prevent halo-effect corrosion.</p>
                </div>
              </div>
              <div className="sp-process-step">
                <div className="sp-process-num">06</div>
                <div className="sp-process-body">
                  <h4>Post-Repair Monitoring &amp; Sign-Off</h4>
                  <p>Demec gauge reference points installed at selected repairs are re-read at 1 month and 3 months after completion. Any re-opening of previously classified dormant cracks indicates the underlying cause is still active, triggering a structural re-assessment recommendation. A written monitoring report is issued to the client at each inspection visit.</p>
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
                <div className="sp-faq-q">How do I know if a crack is structural (dangerous) or just cosmetic? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Structural cracks are typically wider than 3mm, are located on load-bearing members such as columns, beams, or structural walls, and are often accompanied by visible deflection, displacement, or progressive widening over time. Corrosion staining, rebar exposure, or a crack that runs continuously through the full depth of a structural element are further warning signs that require immediate professional assessment. Cosmetic cracks are hairline shrinkage cracks in plaster or non-structural infill walls — they do not widen significantly and are not associated with any load-carrying element. When in doubt, engage a qualified engineer for a crack survey before dismissing any crack as cosmetic; Prisci Constructions provides site assessments for qualifying structures.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Why do cracks keep coming back after painting or plastering over them? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Paint and ordinary plaster are rigid materials that form a thin, inflexible film over the crack surface — they cannot accommodate even minor movement. Buildings expand and contract with every seasonal temperature change, opening and closing cracks by fractions of a millimetre; this is enough to fracture a paint or plaster bridge within one or two cycles. The correct fix is to route the crack, insert a backer rod, and fill with a flexible sealant — or apply a crack-bridging elastomeric coating rated for at least 300% elongation — so the repair moves with the structure rather than fighting it. Simply repainting or re-plastering without addressing the underlying movement will always result in recurrence.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">What is the correct repair method for a moving (live) crack vs. a dormant crack? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">A dormant crack that has stopped moving is repaired with a rigid material — routed, cleaned, and filled with epoxy mortar, or injected with low-viscosity epoxy resin that bonds the two faces into a monolithic element. A live (active) crack is still experiencing seasonal or load-induced movement and must be sealed with a flexible material: a polyurethane or MS polymer sealant over a backer rod, or a crack-bridging elastomeric surface coating. Applying rigid epoxy into a live crack is one of the most common errors — the hardened epoxy creates a brittle bridge that fractures at the repair interface within months when the crack moves again. Confirming dormancy using Demec gauge monitoring over 3–4 weeks is the reliable basis for choosing between rigid and flexible repair.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Can cracks allow water to enter the building? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Yes — any crack that penetrates through the full thickness of an external wall, slab, or roof element creates a direct pathway for rainwater, and even fine cracks as narrow as 0.2mm can channel water by capillary action. In Hyderabad's heavy monsoon season, sustained driving rain exploits even hairline cracks in external renders, leading to dampness, efflorescence, and eventual reinforcement corrosion inside the structure. Waterproofing and crack repair are therefore closely linked: sealing a crack without applying a protective surface membrane leaves the repair vulnerable to water re-entry at the same location. Prisci Constructions assesses water ingress risk as part of every crack survey and recommends combined crack and waterproofing treatment where required.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">Do you provide a warranty on crack repair work? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Yes. Prisci Constructions provides a written warranty on all crack repair work, with the warranty period defined in the contract based on the repair method and crack classification. Dormant structural crack injection and rigid surface repairs carry a standard 3-year material and workmanship warranty. Active-movement crack sealant repairs carry a 1-year warranty, as sealant service life depends on UV exposure and movement amplitude — factors partly outside the contractor's control. The warranty is supported by our 3-month post-repair monitoring visit and the written crack repair register we maintain for every project.</div>
              </div>
              <div className="sp-faq-item">
                <div className="sp-faq-q">How much does crack repair cost? <span className="sp-faq-chevron">+</span></div>
                <div className="sp-faq-a">Crack repair is typically priced per running metre (RMT) of crack treated, with rates ranging from approximately ₹150 to ₹500 per RMT depending on crack depth and width, the repair method required (flexible sealant vs. epoxy injection), and site access conditions. Narrow surface cracks in plaster treated with sealant fall at the lower end of this range; deep structural cracks requiring epoxy injection, scaffolding access, and surface reinstatement fall at the higher end. An accurate cost cannot be determined without a site survey — contact us to arrange an assessment and we will provide a detailed, itemised quotation.</div>
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
                <div className="sp-project-name">Multi-Block Barracks Crack Survey &amp; Repair</div>
                <div className="sp-project-loc">Military Engineering Services, Hyderabad Cantonment</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Institutional / SAAP</div>
                <div className="sp-project-name">Government Office Building Facade Crack Repair</div>
                <div className="sp-project-loc">SAAP Offices, Andhra Pradesh</div>
              </div>
              <div className="sp-project-card">
                <div className="sp-project-cat">Residential</div>
                <div className="sp-project-name">High-Rise Apartment Settlement Crack Remediation</div>
                <div className="sp-project-loc">Manikonda / Puppalaguda, Hyderabad</div>
              </div>
            </div>
          </section>

          <section className="sp-section sp-reveal">
            <div className="sp-cta">
              <div className="sp-cta-inner">
                <h2 className="sp-cta-title">Need Crack Repair?</h2>
                <p className="sp-cta-desc">Our engineers respond within 24 hours. Free site assessment available for qualifying projects.</p>
                <div className="sp-cta-btns">
                  <Link to="/#contact" className="btn-primary">Book a Site Inspection</Link>
                  <a href="https://wa.me/message/7CSIOQ57SPOLL1" className="btn-ghost" target="_blank" rel="noreferrer">WhatsApp Us</a>
                  <a href="tel:+919000126099" className="btn-ghost">Call +91 90001 26099</a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
}
