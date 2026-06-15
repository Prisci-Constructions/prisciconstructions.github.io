import Layout from '@/components/layout/Layout';
import HeroSplit from '@/components/sections/HeroSplit';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import CaseStudy from '@/components/sections/CaseStudy';
import Clients from '@/components/sections/Clients';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';
import InspectionForm from '@/components/forms/InspectionForm';
import { useScrollTop } from '@/hooks/useScrollTop';

export default function HomePage() {
  useScrollTop();
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