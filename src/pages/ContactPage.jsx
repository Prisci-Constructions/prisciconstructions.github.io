import Layout from '@/components/layout/Layout';
import InspectionForm from '@/components/forms/InspectionForm';
import CTABanner from '@/components/sections/CTABanner';
import { useScrollTop } from '@/hooks/useScrollTop';

export default function ContactPage() {
  useScrollTop();
  return (
    <Layout>
      <InspectionForm />
      <CTABanner />
    </Layout>
  );
}