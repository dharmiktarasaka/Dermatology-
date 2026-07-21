import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import ConcernCard from '../components/cards/ConcernCard';
import TreatmentCard from '../components/cards/TreatmentCard';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import SkinLayersSVG from '../components/illustrations/SkinLayersSVG';
import { CONCERNS } from '../data/concernsData';
import { TREATMENTS } from '../data/treatmentsData';
import { Link } from 'react-router-dom';

export default function MedicalDermatology() {
  const medicalConcerns = CONCERNS.filter(c => c.category === 'Medical');
  const medicalTreatments = TREATMENTS.filter(t => t.category === 'Medical Dermatology');

  return (
    <>
      <SEOHead 
        title="Medical Dermatology & Skin Care in Ahmedabad | Aurelia"
        description="Comprehensive medical dermatology for acne, eczema, psoriasis, rosacea, vitiligo, and skin allergies at Aurelia Institute in Ahmedabad."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
        <Breadcrumbs items={[{ label: 'Medical Dermatology' }]} />

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
              Clinical Disease Management
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-aubergine font-bold">
              Medical Dermatology Care
            </h1>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
              Evidence-based diagnostic evaluation and management of acute and chronic diseases of the skin, hair, scalp, and nails. Our focus centers on root-cause identification and barrier restoration.
            </p>
            <div className="pt-2">
              <Link
                to="/booking"
                className="px-6 py-3 bg-terracotta text-white rounded-full font-sans text-xs font-semibold hover:bg-terracotta-hover transition-colors shadow-md inline-block"
              >
                Book Medical Consultation
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
              alt="Medical dermatologist examining skin lesion"
              aspectRatio="aspect-[4/3]"
              overlay={true}
              overlayText="High-Magnification Dermoscopic Diagnostic Suite"
            />
          </div>
        </div>

        {/* SKIN ANATOMY ILLUSTRATION */}
        <SkinLayersSVG />

        {/* MEDICAL CONCERNS GRID */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl font-bold text-aubergine">Common Medical Skin Conditions Treated</h2>
            <p className="text-xs text-charcoal/75 font-sans">Select a condition to read educational details and consultation processes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalConcerns.map(c => (
              <ConcernCard key={c.id} concern={c} />
            ))}
          </div>
        </div>

        {/* MEDICAL PROCEDURES */}
        <div className="space-y-6 pt-8 border-t border-champagne/40">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl font-bold text-aubergine">Clinical Evaluation & Consultation Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {medicalTreatments.map(t => (
              <TreatmentCard key={t.id} treatment={t} />
            ))}
          </div>
        </div>

        <MedicalDisclaimer />
      </div>
    </>
  );
}
