import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import PortfolioDisclaimer from '../components/common/PortfolioDisclaimer';

export default function Careers() {
  return (
    <>
      <SEOHead 
        title="Careers at Aurelia Skin & Hair Institute"
        description="Careers and clinical opportunities placeholder page for Aurelia Skin & Hair Institute."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-8 font-sans">
        <Breadcrumbs items={[{ label: 'Careers' }]} />

        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h1 className="font-serif text-4xl font-bold text-aubergine">Careers at Aurelia</h1>
          <p className="text-xs text-charcoal/75">
            Demonstration placeholder page for clinical care positions, dermatology residency opportunities, and clinic administration.
          </p>
        </div>

        <PortfolioDisclaimer />
      </div>
    </>
  );
}
