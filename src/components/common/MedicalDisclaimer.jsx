import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function MedicalDisclaimer({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-peach/30 border-l-4 border-terracotta p-3 rounded-r-lg text-xs text-charcoal/80 my-4 flex items-start space-x-2">
        <AlertCircle className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
        <span>
          <strong>Medical Note:</strong> Educational guidance only. Individual skin & hair concerns require personalized in-person consultation with a qualified dermatologist. No medical outcomes are guaranteed.
        </span>
      </div>
    );
  }

  return (
    <div className="bg-ivory-dark/60 border border-champagne/50 rounded-2xl p-6 my-8 text-xs text-charcoal/80 leading-relaxed shadow-sm">
      <div className="flex items-center space-x-2 text-terracotta font-serif font-semibold text-sm mb-2">
        <AlertCircle className="w-4 h-4" />
        <span>Medical & Treatment Suitability Disclaimer</span>
      </div>
      <p className="mb-2">
        Information published on this website is for general health education purposes only and does not constitute formal medical diagnosis, prescription advice, or procedure recommendations. Treatment suitability, expected outcomes, session counts, recovery timelines, and potential risks vary between individuals based on medical history, skin barrier health, genetics, and baseline assessment.
      </p>
      <p>
        For sudden, severe, rapidly spreading, painful, bleeding, or concerning skin lesions, seek immediate in-person evaluation from a licensed medical specialist or healthcare facility.
      </p>
    </div>
  );
}
