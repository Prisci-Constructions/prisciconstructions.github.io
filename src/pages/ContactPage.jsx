import Layout from '@/components/layout/Layout';
import InspectionForm from '@/components/forms/InspectionForm';
import CTABanner from '@/components/sections/CTABanner';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useSEO } from '@/hooks/useSEO';

export default function ContactPage() {
  useScrollTop();
  useSEO({
    title: 'Contact Us | Request a Free Inspection | Prisci Constructions',
    description: 'Get in touch with Prisci Constructions for a free site inspection. Call +91 9000 126099 or fill out the form. Serving Hyderabad, AP, Telangana, Karnataka and Maharashtra.',
    path: '/contact',
  });
  return (
    <Layout>
      <InspectionForm />
      <CTABanner />
    </Layout>
  );
}