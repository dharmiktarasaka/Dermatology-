import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SkinAnalysisDemo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    primaryConcern: '',
    skinType: '',
    duration: '',
    sensitivity: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const concernsOptions = [
    { id: 'acne', label: 'Acne & Inflammatory Blemishes', desc: 'Breakouts, blackheads, post-acne marks' },
    { id: 'pigmentation', label: 'Hyperpigmentation & Melasma', desc: 'Uneven skin tone, sun spots, dark patches' },
    { id: 'hair', label: 'Hair Thinning & Scalp Shedding', desc: 'Receding hairline, crown thinning, dandruff' },
    { id: 'aging', label: 'Fine Lines & Texture Refinement', desc: 'Loss of firmness, enlarged pores, roughness' }
  ];

  const skinTypeOptions = ['Oily / Sebum Prone', 'Dry & Flaky', 'Combination Skin', 'Sensitive / Reactive'];
  const durationOptions = ['Less than 3 months', '3 to 12 months', 'Over 1 year chronic'];
  const sensitivityOptions = ['High (burns/flushes easily)', 'Moderate (occasional redness)', 'Low / Normal'];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else setSubmitted(true);
  };

  const resetTool = () => {
    setStep(1);
    setFormData({ primaryConcern: '', skinType: '', duration: '', sensitivity: '' });
    setSubmitted(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-8 bg-ivory-light border border-champagne/60 rounded-3xl p-6 sm:p-8 shadow-luxury">
      
      {/* TOOL HEADER */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-aubergine text-champagne text-xs rounded-full mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Frontend Interactive Skin & Scalp Guide</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-aubergine font-bold">
          Educational Skin Assessment Tool
        </h3>
        <p className="text-xs text-charcoal/70 mt-1 font-sans max-w-lg mx-auto">
          Answer 4 quick questions to receive general educational recommendations on consultation topics for your skin or hair concern.
        </p>
      </div>

      {!submitted ? (
        <div className="space-y-6">
          {/* STEP PROGRESS BAR */}
          <div className="flex items-center justify-between text-xs font-sans text-charcoal/60 mb-2">
            <span>Step {step} of 4</span>
            <span className="font-medium text-terracotta">{Math.round((step / 4) * 100)}% Completed</span>
          </div>
          <div className="w-full h-1.5 bg-champagne/40 rounded-full overflow-hidden">
            <div 
              className="h-full bg-terracotta transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          {/* STEP 1: PRIMARY CONCERN */}
          {step === 1 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h4 className="font-serif text-lg font-bold text-aubergine">1. What is your primary area of concern?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {concernsOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setFormData({ ...formData, primaryConcern: opt.id })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      formData.primaryConcern === opt.id
                        ? 'border-terracotta bg-peach/20 shadow-sm'
                        : 'border-champagne/50 hover:border-rosewood/40 bg-ivory-light'
                    }`}
                  >
                    <span className="font-serif font-bold text-aubergine block text-base">{opt.label}</span>
                    <span className="text-xs text-charcoal/70 font-sans block mt-1">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: SKIN TYPE */}
          {step === 2 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h4 className="font-serif text-lg font-bold text-aubergine">2. How would you describe your baseline skin type?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skinTypeOptions.map((st, i) => (
                  <button
                    key={i}
                    onClick={() => setFormData({ ...formData, skinType: st })}
                    className={`p-3.5 rounded-2xl border text-left transition-all font-sans text-sm ${
                      formData.skinType === st
                        ? 'border-terracotta bg-peach/20 font-semibold text-aubergine'
                        : 'border-champagne/50 hover:border-rosewood/40'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: DURATION */}
          {step === 3 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h4 className="font-serif text-lg font-bold text-aubergine">3. How long have you experienced this concern?</h4>
              <div className="space-y-2">
                {durationOptions.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setFormData({ ...formData, duration: d })}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all font-sans text-sm ${
                      formData.duration === d
                        ? 'border-terracotta bg-peach/20 font-semibold text-aubergine'
                        : 'border-champagne/50 hover:border-rosewood/40'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: SENSITIVITY */}
          {step === 4 && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <h4 className="font-serif text-lg font-bold text-aubergine">4. How reactive or sensitive is your skin to products?</h4>
              <div className="space-y-2">
                {sensitivityOptions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setFormData({ ...formData, sensitivity: s })}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all font-sans text-sm ${
                      formData.sensitivity === s
                        ? 'border-terracotta bg-peach/20 font-semibold text-aubergine'
                        : 'border-champagne/50 hover:border-rosewood/40'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* NAVIGATION BUTTONS */}
          <div className="flex items-center justify-between pt-4 border-t border-champagne/40">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-xs font-sans font-medium text-charcoal/70 hover:text-aubergine"
              >
                ← Back
              </button>
            ) : <div />}

            <button
              onClick={handleNext}
              disabled={
                (step === 1 && !formData.primaryConcern) ||
                (step === 2 && !formData.skinType) ||
                (step === 3 && !formData.duration) ||
                (step === 4 && !formData.sensitivity)
              }
              className="px-6 py-2.5 bg-terracotta text-white rounded-full font-sans text-xs font-semibold hover:bg-terracotta-hover disabled:opacity-50 transition-all flex items-center space-x-1.5 shadow-md"
            >
              <span>{step === 4 ? 'View Guidance Recommendation' : 'Next Question'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* ASSESSMENT SUMMARY RESULT CARD */
        <div className="space-y-6 animate-in zoom-in-95 duration-200">
          <div className="p-6 bg-aubergine text-ivory rounded-2xl border border-rosewood/40 text-center relative overflow-hidden">
            <CheckCircle2 className="w-10 h-10 text-champagne mx-auto mb-3" />
            <h4 className="font-serif text-2xl font-bold mb-1 text-white">Suggested Clinical Focus Area</h4>
            <p className="text-xs text-champagne/90 max-w-md mx-auto">
              Based on your selections for <strong>{formData.primaryConcern || 'Selected Concern'}</strong> with <strong>{formData.skinType}</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-4 bg-ivory-dark rounded-xl border border-champagne/50">
              <span className="font-bold text-aubergine block mb-1 font-serif text-sm">Recommended Consultation Type</span>
              <p className="text-charcoal/80">
                {formData.primaryConcern === 'hair' 
                  ? 'Digital Trichoscopy & Scalp Health Evaluation' 
                  : formData.primaryConcern === 'acne' 
                  ? 'Clinical Medical Acne & Barrier Mapping Consultation'
                  : formData.primaryConcern === 'pigmentation'
                  ? 'Melanocyte & Melasma Depth Evaluation'
                  : 'Aesthetic Texture & Collagen Assessment'}
              </p>
            </div>
            <div className="p-4 bg-ivory-dark rounded-xl border border-champagne/50">
              <span className="font-bold text-aubergine block mb-1 font-serif text-sm">Key Topics to Discuss</span>
              <p className="text-charcoal/80">
                Barrier preservation, potential trigger identification, non-comedogenic product selection, and personalized procedure suitability.
              </p>
            </div>
          </div>

          {/* NON-DIAGNOSTIC MANDATORY DISCLAIMER */}
          <div className="p-3 bg-peach/30 rounded-xl border border-peach text-xs text-charcoal/80 flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong>Non-Diagnostic Notice:</strong> This interactive questionnaire provides general educational guidance only. It does not diagnose medical skin conditions or replace evaluation by a qualified dermatologist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/booking"
              className="w-full sm:w-auto px-6 py-3 bg-terracotta text-white rounded-full font-sans text-xs font-semibold text-center hover:bg-terracotta-hover shadow-md"
            >
              Book Clinical Consultation with Doctor
            </Link>
            <button
              onClick={resetTool}
              className="w-full sm:w-auto px-5 py-3 border border-aubergine text-aubergine rounded-full font-sans text-xs font-semibold flex items-center justify-center space-x-1.5 hover:bg-aubergine/5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Assessment</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
