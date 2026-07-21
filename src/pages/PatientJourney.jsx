import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import TreatmentProcessSVG from '../components/illustrations/TreatmentProcessSVG';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';

export default function PatientJourney() {
  return (
    <>
      <SEOHead 
        title="Patient Care Journey | Aurelia Dermatology Ahmedabad"
        description="Explore step-by-step how Aurelia Skin & Hair Institute guides patients from concern discovery through clinical evaluation and aftercare."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
        <Breadcrumbs items={[{ label: 'Patient Care Journey' }]} />

        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
            Structured Patient Experience
          </span>
          <h1 className="font-serif text-4xl font-bold text-aubergine">
            Your Clinical Patient Journey
          </h1>
          <p className="text-xs text-charcoal/75 font-sans">
            From your initial appointment request to personalized treatment planning and ongoing skin health maintenance.
          </p>
        </div>

        <TreatmentProcessSVG />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-champagne/40">
          <div className="lg:col-span-6 space-y-3">
            <h2 className="font-serif text-2xl font-bold text-aubergine">What Happens During Your First Appointment?</h2>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
              Your consultation begins with a detailed medical history review, including current skincare routines, past topicals, and lifestyle triggers. Your dermatologist performs visual and high-magnification dermoscopic examination before explaining underlying drivers.
            </p>
          </div>
          <div className="lg:col-span-6">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
              alt="Dermatology consultation session"
              aspectRatio="aspect-[16/9]"
              overlay={true}
              overlayText="Patient-Centered Consultation Space"
            />
          </div>
        </div>

        <MedicalDisclaimer />
      </div>
    </>
  );
}
