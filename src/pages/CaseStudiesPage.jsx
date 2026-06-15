import Layout from '@/components/layout/Layout';
import CaseStudy from '@/components/sections/CaseStudy';
import { useScrollTop } from '@/hooks/useScrollTop';

export default function CaseStudiesPage() {
  useScrollTop();
  return (
    <Layout>
      <CaseStudy />
    </Layout>
  );
}