import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import TreatmentCard from '../components/cards/TreatmentCard';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { TREATMENTS } from '../data/treatmentsData';
import { Link } from 'react-router-dom';

export default function LaserTreatments() {
  const laserTreatments = TREATMENTS.filter(t => t.category === 'Laser Treatments');

  return (
    <>
      <SEOHead 
        title="Laser Hair Reduction and Skin Procedures | Aurelia Ahmedabad"
        description="Medical diode and Nd:YAG laser hair reduction, pigmentation lasers, and skin resurfacing procedures at Aurelia Institute in Ahmedabad."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
        <Breadcrumbs items={[{ label: 'Laser Treatments' }]} />

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-champagne-dark font-bold font-sans">
              Calibrated Energy Technologies
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-aubergine font-bold">
              Laser Hair Reduction & Skin Tech
            </h1>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
              Medical photo-epilation and laser skin procedures utilizing calibrated wavelengths designed for safety across Indian Fitzpatrick skin types. Patch testing is required prior to all laser sessions.
            </p>
            <div className="pt-2">
              <Link
                to="/booking"
                className="px-6 py-3 bg-aubergine text-champagne rounded-full font-sans text-xs font-semibold hover:bg-aubergine-900 transition-colors shadow-md inline-block"
              >
                Schedule Laser Safety Assessment
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80"
              alt="Laser treatment room and equipment photography"
              aspectRatio="aspect-[4/3]"
              overlay={true}
              overlayText="Integrated Sapphire Skin Cooling Platform"
            />
          </div>
        </div>

        {/* LASER PROCEDURES CATALOG */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-aubergine">Laser Services Catalogue</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {laserTreatments.map(t => (
              <TreatmentCard key={t.id} treatment={t} />
            ))}
          </div>
        </div>

        <MedicalDisclaimer />
      </div>
    </>
  );
}
