import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';

export default function MedicalDisclaimerPage() {
  return (
    <>
      <SEOHead 
        title="Medical Disclaimer | Aurelia Skin & Hair Institute"
        description="Comprehensive healthcare medical disclaimer for Aurelia Skin & Hair Institute concept."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-6 text-xs text-charcoal/80 font-sans leading-relaxed">
        <Breadcrumbs items={[{ label: 'Medical Disclaimer' }]} />

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-aubergine">Medical Disclaimer</h1>
        
        <MedicalDisclaimer />

        <div className="space-y-4 pt-4">
          <h2 className="font-serif text-xl font-bold text-aubergine">No Guaranteed Outcomes</h2>
          <p>
            Dermatology, laser hair reduction, chemical peels, microneedling, and trichology procedures affect human tissue differently based on individual genetics, skin barrier health, compliance, and underlying systemic factors. Aurelia Skin & Hair Institute does not guarantee specific clinical outcomes or permanent hair removal.
          </p>
        </div>
      </div>
    </>
  );
}
