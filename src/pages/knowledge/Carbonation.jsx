import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/article.css';

export default function Carbonation() {
  useScrollTop();
  useSEO({
    title: 'Carbonation of Concrete — The Silent Threat to Building Durability | Prisci Constructions',
    description: 'How CO₂ from the atmosphere destroys the alkaline protection around rebar, how to measure carbonation depth with the phenolphthalein test, and the coating systems that stop it.',
    path: '/knowledge/carbonation',
  });

  useEffect(() => {
    const links = document.querySelectorAll('.kc-toc a');
    const sections = document.querySelectorAll('.kc-article h2[id]');
    const handler = () => { let c = ''; sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) c = s.id; }); links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + c)); };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <Layout>

      <div className="kc-breadcrumb">
        <Link to="/">Home</Link>
        <span>&#8250;</span>
        <Link to="/knowledge">Knowledge Center</Link>
        <span>&#8250;</span>
        Carbonation of Concrete
      </div>

      <div className="kc-hero">
        <div className="kc-hero-inner">
          <span className="kc-category-badge structural">Structural Rehabilitation</span>
          <h1 className="kc-title">Carbonation of Concrete — The Silent Threat to Building Durability</h1>
          <p className="kc-subtitle">
            Atmospheric CO₂ slowly neutralises the alkaline environment that keeps rebar passive. By the time rust stains or spalling appear, significant chemical damage has already occurred deep inside the concrete cover. Understanding carbonation — how it progresses, how to measure it, and how to stop it — is the foundation of any intelligent structural maintenance programme.
          </p>
          <div className="kc-meta">
            <span>Structural Rehabilitation</span>
            <span className="kc-meta-dot">·</span>
            <span>8 min read</span>
            <span className="kc-meta-dot">·</span>
            <span>Prisci Constructions Engineering Team</span>
          </div>
        </div>
      </div>

      <div className="kc-layout">

        <article className="kc-article">

          <h2 id="s1">1. What Is Carbonation?</h2>
          <p>
            Carbonation is a chemical process in which carbon dioxide (CO₂) from the surrounding atmosphere diffuses through the pore network of hardened concrete and reacts with the alkaline compounds present in the cement paste. The end result is a progressive reduction in the concrete's internal pH — from the strongly alkaline level of approximately 12.5 found in fresh, sound concrete down to values below 9 in fully carbonated zones.
          </p>
          <p>
            This pH drop is the critical event. At high pH, a tightly adherent, invisible layer of iron oxides forms on the surface of embedded steel reinforcement — the so-called <strong>passive oxide film</strong>. This film is thermodynamically stable in the alkaline environment of good concrete and acts as an impermeable barrier against further corrosion. Once carbonation reduces the pH below 9, that film becomes unstable and breaks down. With moisture and oxygen present, active corrosion of the rebar begins.
          </p>
          <p>
            What makes carbonation particularly insidious is its invisibility. Unlike a roof leak that announces itself through staining or a spall that falls from a beam, carbonation leaves no external trace until the rebar begins to rust and expand — at which point the concrete cover cracks from within and the damage is already advanced.
          </p>

          <h2 id="s2">2. The Chemistry — How It Destroys Concrete</h2>
          <p>
            Fresh Portland cement concrete contains significant quantities of calcium hydroxide (Ca(OH)₂), commonly called portlandite, as a by-product of cement hydration. This compound is responsible for the concrete's high alkalinity. When CO₂ from the atmosphere dissolves into the water held within the concrete's pore system, it forms carbonic acid (H₂CO₃), which then reacts with calcium hydroxide:
          </p>
          <p style={{fontFamily:'var(--font-mono)', fontSize:'0.85rem', color:'var(--text)', background:'var(--surface)', borderLeft:'3px solid var(--border-gold)', padding:'0.85rem 1.1rem', borderRadius:'0 var(--radius) var(--radius) 0', margin:'1rem 0 1.25rem', lineHeight:1.7}}>
            CO₂ + H₂O → H₂CO₃<br />
            H₂CO₃ + Ca(OH)₂ → CaCO₃ + 2H₂O
          </p>
          <p>
            The calcium carbonate (CaCO₃) produced is relatively insoluble and precipitates within the pore structure. In early stages this can actually reduce porosity slightly — which is why buildings in the first few years of carbonation show no outward distress. However, the steady consumption of the calcium hydroxide reserve progressively depletes the alkaline buffer. Once all available Ca(OH)₂ in a zone has been consumed, the pH drops sharply.
          </p>
          <p>
            Carbonation also reacts with calcium silicate hydrate (CSH) gel — the primary binding phase in concrete — reducing it to silica gel and CaCO₃. This reaction increases drying shrinkage and microcracking in heavily carbonated zones, which in turn creates additional pathways for CO₂ and moisture ingress, accelerating the process further.
          </p>
          <p>
            The rate at which the carbonation front advances into concrete follows a <strong>square-root-of-time (√t) law</strong>: carbonation depth is proportional to the square root of exposure time. In practical terms, a concrete element with 20 mm of cover in a moderate exposure environment may take approximately 25 years to reach the rebar under normal conditions. However, that same element with lower cement content or a higher water/cement ratio may carbonise to 20 mm in as few as 10–15 years.
          </p>

          <h2 id="s3">3. Factors That Accelerate Carbonation</h2>
          <p>
            Several mix and exposure parameters govern how quickly the carbonation front advances:
          </p>
          <ul>
            <li><strong>Low cement content:</strong> Less Ca(OH)₂ reserve means the alkaline buffer is depleted faster. Lean mixes (below M20 grade) are particularly susceptible.</li>
            <li><strong>High water/cement (w/c) ratio:</strong> Excess water creates a coarser, more connected pore system that permits rapid CO₂ diffusion. Every increase of 0.1 in w/c ratio roughly doubles the diffusion coefficient.</li>
            <li><strong>Poor compaction:</strong> Honeycombing, air voids, and segregation leave open channels that bypass the cement paste matrix entirely, allowing CO₂ to reach depth far faster than in well-compacted concrete.</li>
            <li><strong>Uncoated external surfaces:</strong> Direct exposure to ambient air at CO₂ concentrations of 0.04% (outdoor) or 0.1–0.3% (enclosed or urban spaces) is the primary driver. An uncoated RCC column face carbonates several times faster than a protected one.</li>
            <li><strong>Wet-dry cycling:</strong> Carbonation is fastest at intermediate relative humidity (RH) of 50–70%. Fully saturated concrete blocks CO₂ diffusion; completely dry concrete has insufficient pore water for the reaction. Repeated wet-dry cycling — common in Hyderabad through monsoon and summer seasons — keeps the concrete alternating through the optimal carbonation range, accelerating net progress.</li>
            <li><strong>Thin or inadequate cover:</strong> IS 456 specifies minimum cover depths of 25 mm to 75 mm depending on exposure class. Where construction tolerances were not maintained, actual cover may be 10–15 mm, dramatically shortening the time to rebar.</li>
          </ul>

          <div className="kc-callout warning">
            <div className="kc-callout-label">Warning</div>
            <p>Carbonation is completely invisible. A building can look structurally sound — no cracks, no rust stains, no spalling — while the carbonation front is already at or past the rebar depth. By the time visible deterioration appears, corrosion has typically been active for years and the structural cross-section of the rebar is already reduced.</p>
          </div>

          <h2 id="s4">4. Measuring Carbonation Depth</h2>
          <p>
            Before any remedial strategy can be designed, the actual carbonation depth must be established. A reliable measurement tells you whether carbonation has reached the rebar level, how much residual concrete cover remains uncarbonated, and how urgently intervention is required.
          </p>
          <p>
            The standard field method involves drilling a core from the concrete element — or, where cores are not practical, using a cold chisel and hammer to expose a fresh fracture face — and immediately applying a chemical indicator to the freshly exposed surface. The most widely used indicator is phenolphthalein solution.
          </p>

          <div className="kc-table-wrap">
            <table className="kc-table">
              <thead>
                <tr>
                  <th>Exposure Condition</th>
                  <th>Carbonation Rate (mm/√yr)</th>
                  <th>Expected Time to 25 mm Cover</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Indoor / Sheltered (low CO₂, RH 40–60%)</td>
                  <td>1 – 2 mm/√yr</td>
                  <td>156 – 625 years</td>
                </tr>
                <tr>
                  <td>Sheltered External — no direct rain (RH 60–75%)</td>
                  <td>3 – 5 mm/√yr</td>
                  <td>25 – 70 years</td>
                </tr>
                <tr>
                  <td>Exposed External — rain + sun cycling</td>
                  <td>5 – 8 mm/√yr</td>
                  <td>10 – 25 years</td>
                </tr>
                <tr>
                  <td>Urban / Industrial (elevated CO₂, wet-dry cycling)</td>
                  <td>8 – 12 mm/√yr</td>
                  <td>4 – 10 years</td>
                </tr>
                <tr>
                  <td>Lean mix, high w/c, poor compaction — any exposure</td>
                  <td>12 – 20 mm/√yr</td>
                  <td>1.5 – 4 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{fontSize:'0.78rem', color:'var(--text-dim)', marginTop:'-0.75rem', marginBottom:'1.5rem'}}>
            Rates are indicative ranges for IS 456 M20–M30 concrete at typical Indian ambient CO₂ levels. Actual rates depend on cement type, w/c ratio, and compaction quality.
          </p>

          <h2 id="s5">5. The Phenolphthalein Test</h2>
          <p>
            The phenolphthalein test is the standard, low-cost field method for assessing carbonation depth. It is specified in RILEM recommendations and referenced in the repair guidelines of IS 9537. The test exploits the pH-sensitive colour change of phenolphthalein indicator: it remains colourless at pH below 9 and turns a distinct purple-pink at pH above 9.5.
          </p>

          <div className="kc-callout tip">
            <div className="kc-callout-label">Tip — Always Test Before You Repair</div>
            <p>Never proceed to concrete repair without first carrying out a phenolphthalein test on freshly broken or drilled surfaces across multiple locations on the element. The test costs almost nothing and takes minutes, but it determines whether you need a coating only, a partial repair, or a full spall repair with rebar treatment — choices that differ significantly in cost and scope.</p>
          </div>

          <h3>Test Procedure</h3>
          <ol style={{margin:'0.5rem 0 1rem 1.25rem', color:'var(--text-muted)'}}>
            <li style={{fontSize:'0.92rem', lineHeight:1.75, marginBottom:'0.35rem'}}>Prepare a 1% phenolphthalein solution in ethanol (1 g phenolphthalein dissolved in 100 ml of 70% ethanol).</li>
            <li style={{fontSize:'0.92rem', lineHeight:1.75, marginBottom:'0.35rem'}}>Drill a core or break out a section of concrete to expose a fresh, uncontaminated cross-section. The surface must not be wetted with water before testing.</li>
            <li style={{fontSize:'0.92rem', lineHeight:1.75, marginBottom:'0.35rem'}}>Spray or brush the indicator solution onto the freshly exposed face immediately after exposure.</li>
            <li style={{fontSize:'0.92rem', lineHeight:1.75, marginBottom:'0.35rem'}}>Observe within 30–60 seconds. The carbonated zone (low pH) remains colourless. The uncarbonated zone (high pH) turns bright purple-pink.</li>
            <li style={{fontSize:'0.92rem', lineHeight:1.75, marginBottom:'0.35rem'}}>Measure the depth of the colourless zone from the concrete surface to the colour-change boundary using a steel rule. Record multiple measurements across the exposed face.</li>
            <li style={{fontSize:'0.92rem', lineHeight:1.75, marginBottom:'0.35rem'}}>Compare the measured carbonation depth against the actual cover depth to rebar (determined by a cover meter or by careful chipping).</li>
          </ol>

          <h3>Interpreting Results</h3>
          <ul>
            <li><strong>Carbonation depth {'<'} rebar cover depth:</strong> The passive film on the rebar is still intact. Intervention is preventive — apply an anti-carbonation coating to halt further progress before the front reaches the steel.</li>
            <li><strong>Carbonation depth at rebar cover depth:</strong> Corrosion risk is high. A half-cell potential survey or visual inspection after selective breaking-out is warranted to determine whether active corrosion has initiated.</li>
            <li><strong>Carbonation depth beyond rebar cover depth:</strong> Active corrosion is likely, particularly in areas with moisture exposure. Full assessment and repair is required — coating alone is insufficient.</li>
          </ul>

          <hr className="kc-section-rule" />

          <h2 id="s6">6. Treatment Options</h2>
          <p>
            The appropriate treatment depends on whether corrosion has initiated and how advanced the deterioration is. Two distinct scenarios require different responses:
          </p>

          <h3>Scenario A — Rebar Not Yet Corroded (Preventive / Early Intervention)</h3>
          <p>
            Where the phenolphthalein test shows carbonation has not yet reached the rebar level, or has just reached it but visual and electrochemical assessment confirms no active corrosion, the intervention is straightforward: <strong>apply an anti-carbonation coating to the exterior concrete surface.</strong> This creates a physical barrier that stops further CO₂ diffusion into the concrete, halting the advance of the carbonation front.
          </p>
          <p>
            Surface preparation is still critical: all loose material, laitance, and any existing failed coatings must be removed by mechanical means (grinding, blasting, or water jetting) to a minimum ICRI CSP 3 surface profile. The coating must bond to sound, clean concrete to function as a barrier.
          </p>

          <h3>Scenario B — Rebar Corroded (Active Deterioration)</h3>
          <p>
            Where corrosion is already active, coating alone will trap moisture and corrosion products within the concrete and accelerate deterioration. The correct sequence is:
          </p>
          <ol style={{margin:'0.5rem 0 1rem 1.25rem', color:'var(--text-muted)'}}>
            <li style={{fontSize:'0.92rem', lineHeight:1.75, marginBottom:'0.35rem'}}><strong>Break out all carbonated and contaminated concrete</strong> to at least 20 mm behind the corroded rebar. Do not leave chloride-contaminated or fully carbonated concrete adjacent to the rebar.</li>
            <li style={{fontSize:'0.92rem', lineHeight:1.75, marginBottom:'0.35rem'}}><strong>Clean rebar</strong> to bright metal by grit blasting or mechanical wire brushing to SA 2.5 (ISO 8501-1). Apply a rebar primer — zinc-rich epoxy or cement-based passivating mortar — before reinstatement.</li>
            <li style={{fontSize:'0.92rem', lineHeight:1.75, marginBottom:'0.35rem'}}><strong>Reinstate concrete cover</strong> using a polymer-modified repair mortar (class R3 or R4 per EN 1504-3) that is compatible with the substrate in terms of strength, carbonation resistance, and thermal movement.</li>
            <li style={{fontSize:'0.92rem', lineHeight:1.75, marginBottom:'0.35rem'}}><strong>Apply an anti-carbonation coating</strong> over the entire element — including repaired and unrepaired surfaces — to unify protection and prevent future re-carbonation.</li>
          </ol>

          <h2 id="s7">7. Anti-Carbonation Coatings — How They Work</h2>
          <p>
            Anti-carbonation coatings are polymeric films — typically elastomeric acrylic or polyurethane systems — applied to concrete surfaces to create a CO₂-diffusion barrier. Their effectiveness is expressed through the <strong>equivalent air-layer thickness (SD value)</strong>, defined as the thickness of air that would offer the same diffusion resistance to CO₂ as the coating.
          </p>
          <p>
            A good anti-carbonation coating should have an SD value for CO₂ diffusion of <strong>50 to 100 metres</strong>. To put this in context: 100 m SD value means the coating offers the same CO₂ resistance as 100 metres of still air — equivalent to roughly 500 mm of dense concrete at typical diffusion coefficients. Even at 50 m SD, the coating extends the carbonation-free service life of the cover concrete by several decades.
          </p>

          <h3>Key Performance Requirements</h3>
          <ul>
            <li><strong>CO₂ diffusion resistance:</strong> SD (CO₂) ≥ 50 m, tested per EN ISO 1062-6.</li>
            <li><strong>Crack-bridging ability:</strong> Minimum 0.2 mm crack bridging at –10°C (Class A2 per EN 1062-7). Elastomeric systems maintain flexibility at low temperatures, spanning hairline cracks that would otherwise become CO₂ entry points.</li>
            <li><strong>Water vapour permeability:</strong> SD (H₂O) should ideally be {'< 4 m'} — the coating must resist liquid water and CO₂ while allowing water vapour to escape, to prevent blistering and delamination.</li>
            <li><strong>Adhesion:</strong> Pull-off strength ≥ 1.5 MPa on prepared concrete substrate.</li>
            <li><strong>UV resistance:</strong> External-grade acrylic or PU finishes with UV stabilisers; colour stability over 10+ year service life.</li>
          </ul>

          <h3>Application and Service Life</h3>
          <p>
            Anti-carbonation coatings are typically applied in two or three coats to achieve the specified dry film thickness (DFT) — usually 150 to 300 microns total. Application by airless spray or brush on properly prepared surfaces ensures consistent film build. The coating should be reapplied or renewed every <strong>10 to 12 years</strong>, depending on exposure severity and visible condition — chalking, micro-cracking, or loss of elasticity are the signs that renewal is due.
          </p>
          <p>
            A properly specified and maintained anti-carbonation coating is one of the most cost-effective protective investments available for an RCC building. Applied at the right time — before rebar corrosion initiates — it eliminates the need for costly spall repairs and structural intervention for the foreseeable life of the structure.
          </p>

        </article>

        <aside className="kc-sidebar">
          <nav className="kc-toc" aria-label="Article sections">
            <div className="kc-toc-title">In This Article</div>
            <ol>
              <li><a href="#s1">What Is Carbonation?</a></li>
              <li><a href="#s2">The Chemistry — How It Destroys Concrete</a></li>
              <li><a href="#s3">Factors That Accelerate Carbonation</a></li>
              <li><a href="#s4">Measuring Carbonation Depth</a></li>
              <li><a href="#s5">The Phenolphthalein Test</a></li>
              <li><a href="#s6">Treatment Options</a></li>
              <li><a href="#s7">Anti-Carbonation Coatings — How They Work</a></li>
            </ol>
          </nav>

          <div className="kc-cta-box">
            <p>Suspect carbonation in your building? We carry out phenolphthalein testing and carbonation surveys across Hyderabad.</p>
            <Link to="/#contact">Request an Assessment</Link>
          </div>
        </aside>

      </div>

      <section className="kc-related">
        <div className="kc-related-inner">
          <div className="kc-related-title">Related Articles</div>
          <div className="kc-related-grid">
            <Link to="/knowledge/corrosion" className="kc-related-card">
              <div className="kc-related-card-cat">Structural Rehabilitation</div>
              <h4>Rebar Corrosion in Buildings</h4>
              <p>The mechanism behind rusting steel, detection with half-cell potential mapping, and repair strategies.</p>
            </Link>
            <Link to="/knowledge/spalling" className="kc-related-card">
              <div className="kc-related-card-cat">Structural Rehabilitation</div>
              <h4>Concrete Spalling — Causes, Warning Signs, and Repair</h4>
              <p>Why chunks of concrete fall off buildings, the early warning signs, and the correct repair sequence.</p>
            </Link>
            <Link to="/knowledge/concrete-cracks" className="kc-related-card">
              <div className="kc-related-card-cat">Structural Rehabilitation</div>
              <h4>Concrete Cracks — Classification and Repair</h4>
              <p>How to tell a structural crack from a cosmetic one, and the correct repair method for each type.</p>
            </Link>
          </div>
        </div>
      </section>

      <footer className="kc-footer">
        <p>
          &copy; 2025 Prisci Constructions &middot; Hyderabad &middot;
          <Link to="/#contact">Get a Free Consultation</Link>
        </p>
      </footer>

    </Layout>
  );
}
