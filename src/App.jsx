import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/"              element={<HomePage />} />
      <Route path="/about"         element={<AboutPage />} />
      <Route path="/services"      element={<ServicesPage />} />
      <Route path="/projects"      element={<ProjectsPage />} />
      <Route path="/case-studies"  element={<CaseStudiesPage />} />
      <Route path="/contact"       element={<ContactPage />} />
      <Route path="*"              element={<NotFoundPage />} />
    </Routes>
  );
}
