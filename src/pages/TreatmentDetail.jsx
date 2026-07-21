import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { CheckCircle2, Calendar, ShieldCheck, Clock, AlertTriangle } from 'lucide-react';
import { TREATMENTS } from '../data/treatmentsData';

export default function TreatmentDetail() {
  const { id } = useParams();
  const treatment = TREATMENTS.find(t => t.id === id) || TREATMENTS[0];

  return (
    <>
      <SEOHead 
        title={`${treatment.name} | Aurelia Dermatology`}
        description={treatment.shortDesc}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
        <Breadcrumbs items={[
          { label: 'Treatments', path: '/treatments' },
          { label: treatment.name }
        ]} />

        {/* HERO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
              {treatment.category}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-aubergine font-bold">
              {treatment.name}
            </h1>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
              {treatment.overview}
            </p>
            <div className="pt-2">
              <Link
                to="/booking"
                className="px-6 py-3 bg-terracotta text-white rounded-full font-sans text-xs font-semibold hover:bg-terracotta-hover transition-colors shadow-md inline-flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Treatment Consultation</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ResponsiveImage
              src={treatment.heroImage || treatment.image}
              alt={treatment.name}
              aspectRatio="aspect-[4/3]"
              overlay={true}
              badge={treatment.category}
            />
          </div>
        </div>

        {/* SUITABILITY & PROCEDURE STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-ivory-light border border-champagne p-6 rounded-2xl space-y-3 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-aubergine">Who May Be Suitable</h3>
            <ul className="space-y-2 text-xs text-charcoal/80 font-sans">
              {treatment.suitableFor?.map((item, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ivory-light border border-champagne p-6 rounded-2xl space-y-3 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-aubergine">Procedure Overview & Steps</h3>
            <ul className="space-y-2 text-xs text-charcoal/80 font-sans">
              {treatment.procedureDetails?.map((step, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-sage-dark flex-shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PREPARATION & RECOVERY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-peach/20 border border-peach/50 rounded-2xl space-y-2">
            <h4 className="font-serif text-lg font-bold text-aubergine flex items-center space-x-2">
              <Clock className="w-4 h-4 text-terracotta" />
              <span>Pre-Procedure Preparation</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-charcoal/80 font-sans">
              {treatment.preparationSteps?.map((prep, i) => (
                <li key={i}>• {prep}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-ivory-dark border border-champagne rounded-2xl space-y-2">
            <h4 className="font-serif text-lg font-bold text-aubergine flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-rosewood" />
              <span>Recovery & Expected Downtime</span>
            </h4>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
              {treatment.recoveryExpectations}
            </p>
            <p className="text-[11px] text-charcoal/70 font-sans italic pt-1">
              <strong>Session Guidance:</strong> {treatment.sessionGuidance}
            </p>
          </div>
        </div>

        <MedicalDisclaimer />
      </div>
    </>
  );
}
