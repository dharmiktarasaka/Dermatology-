import React, { useState } from 'react';
import { Calendar, User, Mail, Phone, MapPin, CheckCircle2, Clock, Upload, ShieldCheck } from 'lucide-react';
import { CONCERNS } from '../../data/concernsData';
import { TREATMENTS } from '../../data/treatmentsData';

export default function MultiStepBookingForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    ageGroup: 'Adult (18-45)',
    gender: 'Prefer not to say',
    city: 'Ahmedabad',
    concernCategory: 'Medical Dermatology',
    specificConcern: 'acne-vulgaris',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    consultationMode: 'In-Clinic Consultation',
    preferredDoctor: 'Dr. Aurelia Lead Dermatologist (Placeholder)',
    notes: '',
    uploadedImageName: ''
  });

  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Valid phone number is required';
    if (!formData.email.includes('@')) errs.email = 'Valid email address is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!formData.specificConcern) errs.specificConcern = 'Please select a concern or treatment';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
    else if (step === 3) {
      setSubmitted(true);
    }
  };

  const handleSimulatedUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, uploadedImageName: e.target.files[0].name });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-ivory-light border border-champagne/60 rounded-3xl p-6 sm:p-10 shadow-luxury my-8">
      
      {/* FORM TITLE */}
      <div className="text-center mb-8">
        <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans block mb-1">
          Patient Appointment Request
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
          Book a Skin Consultation
        </h2>
        <p className="text-xs text-charcoal/70 mt-1 font-sans">
          Select your concern, preferred date, and clinical consultation preferences.
        </p>
      </div>

      {!submitted ? (
        <div>
          {/* STEP INDICATOR HEADER */}
          <div className="grid grid-cols-3 gap-2 mb-8 text-center text-xs font-sans">
            <div className={`py-2 px-3 rounded-full transition-colors ${
              step === 1 ? 'bg-aubergine text-champagne font-bold' : step > 1 ? 'bg-sage text-white' : 'bg-ivory-dark text-charcoal/60'
            }`}>
              1. Patient Details
            </div>
            <div className={`py-2 px-3 rounded-full transition-colors ${
              step === 2 ? 'bg-aubergine text-champagne font-bold' : step > 2 ? 'bg-sage text-white' : 'bg-ivory-dark text-charcoal/60'
            }`}>
              2. Concern Selection
            </div>
            <div className={`py-2 px-3 rounded-full transition-colors ${
              step === 3 ? 'bg-aubergine text-champagne font-bold' : 'bg-ivory-dark text-charcoal/60'
            }`}>
              3. Timing & Confirmation
            </div>
          </div>

          {/* STEP 1: PATIENT DETAILS */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="font-serif text-xl font-bold text-aubergine mb-3">Step 1: Patient Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1 font-sans">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-rosewood absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Ananya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 bg-white border border-champagne rounded-xl text-xs focus:outline-none focus:border-terracotta"
                    />
                  </div>
                  {errors.fullName && <span className="text-[10px] text-terracotta mt-1 block">{errors.fullName}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1 font-sans">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-rosewood absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 bg-white border border-champagne rounded-xl text-xs focus:outline-none focus:border-terracotta"
                    />
                  </div>
                  {errors.phone && <span className="text-[10px] text-terracotta mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1 font-sans">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-rosewood absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 bg-white border border-champagne rounded-xl text-xs focus:outline-none focus:border-terracotta"
                    />
                  </div>
                  {errors.email && <span className="text-[10px] text-terracotta mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1 font-sans">City / Location</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-rosewood absolute left-3 top-3" />
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 bg-white border border-champagne rounded-xl text-xs focus:outline-none focus:border-terracotta"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1 font-sans">Age Group</label>
                  <select
                    value={formData.ageGroup}
                    onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-champagne rounded-xl text-xs focus:outline-none focus:border-terracotta"
                  >
                    <option>Teen (Under 18)</option>
                    <option>Adult (18-45)</option>
                    <option>Senior Adult (45+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1 font-sans">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-champagne rounded-xl text-xs focus:outline-none focus:border-terracotta"
                  >
                    <option>Female</option>
                    <option>Male</option>
                    <option>Non-binary / Other</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: CONCERN SELECTION */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="font-serif text-xl font-bold text-aubergine mb-3">Step 2: Concern & Service Category</h3>
              
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1 font-sans">Primary Specialty Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {['Medical Dermatology', 'Hair & Scalp Care', 'Aesthetic Dermatology', 'Laser Treatments'].map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setFormData({ ...formData, concernCategory: cat })}
                      className={`p-2.5 rounded-xl border text-center font-sans font-medium transition-all ${
                        formData.concernCategory === cat ? 'bg-terracotta text-white border-terracotta' : 'bg-white border-champagne text-charcoal/80'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1 font-sans">Specific Skin or Hair Concern</label>
                <select
                  value={formData.specificConcern}
                  onChange={(e) => setFormData({ ...formData, specificConcern: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-champagne rounded-xl text-xs focus:outline-none focus:border-terracotta"
                >
                  <option value="">-- Select Specific Concern --</option>
                  {CONCERNS.map((c) => (
                    <option key={c.id} value={c.id}>{c.name} ({c.category})</option>
                  ))}
                </select>
              </div>

              {/* SIMULATED IMAGE UPLOADER */}
              <div className="p-4 bg-ivory-dark/60 rounded-2xl border border-dashed border-rosewood/30">
                <label className="block text-xs font-semibold text-aubergine mb-1 font-serif">
                  Optional: Upload Clear Photo of Concern (Frontend Demo)
                </label>
                <div className="flex items-center space-x-3 mt-2">
                  <label className="px-4 py-2 bg-aubergine text-ivory text-xs rounded-xl cursor-pointer hover:bg-terracotta transition-colors flex items-center space-x-1.5 font-sans">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Choose File</span>
                    <input type="file" accept="image/*" onChange={handleSimulatedUpload} className="hidden" />
                  </label>
                  <span className="text-xs text-charcoal/70 font-sans">
                    {formData.uploadedImageName || 'No file chosen'}
                  </span>
                </div>

                <p className="text-[10px] text-charcoal/60 mt-2 italic font-sans">
                  <strong>Notice:</strong> Photo upload is a frontend simulation. Medical images are securely processed and reviewed through an approved clinical workflow before production use. No AI photo diagnosis is performed.
                </p>
              </div>
            </div>
          )}

          {/* STEP 3: TIMING & CONFIRMATION */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="font-serif text-xl font-bold text-aubergine mb-3">Step 3: Appointment Preference</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1 font-sans">Preferred Date *</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-champagne rounded-xl text-xs focus:outline-none focus:border-terracotta"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1 font-sans">Preferred Time Slot</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-champagne rounded-xl text-xs focus:outline-none focus:border-terracotta"
                  >
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Afternoon (2:00 PM - 5:00 PM)</option>
                    <option>Evening (5:00 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1 font-sans">Consultation Mode</label>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {['In-Clinic Consultation', 'Video Consultation Demo'].map((mode) => (
                    <button
                      type="button"
                      key={mode}
                      onClick={() => setFormData({ ...formData, consultationMode: mode })}
                      className={`p-3 rounded-xl border text-center font-sans font-medium transition-all ${
                        formData.consultationMode === mode ? 'bg-aubergine text-champagne border-aubergine' : 'bg-white border-champagne text-charcoal/80'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1 font-sans">Additional Notes or Symptoms</label>
                <textarea
                  rows="3"
                  placeholder="Share any specific symptoms, previous treatments tried, or allergy details..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-champagne rounded-xl text-xs focus:outline-none focus:border-terracotta"
                />
              </div>
            </div>
          )}

          {/* NAV BUTTONS */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-champagne/40">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-5 py-2.5 text-xs font-sans font-medium text-charcoal/70 hover:text-aubergine"
              >
                ← Back
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3 bg-terracotta text-white rounded-full font-sans text-xs font-semibold hover:bg-terracotta-hover transition-all shadow-md"
            >
              {step === 3 ? 'Confirm Consultation Request' : 'Continue'}
            </button>
          </div>
        </div>
      ) : (
        /* CONFIRMATION SUCCESS CARD */
        <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-sage/20 text-sage-dark flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-aubergine">
            Consultation Request Received
          </h3>
          <p className="text-xs text-charcoal/80 max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. Your appointment enquiry has been processed in demonstration mode with Reference <strong>#AUR-{Math.floor(100000 + Math.random() * 900000)}</strong>.
          </p>

          <div className="bg-ivory-dark p-4 rounded-2xl border border-champagne max-w-md mx-auto text-left text-xs space-y-1.5 font-sans">
            <div><strong className="text-aubergine font-serif">Concern:</strong> {formData.specificConcern || formData.concernCategory}</div>
            <div><strong className="text-aubergine font-serif">Preferred Mode:</strong> {formData.consultationMode}</div>
            <div><strong className="text-aubergine font-serif">Preferred Slot:</strong> {formData.preferredDate || 'Earliest available'} ({formData.preferredTime})</div>
            <div><strong className="text-aubergine font-serif">Contact Phone:</strong> {formData.phone}</div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/917600583156?text=Hello%20Aurelia%20Institute%2C%20I%20just%20submitted%20a%20consultation%20request%20on%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sage text-white rounded-full font-sans text-xs font-semibold shadow-sm hover:bg-sage-dark transition-colors"
            >
              Confirm via WhatsApp Desk
            </a>
            <button
              onClick={() => { setSubmitted(false); setStep(1); }}
              className="px-5 py-3 border border-champagne text-charcoal rounded-full font-sans text-xs hover:bg-white"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
