import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | Aurelia Skin & Hair Institute"
        description="Privacy policy and patient data security information for Aurelia Skin & Hair Institute website."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-6 text-xs text-charcoal/80 font-sans leading-relaxed">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-aubergine">Privacy Policy</h1>
        <p className="text-[11px] text-charcoal/60">Last Updated: July 20, 2026</p>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-aubergine">1. Overview</h2>
          <p>
            Aurelia Skin & Hair Institute respects patient privacy. This website is a frontend portfolio demonstration created by TARASAKA DIGITAL Solutions. No actual personal health information (PHI) or medical records are collected, stored, or processed on this server.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-aubergine">2. Form Submissions</h2>
          <p>
            Consultation booking forms and skin analysis tools on this website operate in client-side demonstration mode. In live production implementations, forms connect to secure HIPAA/DPDP-compliant clinic CRM endpoints.
          </p>
        </section>
      </div>
    </>
  );
}
