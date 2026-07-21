import React from 'react';
import { ExternalLink, Sparkles, Code, Check } from 'lucide-react';

export default function PortfolioSupportBanner() {
  const capabilities = [
    'Dermatology UI/UX Design',
    'Skin Clinic Website Architecture',
    'Medical Content Strategy & E-E-A-T',
    'Hair Loss & Trichology Discovery',
    'Before & After Presentation Readiness',
    'Appointment Booking UI Workflow',
    'Ahmedabad Local SEO & Schema',
    'Healthcare AEO / GEO Optimization',
    'CRM & WhatsApp Integration Readiness',
    'WCAG 2.2 Accessible Codebase'
  ];

  return (
    <section className="bg-aubergine text-ivory-light py-12 px-4 sm:px-6 lg:px-8 my-16 rounded-3xl border border-rosewood/40 shadow-luxury max-w-7xl mx-auto relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-80 h-80 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-terracotta text-white text-xs rounded-full font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TARASAKA DIGITAL Solutions • Portfolio Showcase</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Need a Premium Dermatology & Aesthetic Website Like This?
          </h3>

          <p className="text-xs text-champagne/90 leading-relaxed font-light font-sans max-w-xl">
            This project demonstrates how luxury aesthetic branding, evidence-based medical dermatology architecture, interactive before-and-after presentations, local SEO targeting, and conversion design come together to build patient trust.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-sans text-ivory/80">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-champagne flex-shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-rosewood/20 border border-rosewood/40 p-6 rounded-2xl text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-champagne font-bold block">
            Custom Healthcare Development
          </span>
          <p className="text-xs text-ivory/90 leading-relaxed">
            Get a production-grade website customized for your dermatology clinic, trichology institute, or aesthetic laser center.
          </p>

          <a
            href="https://tarasaka.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 w-full py-3 bg-terracotta text-white font-sans text-xs font-semibold rounded-full hover:bg-terracotta-hover transition-colors shadow-lg"
          >
            <span>Request Agency Consultation</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="text-[10px] text-champagne/60 font-sans">
            TARASAKA DIGITAL Solutions • Ahmedabad & Global Clients
          </div>
        </div>

      </div>
    </section>
  );
}
