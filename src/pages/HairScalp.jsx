import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import HairCycleSVG from '../components/illustrations/HairCycleSVG';
import ConcernCard from '../components/cards/ConcernCard';
import TreatmentCard from '../components/cards/TreatmentCard';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { CONCERNS } from '../data/concernsData';
import { TREATMENTS } from '../data/treatmentsData';
import { Link } from 'react-router-dom';

export default function HairScalp() {
  const hairConcerns = CONCERNS.filter(c => c.category === 'Hair & Scalp');
  const hairTreatments = TREATMENTS.filter(t => t.category === 'Hair & Scalp');

  return (
    <>
      <SEOHead 
        title="Hair Loss and Scalp Consultation in Ahmedabad | Aurelia"
        description="Trichological hair loss evaluation, scalp analysis, dandruff management, and pattern thinning consultations at Aurelia Institute in Ahmedabad."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
        <Breadcrumbs items={[{ label: 'Hair & Scalp Care' }]} />

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage-dark font-bold font-sans">
              Trichology & Scalp Health
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-aubergine font-bold">
              Hair & Scalp Trichology Care
            </h1>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
              Understanding hair thinning, pattern shedding, and scalp inflammation requires objective micro-imaging. Our trichology assessments focus on identifying hair cycle phases and follicular density.
            </p>
            <div className="pt-2">
              <Link
                to="/booking"
                className="px-6 py-3 bg-sage text-white rounded-full font-sans text-xs font-semibold hover:bg-sage-dark transition-colors shadow-md inline-block"
              >
                Book Trichology Consultation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
              alt="Digital trichoscopy scalp camera evaluation"
              aspectRatio="aspect-[4/3]"
              overlay={true}
              overlayText="Digital Trichoscopy Scalp Suite"
            />
          </div>
        </div>

        {/* HAIR GROWTH CYCLE SVG */}
        <HairCycleSVG />

        {/* HAIR CONCERNS GRID */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-aubergine">Hair & Scalp Concerns Assessed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairConcerns.map(c => (
              <ConcernCard key={c.id} concern={c} />
            ))}
          </div>
        </div>

        {/* HAIR TREATMENTS */}
        <div className="space-y-6 pt-8 border-t border-champagne/40">
          <h2 className="font-serif text-3xl font-bold text-aubergine">Scalp Diagnostic & Care Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {hairTreatments.map(t => (
              <TreatmentCard key={t.id} treatment={t} />
            ))}
          </div>
        </div>

        <MedicalDisclaimer />
      </div>
    </>
  );
}
