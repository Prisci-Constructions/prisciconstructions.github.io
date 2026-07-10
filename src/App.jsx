import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Existing pages
import HomePage        from './pages/HomePage';
import AboutPage       from './pages/AboutPage';
import ServicesPage    from './pages/ServicesPage';
import ProjectsPage    from './pages/ProjectsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage     from './pages/ContactPage';
import NotFoundPage    from './pages/NotFoundPage';

// Service detail pages
const TerraceWaterproofing      = lazy(() => import('./pages/services/TerraceWaterproofing'));
const BasementWaterproofing     = lazy(() => import('./pages/services/BasementWaterproofing'));
const BathroomWaterproofing     = lazy(() => import('./pages/services/BathroomWaterproofing'));
const RoofWaterproofing         = lazy(() => import('./pages/services/RoofWaterproofing'));
const InjectionGrouting         = lazy(() => import('./pages/services/InjectionGrouting'));
const StructuralRehabilitation  = lazy(() => import('./pages/services/StructuralRehabilitation'));
const ConcreteRepair            = lazy(() => import('./pages/services/ConcreteRepair'));
const CrackRepair               = lazy(() => import('./pages/services/CrackRepair'));
const ExpansionJointTreatment   = lazy(() => import('./pages/services/ExpansionJointTreatment'));
const BuildingLeakInvestigation = lazy(() => import('./pages/services/BuildingLeakInvestigation'));
const StructuralAudit           = lazy(() => import('./pages/services/StructuralAudit'));

// Knowledge pages
const KnowledgeHub             = lazy(() => import('./pages/knowledge/KnowledgeHub'));
const WhyWaterproofingFails    = lazy(() => import('./pages/knowledge/WhyWaterproofingFails'));
const TerraceWaterproofingGuide= lazy(() => import('./pages/knowledge/TerraceWaterproofingGuide'));
const BasementLeakageGuide     = lazy(() => import('./pages/knowledge/BasementLeakageGuide'));
const PUGrouting               = lazy(() => import('./pages/knowledge/PUGrouting'));
const ExpansionJoints          = lazy(() => import('./pages/knowledge/ExpansionJoints'));
const ConcreteCracks           = lazy(() => import('./pages/knowledge/ConcreteCracks'));
const Honeycombing             = lazy(() => import('./pages/knowledge/Honeycombing'));
const Carbonation              = lazy(() => import('./pages/knowledge/Carbonation'));
const Corrosion                = lazy(() => import('./pages/knowledge/Corrosion'));
const Spalling                 = lazy(() => import('./pages/knowledge/Spalling'));
const MoistureTesting          = lazy(() => import('./pages/knowledge/MoistureTesting'));
const InfraredInspection       = lazy(() => import('./pages/knowledge/InfraredInspection'));
const ReboundHammer            = lazy(() => import('./pages/knowledge/ReboundHammer'));
const UPVTest                  = lazy(() => import('./pages/knowledge/UPVTest'));

const Loading = () => <div style={{minHeight:'60vh',display:'flex',alignItems:'center',justifyContent:'center',color:'#aaa'}}>Loading…</div>;

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Core pages */}
        <Route path="/"             element={<HomePage />} />
        <Route path="/about"        element={<AboutPage />} />
        <Route path="/services"     element={<ServicesPage />} />
        <Route path="/projects"     element={<ProjectsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/contact"      element={<ContactPage />} />

        {/* Service detail pages */}
        <Route path="/services/terrace-waterproofing"      element={<TerraceWaterproofing />} />
        <Route path="/services/basement-waterproofing"     element={<BasementWaterproofing />} />
        <Route path="/services/bathroom-waterproofing"     element={<BathroomWaterproofing />} />
        <Route path="/services/roof-waterproofing"         element={<RoofWaterproofing />} />
        <Route path="/services/injection-grouting"         element={<InjectionGrouting />} />
        <Route path="/services/structural-rehabilitation"  element={<StructuralRehabilitation />} />
        <Route path="/services/concrete-repair"            element={<ConcreteRepair />} />
        <Route path="/services/crack-repair"               element={<CrackRepair />} />
        <Route path="/services/expansion-joint-treatment"  element={<ExpansionJointTreatment />} />
        <Route path="/services/building-leak-investigation" element={<BuildingLeakInvestigation />} />
        <Route path="/services/structural-audit"           element={<StructuralAudit />} />

        {/* Knowledge center */}
        <Route path="/knowledge"                          element={<KnowledgeHub />} />
        <Route path="/knowledge/why-waterproofing-fails"  element={<WhyWaterproofingFails />} />
        <Route path="/knowledge/terrace-waterproofing-guide" element={<TerraceWaterproofingGuide />} />
        <Route path="/knowledge/basement-leakage-guide"   element={<BasementLeakageGuide />} />
        <Route path="/knowledge/pu-grouting"              element={<PUGrouting />} />
        <Route path="/knowledge/expansion-joints"         element={<ExpansionJoints />} />
        <Route path="/knowledge/concrete-cracks"          element={<ConcreteCracks />} />
        <Route path="/knowledge/honeycombing"             element={<Honeycombing />} />
        <Route path="/knowledge/carbonation"              element={<Carbonation />} />
        <Route path="/knowledge/corrosion"                element={<Corrosion />} />
        <Route path="/knowledge/spalling"                 element={<Spalling />} />
        <Route path="/knowledge/moisture-testing"         element={<MoistureTesting />} />
        <Route path="/knowledge/infrared-inspection"      element={<InfraredInspection />} />
        <Route path="/knowledge/rebound-hammer"           element={<ReboundHammer />} />
        <Route path="/knowledge/upv-test"                 element={<UPVTest />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
