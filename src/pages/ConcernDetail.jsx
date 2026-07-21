import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import TreatmentCard from '../components/cards/TreatmentCard';
import FAQAccordion from '../components/ui/FAQAccordion';
import { CONCERNS } from '../data/concernsData';
import { TREATMENTS } from '../data/treatmentsData';
import { CheckCircle2, Calendar, AlertCircle } from 'lucide-react';

export default function ConcernDetail() {
  const { id } = useParams();
  const concern = CONCERNS.find(c => c.id === id) || CONCERNS[0];

  const related = TREATMENTS.filter(t => concern.relatedTreatments?.includes(t.id));

  return (
    <>
      <SEOHead 
        title={`${concern.name} | Aurelia Skin & Hair Institute`}
        description={concern.shortDesc}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
        <Breadcrumbs items={[
          { label: 'Concerns', path: '/concerns' },
          { label: concern.name }
        ]} />

        {/* HERO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
              {concern.category} Concern • {concern.targetGroup}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-aubergine font-bold">
              {concern.name}
            </h1>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
              {concern.overview}
            </p>
            <div className="pt-2">
              <Link
                to="/booking"
                className="px-6 py-3 bg-terracotta text-white rounded-full font-sans text-xs font-semibold hover:bg-terracotta-hover transition-colors shadow-md inline-flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation for {concern.name}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ResponsiveImage
              src={concern.heroImage || concern.image}
              alt={concern.name}
              aspectRatio="aspect-[4/3]"
              overlay={true}
              badge={concern.category}
            />
          </div>
        </div>

        {/* COMMON SIGNS & CONTRIBUTING FACTORS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-ivory-light border border-champagne p-6 rounded-2xl space-y-3 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-aubergine">Common Signs & Symptoms</h3>
            <ul className="space-y-2 text-xs text-charcoal/80 font-sans">
              {concern.commonSigns?.map((sign, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ivory-light border border-champagne p-6 rounded-2xl space-y-3 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-aubergine">Potential Contributing Factors</h3>
            <ul className="space-y-2 text-xs text-charcoal/80 font-sans">
              {concern.contributingFactors?.map((factor, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-rosewood flex-shrink-0 mt-0.5" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* WHEN TO CONSULT & CLINICAL PROCESS */}
        <div className="bg-peach/20 border border-peach/50 p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="font-serif text-2xl font-bold text-aubergine">When to Seek Dermatological Consultation</h3>
          <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
            {concern.whenToConsult}
          </p>

          <div className="pt-2">
            <h4 className="font-serif text-lg font-bold text-aubergine mb-1">What to Expect During Your Appointment</h4>
            <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
              {concern.consultationProcess}
            </p>
          </div>
        </div>

        {/* RELATED PROCEDURES */}
        {related.length > 0 && (
          <div className="space-y-6 pt-4">
            <h2 className="font-serif text-3xl font-bold text-aubergine">Related Clinical Procedures & Therapies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(t => (
                <TreatmentCard key={t.id} treatment={t} />
              ))}
            </div>
          </div>
        )}

        <MedicalDisclaimer />
      </div>
    </>
  );
}
