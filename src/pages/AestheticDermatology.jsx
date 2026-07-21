import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import TreatmentCard from '../components/cards/TreatmentCard';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import { TREATMENTS } from '../data/treatmentsData';
import { Link } from 'react-router-dom';

export default function AestheticDermatology() {
  const aestheticTreatments = TREATMENTS.filter(t => t.category === 'Aesthetic Dermatology');

  return (
    <>
      <SEOHead 
        title="Aesthetic Dermatology and Skin Rejuvenation | Aurelia"
        description="Responsible aesthetic skin rejuvenation, chemical peels, collagen microneedling, and texture refinement at Aurelia Institute in Ahmedabad."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
        <Breadcrumbs items={[{ label: 'Aesthetic Dermatology' }]} />

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
              Ethical & Responsible Aesthetics
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-aubergine font-bold">
              Aesthetic Dermatology Care
            </h1>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
              Skin rejuvenation focused on long-term skin health, barrier integrity, and natural glow—without setting unrealistic beauty expectations or promoting aggressive skin bleaching.
            </p>
            <div className="pt-2">
              <Link
                to="/booking"
                className="px-6 py-3 bg-terracotta text-white rounded-full font-sans text-xs font-semibold hover:bg-terracotta-hover transition-colors shadow-md inline-block"
              >
                Request Aesthetic Consultation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
              alt="Aesthetic skin consultation and rejuvenation photography"
              aspectRatio="aspect-[4/3]"
              overlay={true}
              overlayText="Barrier-Respecting Rejuvenation Protocols"
            />
          </div>
        </div>

        {/* BEFORE AFTER DEMO */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl font-bold text-aubergine text-center">Interactive Aesthetic Outcome Demo</h2>
          <BeforeAfterSlider />
        </div>

        {/* AESTHETIC PROCEDURES CATALOG */}
        <div className="space-y-6 pt-8 border-t border-champagne/40">
          <h2 className="font-serif text-3xl font-bold text-aubergine">Aesthetic Procedures Catalogue</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aestheticTreatments.map(t => (
              <TreatmentCard key={t.id} treatment={t} />
            ))}
          </div>
        </div>

        <MedicalDisclaimer />
      </div>
    </>
  );
}
