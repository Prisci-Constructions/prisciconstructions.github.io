import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';
import '@/styles/article.css';

export default function PUGrouting() {
  useScrollTop();
  useSEO({
    title: 'PU Grouting — A Complete Guide | Prisci Constructions Knowledge Center',
    description: 'Polyurethane injection grouting explained: PU foam vs. PU resin vs. epoxy, when to use each material, the injection process step by step, and what the results look like.',
    path: '/knowledge/pu-grouting',
  });
  useEffect(() => {
    const links = document.querySelectorAll('.kc-toc a');
    const sections = document.querySelectorAll('.kc-article h2[id]');
    const handler = () => {
      let c = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) c = s.id;
      });
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + c));
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <Layout>
      {/* BREADCRUMB */}
      <div className="kc-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/knowledge">Knowledge Center</Link>
        <span>/</span>
        PU Grouting — A Complete Guide
      </div>

      {/* HERO */}
      <div className="kc-hero">
        <div className="kc-hero-inner">
          <span className="kc-category-badge waterproofing">Waterproofing</span>
          <h1 className="kc-title">PU Grouting — Polyurethane Injection for Leaks and Cracks</h1>
          <p className="kc-subtitle">Injection grouting delivers sealant material directly into the heart of a crack or void — under pressure, from the inside out. The result is a watertight seal that surface coatings can never achieve, because it addresses the leak at its source rather than bridging over it.</p>
          <div className="kc-meta">
            <span>7 min read</span>
            <span className="kc-meta-dot">·</span>
            <span>Waterproofing</span>
            <span className="kc-meta-dot">·</span>
            <span>Prisci Constructions</span>
          </div>
        </div>
      </div>

      {/* LAYOUT: ARTICLE + SIDEBAR */}
      <div className="kc-layout">

        {/* ARTICLE BODY */}
        <article className="kc-article">

          {/* S1 */}
          <h2 id="s1">What Is Injection Grouting?</h2>
          <p>Injection grouting is the technique of forcing a reactive chemical material into cracks, voids, or porous zones in concrete, masonry, or rock — using hydraulic pressure applied through a series of small ports drilled at angles into the substrate. Unlike surface-applied membranes that sit on top of a crack, injection grouting fills the crack from within, binding its walls or forming an elastic seal that accommodates minor movement.</p>
          <p>The principle is straightforward: drill access ports at 45 degrees into the crack plane, insert injection packers (also called nipples or ports), flush the crack with water or compressed air to clear debris, then pump the chosen grout material at controlled low pressure until it flows out of the adjacent port — confirming the crack is full. Seal each port as the material cures, then cut the packers flush.</p>
          <p>The technique is particularly powerful for <strong>below-grade structures</strong> — basement walls, water-tank walls, underground utility ducts, tunnels — where exterior excavation is impractical and active water ingress makes surface membranes ineffective. It is also the preferred method for sealing cracks in water-retaining structures such as overhead and underground sumps.</p>
          <p>Three chemical families dominate injection grouting in building waterproofing and structural repair: <strong>PU hydrophilic foam</strong>, <strong>PU hydrophobic resin</strong>, and <strong>low-viscosity epoxy resin</strong>. Each has a distinct chemistry, a distinct purpose, and situations where the others will fail.</p>

          <hr className="kc-section-rule" />

          {/* S2 */}
          <h2 id="s2">PU Foam vs. PU Resin vs. Epoxy</h2>

          <h3>PU Hydrophilic Foam</h3>
          <p>Hydrophilic means "water-loving." When hydrophilic polyurethane resin contacts water inside a crack, it reacts rapidly and expands — typically <strong>10 to 30 times its original volume</strong> — forming a closed-cell flexible foam that fills the crack geometry and seals against water passage. The expansion pressure is significant enough to displace residual water and pack the foam tightly into all subsidiary micro-cracks.</p>
          <p>The resulting seal is <strong>flexible and permanent under static conditions</strong>. Because the foam is not rigid, it can accommodate minor thermal movement or micro-vibration without cracking open again. This makes it the material of choice for active wet cracks — cracks through which water is visibly dripping or seeping at the time of injection.</p>

          <h3>PU Hydrophobic Resin</h3>
          <p>Hydrophobic polyurethane resin reacts with atmospheric moisture rather than liquid water, producing a rigid or semi-rigid foam without requiring a wet substrate. It is used for <strong>filling voids behind walls and slabs</strong> — situations where a large air gap needs to be consolidated but no active water ingress is present. Hydrophobic foam does not expand as aggressively as hydrophilic foam, so it is better suited to filling volume rather than sealing under pressure.</p>

          <h3>Low-Viscosity Epoxy Resin (LV Epoxy)</h3>
          <p>Epoxy injection is a <strong>structural repair method</strong>, not a waterproofing method. Low-viscosity epoxy (typically 200–600 cP at application temperature) penetrates hairline cracks as fine as 0.05 mm and cures to a rigid polymer with a tensile bond strength of <strong>2,000 to 4,000 psi</strong> — stronger than the surrounding concrete in many cases. The cured epoxy essentially welds the two faces of a crack back together, restoring the original load-transfer capacity of the member.</p>
          <p>The critical constraint with epoxy is substrate condition: <strong>epoxy requires a completely dry crack</strong>. Any free moisture prevents the epoxy from bonding to the concrete surface, and the repair will debond over time. Epoxy is therefore unsuitable for active leaks or recently wet cracks without an extended drying period or prior PU foam injection to stop the water and allow drying.</p>

          <div className="kc-callout warning">
            <div className="kc-callout-label">Warning</div>
            <p>Injecting epoxy into a wet or actively leaking crack is one of the most common and costly mistakes in crack repair. The epoxy will not bond, the repair will fail within months, and the original crack — now partially filled with unbonded material — is harder to re-treat. Always confirm the substrate is dry before proceeding with epoxy injection.</p>
          </div>

          {/* COMPARISON TABLE */}
          <div className="kc-table-wrap">
            <table className="kc-table">
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Wet Substrate</th>
                  <th>Dry Substrate</th>
                  <th>Flexible</th>
                  <th>Structural Bond</th>
                  <th>Typical Service Life</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>PU Hydrophilic Foam</strong></td>
                  <td>Yes — requires water to react</td>
                  <td>Limited (add water)</td>
                  <td>Yes — elastic foam</td>
                  <td>No</td>
                  <td>15–25 years</td>
                </tr>
                <tr>
                  <td><strong>PU Hydrophobic Resin</strong></td>
                  <td>Tolerates damp</td>
                  <td>Yes</td>
                  <td>Semi-rigid</td>
                  <td>No</td>
                  <td>10–20 years</td>
                </tr>
                <tr>
                  <td><strong>Low-Viscosity Epoxy</strong></td>
                  <td>No — bond fails</td>
                  <td>Yes — required</td>
                  <td>No — rigid</td>
                  <td>Yes — 2,000–4,000 psi</td>
                  <td>25–40+ years (if dry)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="kc-section-rule" />

          {/* S3 */}
          <h2 id="s3">When to Use Each Material</h2>
          <p>The selection matrix is driven by three questions: Is the crack actively wet? Is structural load transfer required? Is the crack still moving?</p>

          <h3>Active Wet Crack — Use PU Hydrophilic Foam</h3>
          <p>If water is visibly seeping or dripping through a crack at the time of inspection, PU hydrophilic foam is the only viable injection material. The water triggers the expansion reaction, the foam fills the crack volume, and the flexible seal resists the hydrostatic pressure. Typical applications include basement retaining walls with active seepage, water tank walls with pinhole leaks, and underground structure joints.</p>

          <h3>Dormant Structural Crack — Use Low-Viscosity Epoxy</h3>
          <p>If a crack is dry and stable — confirmed by monitoring marks over 4–6 weeks showing no change in width — and the crack has reduced the structural integrity of the member (for instance, a beam or column crack wider than 0.3 mm, or a crack through a load-bearing wall), low-viscosity epoxy injection is the correct repair. The epoxy restores tensile continuity across the crack. This must be combined with addressing the root cause of the crack; otherwise the crack will re-open adjacent to the injected zone.</p>

          <h3>Void Behind Wall or Slab — Use PU Hydrophobic Resin</h3>
          <p>When probe drilling or hammer-sounding reveals a delaminated or hollow zone behind a slab soffit, behind a tile finish, or within a cavity wall, PU hydrophobic resin injection consolidates the void without requiring water to react. The foam expands to fill irregular cavities and bonds to the surrounding surfaces, re-establishing contact between the separated layers.</p>

          <h3>Active Leak Preceding Epoxy — Sequential Injection</h3>
          <p>When a structural crack also has an active leak, a two-stage approach is required: first inject PU hydrophilic foam to stop the water ingress and allow the substrate to dry over 2–4 weeks, then re-drill adjacent ports and inject low-viscosity epoxy for structural restoration. Attempting to combine both objectives in one pass with a single material will compromise either the seal or the structural bond.</p>

          <hr className="kc-section-rule" />

          {/* S4 */}
          <h2 id="s4">The Injection Process — Step by Step</h2>
          <p>The injection process is methodical. Rushed or improperly spaced work produces incomplete fill and early failure. Here is the standard sequence followed by a competent injection team:</p>

          <ol>
            <li><strong>Crack mapping and marking.</strong> The full length and branching pattern of the crack is traced on the surface with chalk or a marker. Each branch is noted. Width is measured at multiple points using a crack comparator card. This determines material selection and port spacing.</li>
            <li><strong>Port drilling.</strong> Holes of 10–14 mm diameter are drilled at <strong>45 degrees to the crack plane</strong>, intersecting the crack at the mid-depth of the member. Ports are spaced <strong>every 15 to 20 cm</strong> along the crack length. On thin slabs or walls, the angle and depth are adjusted so the drill intersects the crack centrally.</li>
            <li><strong>Crack flushing.</strong> Compressed air or water is blown through each port to clear dust, debris, and loose material from the crack interior. For PU foam injection into a dry crack, a small amount of water is also introduced to prime the crack for the hydrophilic reaction.</li>
            <li><strong>Packer installation.</strong> Mechanical or chemical injection packers — threaded or rubber-expansion fittings — are inserted into each drilled port and locked in place. The packer accepts the injection pump nozzle and contains a one-way valve to prevent back-flow once pressure is released.</li>
            <li><strong>Surface sealing.</strong> The crack surface between ports is sealed with a fast-setting epoxy putty or hydraulic cement to prevent the grout from blowing out at the surface rather than filling the crack depth. This step is skipped only when the crack is very deep and the injection pressure is very low.</li>
            <li><strong>Injection.</strong> Starting from the lowest port on vertical cracks (or one end on horizontal cracks), the pump is connected and material is injected at <strong>low, controlled pressure</strong> — typically 0.3 to 0.5 MPa for PU foam, 0.5 to 1.5 MPa for epoxy. Injection continues at each port until material visibly appears at the adjacent port, confirming the intervening section of crack is full. That port is then capped and the pump moves to the next.</li>
            <li><strong>Curing and packer removal.</strong> After the material has gelled (30 minutes to a few hours depending on material and temperature), the packers are unscrewed or cut flush, and the port holes are patched with epoxy mortar.</li>
          </ol>

          <div className="kc-callout tip">
            <div className="kc-callout-label">Tip — Port Spacing Matters</div>
            <p>Port spacing of 15–20 cm is a baseline for cracks in walls of standard thickness (150–230 mm). For very thin elements (less than 100 mm) or very fine cracks (less than 0.1 mm), reduce spacing to 10 cm. For thick retaining walls or mass concrete, increase spacing to 25–30 cm. Ports placed too far apart leave un-injected voids between them; ports placed too close together waste time and material without improving quality.</p>
          </div>

          <hr className="kc-section-rule" />

          {/* S5 */}
          <h2 id="s5">After Grouting — What to Expect</h2>
          <p>Results after a properly executed injection are typically definitive. For PU foam injection on an active leak, water ingress should stop within minutes of the foam gelling — often during the injection itself. For epoxy structural injection, the repair is invisible from the surface once patched, and the member regains its load-transfer capacity.</p>

          <h3>Cure Period</h3>
          <p>PU hydrophilic foam reaches working strength in 30–60 minutes and full cure in 24 hours. Low-viscosity epoxy typically gels in 4–8 hours at room temperature and reaches full strength at 48–72 hours. During this period, do not apply water pressure to the repaired area and avoid vibration or impact on the member.</p>

          <h3>Flood Testing</h3>
          <p>For water-retaining structures (sumps, tanks, basements), a <strong>flood test</strong> is the standard acceptance procedure. The structure is filled with water to design level and held for 24–48 hours. A drop in water level of less than 1–2 mm per 24 hours, with no visible seepage on external faces, is the acceptance criterion. Any residual seepage points identified during the flood test are re-injected.</p>

          <h3>What the Repair Looks Like</h3>
          <p>Port holes patched with epoxy mortar are visible as small circles along the crack line. The crack itself may be visible as a fine hairline — this is normal and does not indicate failure; the injected material inside the crack is doing its job. If the crack was wider than 1 mm before injection, a cosmetic surface finish coat of flexible polymer-modified mortar or elastomeric coating can be applied to make it less visible, but this is optional.</p>

          <hr className="kc-section-rule" />

          {/* S6 */}
          <h2 id="s6">Limitations and What Grouting Cannot Fix</h2>
          <p>Injection grouting is a highly effective technique, but it is not a universal solution. Understanding its limits prevents misapplication and ensures durable outcomes.</p>

          <h3>Active Structural Movement</h3>
          <p>If a crack is still widening — caused by ongoing settlement, overloading, or unresolved structural deficiency — injection grouting will not provide a lasting repair. The injected material, whether foam or epoxy, will be stressed beyond its capacity as the crack continues to open. Any grouting work on a moving crack must be preceded by a structural assessment and the arrest of the movement. Monitoring marks (tiles or tell-tales glued across the crack and photographed over 4–6 weeks) confirm whether movement has stopped.</p>

          <h3>High-Flow Active Water Without Prior Plugging</h3>
          <p>Where water is flowing through a crack under significant head pressure — for example, a hydrostatic crack in a below-grade wall during monsoon — the PU foam may be washed out of the crack before it can expand and gel if the flow rate is too high. In such cases, a fast-setting hydraulic cement plug must be used first to reduce or stop the flow, allowing the foam injection to proceed. Attempting to inject foam directly into a high-velocity flow path is ineffective.</p>

          <h3>Widespread Porosity, Not Discrete Cracks</h3>
          <p>Injection grouting addresses discrete cracks and voids. It cannot consolidate uniformly porous concrete — concrete that lets water seep through its bulk matrix rather than along defined crack planes. Porous concrete requires crystalline waterproofing, pressure grouting with cementitious slurry, or, in severe cases, a full membrane system applied externally or internally. If a wall sweats generally rather than leaking along identifiable crack lines, grouting is the wrong tool.</p>

          <h3>Cracks Narrower Than 0.05 mm</h3>
          <p>Even low-viscosity epoxy has a minimum injectable crack width of approximately 0.05 mm. Hairline cracks finer than this cannot be penetrated by any liquid injection material; they require surface-applied elastomeric coatings that bridge the crack rather than fill it.</p>

        </article>

        {/* SIDEBAR */}
        <aside className="kc-sidebar">

          {/* TABLE OF CONTENTS */}
          <nav className="kc-toc" aria-label="Table of contents">
            <div className="kc-toc-title">In This Article</div>
            <ol>
              <li><a href="#s1">What Is Injection Grouting?</a></li>
              <li><a href="#s2">PU Foam vs. PU Resin vs. Epoxy</a></li>
              <li><a href="#s3">When to Use Each Material</a></li>
              <li><a href="#s4">The Injection Process — Step by Step</a></li>
              <li><a href="#s5">After Grouting — What to Expect</a></li>
              <li><a href="#s6">Limitations and What Grouting Cannot Fix</a></li>
            </ol>
          </nav>

          {/* CTA BOX */}
          <div className="kc-cta-box">
            <p>Active leak or structural crack in your building? Our engineers will assess and specify the right injection system.</p>
            <Link to="/#contact">Get a Free Consultation</Link>
          </div>

        </aside>

      </div>{/* /kc-layout */}

      {/* RELATED ARTICLES */}
      <section className="kc-related">
        <div className="kc-related-inner">
          <div className="kc-related-title">Related Articles</div>
          <div className="kc-related-grid">
            <Link to="/knowledge/why-waterproofing-fails" className="kc-related-card">
              <div className="kc-related-card-cat">Waterproofing</div>
              <h4>Why Waterproofing Fails</h4>
              <p>The five root causes behind every failed treatment — wrong system, bad prep, skipped details, and more.</p>
            </Link>
            <Link to="/knowledge/basement-leakage-guide" className="kc-related-card">
              <div className="kc-related-card-cat">Waterproofing</div>
              <h4>Basement Leakage Guide</h4>
              <p>How water enters basements, the difference between hydrostatic and capillary ingress, and how to stop both.</p>
            </Link>
            <Link to="/knowledge/concrete-cracks" className="kc-related-card">
              <div className="kc-related-card-cat">Structural</div>
              <h4>Concrete Cracks — Classification and Repair</h4>
              <p>How to tell a structural crack from a cosmetic one, and the correct repair method for each type.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="kc-footer">
        <p>
          &copy; 2025 Prisci Constructions &middot; Hyderabad &middot;{' '}
          <Link to="/#contact">Get a Free Consultation</Link>
        </p>
      </footer>
    </Layout>
  );
}
