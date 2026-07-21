import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import PortfolioDisclaimer from '../components/common/PortfolioDisclaimer';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { Heart, ShieldCheck, BookOpen, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    { title: 'Clinical Responsibility', desc: 'Honest diagnostic evaluation without unrealistic beauty promises or unnecessary treatments.', icon: ShieldCheck },
    { title: 'Barrier Preservation', desc: 'Prioritizing skin barrier integrity across all medical and aesthetic protocols.', icon: Heart },
    { title: 'Patient Education', desc: 'Empowering patients with clear understanding of their skin biology and triggers.', icon: BookOpen },
    { title: 'Inclusive Skin Care', desc: 'Protocol safety tailored across diverse Fitzpatrick skin tones and age groups.', icon: Users }
  ];

  return (
    <>
      <SEOHead 
        title="About Aurelia Skin & Hair Institute | Dermatology Philosophy"
        description="Learn about Aurelia Skin & Hair Institute's science-led, patient-centered dermatology philosophy, ethics, and clinical responsibility in Ahmedabad."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* HERO BRAND STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
              Our Ethos & Story
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-aubergine font-bold leading-tight">
              Science for Your Skin. <br />
              <span className="italic text-terracotta font-normal">Confidence for You.</span>
            </h1>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
              Aurelia Skin & Hair Institute was conceived as a modern dermatology center where medical precision and luxury aesthetic serenity coexist. We believe every patient deserves honest, evidence-based care tailored to their unique skin barrier.
            </p>
            <p className="text-xs text-charcoal/75 leading-relaxed font-sans">
              From managing complex medical conditions like eczema, rosacea, and acne vulgaris, to trichological hair loss evaluations and laser procedures, our focus remains on long-term skin health.
            </p>
          </div>

          <div className="lg:col-span-5">
            <ResponsiveImage
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
              alt="Aurelia Institute clinical atmosphere"
              aspectRatio="aspect-[4/3]"
              overlay={true}
              overlayText="Serene Architectural Practice"
            />
          </div>
        </div>

        {/* CORE CLINICAL VALUES */}
        <div className="space-y-6 pt-8 border-t border-champagne/50">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl font-bold text-aubergine">Our Clinical Pillars</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-ivory-light border border-champagne p-6 rounded-2xl shadow-editorial text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-peach/30 text-terracotta flex items-center justify-center mx-auto">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-aubergine">{v.title}</h3>
                  <p className="text-xs text-charcoal/75 font-sans leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FICTIONAL PORTFOLIO NOTICE */}
        <PortfolioDisclaimer />
        <MedicalDisclaimer />

      </div>
    </>
  );
}
