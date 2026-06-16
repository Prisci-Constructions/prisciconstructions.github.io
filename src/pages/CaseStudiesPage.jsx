import Layout from '@/components/layout/Layout';
import CaseStudy from '@/components/sections/CaseStudy';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';

export default function CaseStudiesPage() {
  useScrollTop();
  useSEO({
    title: 'Case Studies | Real Results by Prisci Constructions',
    description: 'Detailed case studies of how Prisci Constructions solved complex waterproofing and structural challenges for municipal, industrial and government clients across South India.',
    path: '/case-studies',
  });
  return (
    <Layout>
      <CaseStudy />
    </Layout>
  );
}