import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import StructuredData from '@/components/seo/StructuredData';

export default function Layout({ children }) {
  return (
    <>
      <StructuredData />
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}