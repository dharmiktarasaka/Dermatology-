import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import PortfolioDisclaimer from '../components/common/PortfolioDisclaimer';
import FAQAccordion from '../components/ui/FAQAccordion';
import { LOCAL_SEO } from '../data/localSeoData';
import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LocalSeoAhmedabad() {
  return (
    <>
      <SEOHead 
        title="Dermatologist in Ahmedabad | Aurelia Skin & Hair Institute"
        description="Looking for a leading dermatologist in Ahmedabad? Aurelia Skin & Hair Institute provides medical skin care, hair loss trichology, laser reduction, and aesthetic rejuvenation near S.G. Highway, Satellite."
        keywords="dermatologist in Ahmedabad, skin clinic in Ahmedabad, skin specialist near me, hair specialist Ahmedabad, acne treatment Ahmedabad, pigmentation laser Ahmedabad"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
        <Breadcrumbs items={[{ label: 'Dermatologist in Ahmedabad (Local Care)' }]} />

        {/* HERO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
              Local Healthcare Hub • Ahmedabad, Gujarat
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-aubergine font-bold leading-tight">
              Dermatologist & Skin Specialist in Ahmedabad
            </h1>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
              Aurelia Skin & Hair Institute serves patients across Satellite, Bodakdev, Prahlad Nagar, Vastrapur, Thaltej, and Bopal. Our institute combines clinical dermatology, digital scalp trichoscopy, dark skin-safe lasers, and personalized aesthetic care.
            </p>
            <div className="pt-2">
              <Link
                to="/booking"
                className="px-6 py-3 bg-terracotta text-white rounded-full font-sans text-xs font-semibold hover:bg-terracotta-hover transition-colors shadow-md inline-block"
              >
                Book Ahmedabad Skin Consultation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
              alt="Aurelia Dermatology Satellite Ahmedabad exterior concept"
              aspectRatio="aspect-[4/3]"
              overlay={true}
              badge="Ahmedabad Practice Concept"
            />
          </div>
        </div>

        {/* LOCATION & LANDMARKS CARD */}
        <div className="bg-ivory-light border border-champagne p-6 sm:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 shadow-luxury">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-terracotta font-serif font-bold">
              <MapPin className="w-5 h-5" />
              <span>Clinic Location</span>
            </div>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
              {LOCAL_SEO.fictionalAddress.building}<br />
              {LOCAL_SEO.fictionalAddress.landmark}<br />
              {LOCAL_SEO.fictionalAddress.area}, {LOCAL_SEO.fictionalAddress.city}, {LOCAL_SEO.fictionalAddress.state} {LOCAL_SEO.fictionalAddress.pincode}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-aubergine font-serif font-bold">
              <Clock className="w-5 h-5 text-rosewood" />
              <span>Clinic Timings</span>
            </div>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
              Monday – Saturday: 10:00 AM – 7:30 PM<br />
              Sunday: 10:00 AM – 2:00 PM (Prior Appointment)
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sage-dark font-serif font-bold">
              <Navigation className="w-5 h-5 text-sage" />
              <span>Service Areas Covered</span>
            </div>
            <div className="flex flex-wrap gap-1 text-[11px] text-charcoal/70 font-sans">
              {LOCAL_SEO.serviceAreas.map((area, i) => (
                <span key={i} className="px-2 py-0.5 bg-ivory-dark rounded-md border border-champagne/40">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* AHMEDABAD SERVICE HIGHLIGHTS */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl font-bold text-aubergine text-center">Dermatological Services in Ahmedabad</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-4 bg-ivory-dark rounded-2xl border border-champagne/50">
              <strong className="text-aubergine font-serif text-sm block mb-1">Acne Specialist Ahmedabad</strong>
              <p className="text-charcoal/75">Clinical management for teenage comedonal acne, adult hormonal acne, and post-acne dark marks.</p>
            </div>
            <div className="p-4 bg-ivory-dark rounded-2xl border border-champagne/50">
              <strong className="text-aubergine font-serif text-sm block mb-1">Hair Loss Trichology</strong>
              <p className="text-charcoal/75">Digital trichoscopy and follicle density analysis for pattern thinning and telogen effluvium.</p>
            </div>
            <div className="p-4 bg-ivory-dark rounded-2xl border border-champagne/50">
              <strong className="text-aubergine font-serif text-sm block mb-1">Laser Hair Reduction</strong>
              <p className="text-charcoal/75">Diode and Nd:YAG laser photo-epilation calibrated for dark Indian skin tones with sapphire cooling.</p>
            </div>
            <div className="p-4 bg-ivory-dark rounded-2xl border border-champagne/50">
              <strong className="text-aubergine font-serif text-sm block mb-1">Melasma & Pigmentation</strong>
              <p className="text-charcoal/75">Targeted chemical peels and laser protocols for sun spots, melasma, and hyperpigmentation.</p>
            </div>
          </div>
        </div>

        {/* LOCAL FAQS */}
        <div className="space-y-4 pt-4">
          <h2 className="font-serif text-3xl font-bold text-aubergine text-center">Ahmedabad Patient FAQs</h2>
          <FAQAccordion limit={5} />
        </div>

        <PortfolioDisclaimer />
        <MedicalDisclaimer />
      </div>
    </>
  );
}
