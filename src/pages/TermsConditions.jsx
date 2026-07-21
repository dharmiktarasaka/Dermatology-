import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function TermsConditions() {
  return (
    <>
      <SEOHead 
        title="Terms & Conditions | Aurelia Skin & Hair Institute"
        description="Terms and conditions for website usage at Aurelia Skin & Hair Institute concept."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-6 text-xs text-charcoal/80 font-sans leading-relaxed">
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-aubergine">Terms & Conditions</h1>
        <p className="text-[11px] text-charcoal/60">Last Updated: July 20, 2026</p>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-aubergine">1. Portfolio Nature</h2>
          <p>
            This website is a demonstration concept for TARASAKA DIGITAL Solutions portfolio. Content published does not replace formal medical consultations with licensed physicians.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-aubergine">2. Intellectual Property</h2>
          <p>
            Design, layouts, custom SVG diagrams, and portfolio content are copyright TARASAKA DIGITAL Solutions.
          </p>
        </section>
      </div>
    </>
  );
}
