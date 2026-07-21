import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';
import PortfolioDisclaimer from './components/common/PortfolioDisclaimer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import MedicalDermatology from './pages/MedicalDermatology';
import HairScalp from './pages/HairScalp';
import AestheticDermatology from './pages/AestheticDermatology';
import LaserTreatments from './pages/LaserTreatments';
import ConcernsDirectory from './pages/ConcernsDirectory';
import ConcernDetail from './pages/ConcernDetail';
import TreatmentsDirectory from './pages/TreatmentsDirectory';
import TreatmentDetail from './pages/TreatmentDetail';
import DoctorProfile from './pages/DoctorProfile';
import BeforeAfterPage from './pages/BeforeAfterPage';
import PatientJourney from './pages/PatientJourney';
import SkinLibrary from './pages/SkinLibrary';
import ArticleDetail from './pages/ArticleDetail';
import ConsultationBooking from './pages/ConsultationBooking';
import LocalSeoAhmedabad from './pages/LocalSeoAhmedabad';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import MedicalDisclaimerPage from './pages/MedicalDisclaimerPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-ivory text-charcoal font-sans antialiased">
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/medical-dermatology" element={<MedicalDermatology />} />
              <Route path="/hair-scalp" element={<HairScalp />} />
              <Route path="/aesthetic-dermatology" element={<AestheticDermatology />} />
              <Route path="/laser-treatments" element={<LaserTreatments />} />
              <Route path="/concerns" element={<ConcernsDirectory />} />
              <Route path="/concerns/:id" element={<ConcernDetail />} />
              <Route path="/treatments" element={<TreatmentsDirectory />} />
              <Route path="/treatments/:id" element={<TreatmentDetail />} />
              <Route path="/doctor-profile" element={<DoctorProfile />} />
              <Route path="/before-after" element={<BeforeAfterPage />} />
              <Route path="/patient-journey" element={<PatientJourney />} />
              <Route path="/skin-library" element={<SkinLibrary />} />
              <Route path="/skin-library/:id" element={<ArticleDetail />} />
              <Route path="/booking" element={<ConsultationBooking />} />
              <Route path="/dermatologist-in-ahmedabad" element={<LocalSeoAhmedabad />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/medical-disclaimer" element={<MedicalDisclaimerPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <WhatsAppButton />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
