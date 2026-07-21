import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MultiStepBookingForm from '../components/ui/MultiStepBookingForm';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';

export default function ConsultationBooking() {
  return (
    <>
      <SEOHead 
        title="Book a Dermatology Consultation in Ahmedabad | Aurelia"
        description="Schedule your clinical dermatology, hair loss, laser, or aesthetic consultation at Aurelia Skin & Hair Institute in Ahmedabad."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-8">
        <Breadcrumbs items={[{ label: 'Book Consultation' }]} />

        <MultiStepBookingForm />

        <MedicalDisclaimer />
      </div>
    </>
  );
}
