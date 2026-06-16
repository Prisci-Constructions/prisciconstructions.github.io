import Layout from '@/components/layout/Layout';
import HeroSplit from '@/components/sections/HeroSplit';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import CaseStudy from '@/components/sections/CaseStudy';
import Clients from '@/components/sections/Clients';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';
import InspectionForm from '@/components/forms/InspectionForm';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';

export default function HomePage() {
  useScrollTop();
  useSEO({
    title: 'Prisci Constructions | Waterproofing & Structural Repair in Hyderabad',
    description: 'Expert waterproofing, structural repairs, building diagnostics & epoxy flooring across AP, Telangana, Karnataka and Maharashtra. 25+ years, 500+ projects. Request a free inspection.',
    path: '/',
  });
  return (
    <Layout>
      <HeroSplit />
      <ProjectsGrid />
      <CaseStudy />
      <Clients />
      <Testimonials />
      <InspectionForm />
      <CTABanner />
    </Layout>
  );
}