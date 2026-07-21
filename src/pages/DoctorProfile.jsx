import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import PortfolioDisclaimer from '../components/common/PortfolioDisclaimer';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { Award, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DoctorProfile() {
  return (
    <>
      <SEOHead 
        title="Doctor Profile Placeholder | Aurelia Dermatology Ahmedabad"
        description="View consultation approach, medical focus areas, and clinical experience layout for Aurelia Skin & Hair Institute."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
        <Breadcrumbs items={[{ label: 'Doctor Profile Placeholder' }]} />

        <div className="bg-ivory-light border border-champagne/60 rounded-3xl p-8 sm:p-10 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1594824813571-2b533417e07f?auto=format&fit=crop&w=800&q=80"
              alt="Physician consultation portrait placeholder"
              aspectRatio="aspect-[4/5]"
              overlay={true}
              badge="Demonstration Profile Placeholder"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-peach/40 text-terracotta text-xs rounded-full font-sans font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>Medical Director Profile Placeholder</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
              Dr. Aurelia Lead Dermatologist Placeholder
            </h1>
            <p className="text-xs font-semibold text-terracotta font-sans tracking-wide uppercase">
              MD Dermatology, Venereology & Leprosy (Placeholder) • Member IADV (Placeholder)
            </p>

            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
              Specializing in medical acne management, barrier preservation, trichological scalp evaluation, and dark skin-safe laser procedures. Focused on patient education and evidence-based diagnostic clarity.
            </p>

            <div className="space-y-2 pt-2 text-xs font-sans text-charcoal/80">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta" />
                <span><strong>Areas of Special Interest:</strong> Acne Scars, Trichoscopy, Laser Hair Reduction, Barrier Repair</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta" />
                <span><strong>Languages Spoken:</strong> English, Gujarati, Hindi (Placeholder)</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/booking"
                className="px-6 py-3 bg-terracotta text-white rounded-full font-sans text-xs font-semibold hover:bg-terracotta-hover transition-colors shadow-md inline-flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Consultation with Doctor</span>
              </Link>
            </div>
          </div>

        </div>

        <PortfolioDisclaimer />
        <MedicalDisclaimer />
      </div>
    </>
  );
}
