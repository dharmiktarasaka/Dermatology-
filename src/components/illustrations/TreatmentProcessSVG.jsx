import React from 'react';
import { Search, Calendar, Sparkles, ShieldCheck } from 'lucide-react';

export default function TreatmentProcessSVG() {
  const steps = [
    {
      num: '01',
      title: 'Concern Discovery',
      desc: 'Explore targeted education for skin, scalp, hair, and laser options.',
      icon: Search
    },
    {
      num: '02',
      title: 'Clinical Evaluation',
      desc: 'Dermoscopic examination & barrier assessment with a qualified specialist.',
      icon: Calendar
    },
    {
      num: '03',
      title: 'Tailored Procedure',
      desc: 'Evidence-based procedure execution utilizing calibrated technologies.',
      icon: Sparkles
    },
    {
      num: '04',
      title: 'Aftercare & Support',
      desc: 'Structured home recovery routine and progress evaluation check-ins.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {/* Connecting background line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-champagne/60 -z-10 transform -translate-y-4" />

        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-ivory-light border border-champagne/40 rounded-2xl p-6 shadow-editorial text-center relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-aubergine text-ivory flex items-center justify-center mx-auto mb-4 font-serif text-lg font-bold group-hover:bg-terracotta transition-colors">
                {s.num}
              </div>
              <div className="w-10 h-10 rounded-full bg-sage/10 text-sage-dark flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-aubergine font-bold mb-2">{s.title}</h4>
              <p className="text-xs text-charcoal/75 leading-relaxed font-sans">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
