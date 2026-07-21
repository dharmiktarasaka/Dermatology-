import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import PortfolioDisclaimer from '../components/common/PortfolioDisclaimer';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';

export default function BeforeAfterPage() {
  return (
    <>
      <SEOHead 
        title="Before and After Visual Demo | Aurelia Dermatology"
        description="Interactive split-screen before and after comparison demonstration for acne scars, pigmentation, and trichology hair density."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
        <Breadcrumbs items={[{ label: 'Before & After Demo' }]} />

        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
            Demonstration Gallery
          </span>
          <h1 className="font-serif text-4xl font-bold text-aubergine">
            Before & After Comparison Gallery
          </h1>
          <p className="text-xs text-charcoal/75 font-sans">
            Interactive visual slider showcasing baseline assessments and targeted demonstration outcomes.
          </p>
        </div>

        <BeforeAfterSlider />

        <PortfolioDisclaimer />
        <MedicalDisclaimer />
      </div>
    </>
  );
}
