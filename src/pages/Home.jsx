import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Calendar, Search, ArrowRight, ShieldCheck, 
  Award, Heart, User, CheckCircle2, Sliders, MapPin, 
  Clock, Phone, HelpCircle
} from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import ImageCollage from '../components/ui/ImageCollage';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import SkinAnalysisDemo from '../components/ui/SkinAnalysisDemo';
import FAQAccordion from '../components/ui/FAQAccordion';
import PortfolioSupportBanner from '../components/ui/PortfolioSupportBanner';
import ConcernCard from '../components/cards/ConcernCard';
import TreatmentCard from '../components/cards/TreatmentCard';
import ArticleCard from '../components/cards/ArticleCard';
import HairCycleSVG from '../components/illustrations/HairCycleSVG';
import SkinLayersSVG from '../components/illustrations/SkinLayersSVG';
import TreatmentProcessSVG from '../components/illustrations/TreatmentProcessSVG';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import PortfolioDisclaimer from '../components/common/PortfolioDisclaimer';
import { CONCERNS } from '../data/concernsData';
import { TREATMENTS } from '../data/treatmentsData';
import { ARTICLES } from '../data/articlesData';
import { CLINIC_GALLERY } from '../data/clinicGalleryData';
import { LOCAL_SEO } from '../data/localSeoData';

export default function Home() {
  const [activeConcernFilter, setActiveConcernFilter] = useState('All');
  const [concernSearch, setConcernSearch] = useState('');

  const filterCategories = ['All', 'Skin', 'Hair', 'Scalp', 'Nails', 'Aesthetic'];

  const filteredConcerns = CONCERNS.filter(c => {
    const matchesFilter = activeConcernFilter === 'All' || c.category.includes(activeConcernFilter);
    const matchesQuery = concernSearch === '' || 
      c.name.toLowerCase().includes(concernSearch.toLowerCase()) || 
      c.shortDesc.toLowerCase().includes(concernSearch.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <>
      <SEOHead 
        title="Dermatologist in Ahmedabad | Aurelia Skin & Hair Institute"
        description="Aurelia Skin & Hair Institute provides medical dermatology, hair loss trichology, laser procedures, and aesthetic skin rejuvenation in Satellite, Ahmedabad."
      />

      <div className="space-y-16 pb-12 overflow-x-hidden">
        
        {/* ================================================== */}
        {/* SECTION 1: CINEMATIC HERO */}
        {/* ================================================== */}
        <section className="relative min-h-[90vh] flex items-center pt-32 sm:pt-36 lg:pt-44 pb-16 bg-ivory overflow-hidden">
          {/* Subtle warm decorative background blobs */}
          <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-peach/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* LEFT: Expressive Headline & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-peach/40 border border-terracotta/20 text-terracotta text-xs font-semibold font-sans">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Dermatology, Trichology & Aesthetic Institute • Ahmedabad</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-aubergine font-bold leading-[1.1] tracking-tight">
                  Dermatology Rooted in Science, <br className="hidden sm:inline" />
                  <span className="italic font-normal text-terracotta">Designed Around You</span>
                </h1>

                <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans max-w-2xl font-light">
                  Explore thoughtful care for skin, hair, scalp, and aesthetic concerns through a modern dermatology experience focused on education, comfort, and responsible clinical care planning.
                </p>

                {/* HERO BUTTONS */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/booking"
                    className="px-7 py-3.5 bg-terracotta text-white rounded-full font-sans text-xs font-semibold hover:bg-terracotta-hover transition-all duration-300 shadow-luxury hover:-translate-y-0.5 flex items-center space-x-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book a Skin Consultation</span>
                  </Link>

                  <Link
                    to="/concerns"
                    className="px-6 py-3.5 bg-aubergine text-champagne rounded-full font-sans text-xs font-semibold hover:bg-aubergine-900 transition-all duration-300 shadow-md flex items-center space-x-1.5"
                  >
                    <span>Explore Skin Concerns</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/treatments"
                    className="px-5 py-3.5 border border-aubergine/30 text-aubergine rounded-full font-sans text-xs font-semibold hover:bg-aubergine/5 transition-all"
                  >
                    View Treatments
                  </Link>
                </div>

                {/* TRUST BADGES & METRICS */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-champagne/60 text-xs font-sans text-charcoal/70">
                  <div>
                    <span className="font-serif text-2xl font-bold text-aubergine block">16+</span>
                    <span className="text-[11px] block mt-0.5">Dermatological Conditions</span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl font-bold text-aubergine block">4 Services</span>
                    <span className="text-[11px] block mt-0.5">Medical, Hair, Aesthetic & Laser</span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl font-bold text-terracotta block">Satellite</span>
                    <span className="text-[11px] block mt-0.5">S.G. Highway, Ahmedabad</span>
                  </div>
                </div>

              </div>

              {/* RIGHT: EDITORIAL FULL PHOTOGRAPHY & FLOATING APPOINTMENT CARD */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-luxury border-2 border-champagne/40">
                  <ResponsiveImage
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                    alt="Dermatologist conducting patient skin consultation"
                    aspectRatio="aspect-[4/5]"
                    overlay={true}
                    badge="Aurelia Clinical Practice"
                  />
                </div>

                {/* Floating Appointment Card */}
                <div className="absolute -bottom-6 -left-6 bg-ivory-light border border-champagne p-4 rounded-2xl shadow-luxury max-w-xs hidden sm:flex items-center space-x-3 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-aubergine">Patient-Centered Care</h5>
                    <p className="text-[10px] text-charcoal/70 font-sans leading-tight mt-0.5">
                      Tailored diagnostic assessments without sales pressure.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 2: SKIN CONCERN FINDER */}
        {/* ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
              Interactive Concern Discovery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
              What Would You Like Help With?
            </h2>
            <p className="text-xs text-charcoal/75 font-sans">
              Filter by category or search your concern to learn about clinical options and when to consult.
            </p>
          </div>

          {/* SEARCH & FILTERS */}
          <div className="space-y-4 mb-8">
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-rosewood absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search concern (e.g. acne, hair loss, melasma, eczema)..."
                value={concernSearch}
                onChange={(e) => setConcernSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-champagne rounded-full text-xs font-sans focus:outline-none focus:border-terracotta shadow-sm"
              />
            </div>

            <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2">
              {filterCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveConcernFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-sans whitespace-nowrap transition-all ${
                    activeConcernFilter === cat 
                      ? 'bg-aubergine text-champagne font-semibold shadow-sm' 
                      : 'bg-ivory-dark text-charcoal/75 hover:text-aubergine'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* CONCERN CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredConcerns.map((concern) => (
              <ConcernCard key={concern.id} concern={concern} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/concerns"
              className="inline-flex items-center space-x-2 text-xs font-bold font-sans text-terracotta hover:underline"
            >
              <span>View Full Directory of 16+ Skin & Hair Concerns →</span>
            </Link>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 3: EDITORIAL INTRODUCTION */}
        {/* ================================================== */}
        <section className="bg-ivory-dark py-16 border-y border-champagne/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* LEFT: ASYMMETRIC OVERLAPPING PHOTOS */}
              <div className="lg:col-span-6 relative">
                <ResponsiveImage
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                  alt="Dermatology examination environment"
                  aspectRatio="aspect-[4/3]"
                  overlay={true}
                  overlayText="Clinical Dermoscopy & Diagnostic Rigor"
                />
              </div>

              {/* RIGHT: BRAND PHILOSOPHY CONTENT */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
                  The Aurelia Ethos
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold leading-tight">
                  Where Medical Rigor Meets Thoughtful Aesthetic Care
                </h2>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
                  At Aurelia Skin & Hair Institute, we believe healthy skin is achieved through clinical understanding rather than quick-fix promises. Whether managing chronic eczema, pattern hair loss, active acne, or sun damage, every patient receives a personalized evaluation.
                </p>

                <div className="space-y-2 pt-2 text-xs font-sans text-charcoal/80">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                    <span><strong>Clinical Responsibility:</strong> Honest diagnostic communication without exaggerated claims.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                    <span><strong>Barrier-First Care:</strong> Prioritizing skin barrier integrity across all medical and aesthetic plans.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                    <span><strong>Inclusive Skin Typing:</strong> Protocol safety calibrated for all Fitzpatrick skin tones.</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-aubergine text-ivory text-xs font-semibold rounded-full hover:bg-aubergine-900 transition-colors"
                  >
                    <span>Read Our Brand Philosophy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 4: MEDICAL DERMATOLOGY */}
        {/* ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
                Evidence-Based Care
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
                Medical Dermatology
              </h2>
              <p className="text-xs text-charcoal/75 font-sans">
                Diagnosis and clinical management for acute and chronic conditions of the skin, hair, and nails.
              </p>
            </div>
            <Link
              to="/medical-dermatology"
              className="mt-4 md:mt-0 text-xs font-bold font-sans text-aubergine hover:text-terracotta flex items-center space-x-1"
            >
              <span>Explore Medical Dermatology →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TREATMENTS.filter(t => t.category === 'Medical Dermatology').concat([
              {
                id: 'eczema-barrier-care',
                name: 'Eczema & Atopic Barrier Therapy',
                category: 'Medical Dermatology',
                shortDesc: 'Restorative barrier care and non-steroidal inflammation management.',
                image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
              },
              {
                id: 'rosacea-vascular-care',
                name: 'Rosacea & Facial Redness Support',
                category: 'Medical Dermatology',
                shortDesc: 'Vascular cooling and Demodex balancing protocols for sensitive skin.',
                image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
              }
            ]).slice(0, 3).map((t, idx) => (
              <TreatmentCard key={idx} treatment={t} />
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 5: HAIR AND SCALP CARE & DIAGRAM */}
        {/* ================================================== */}
        <section className="bg-ivory-light py-16 border-y border-champagne/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs uppercase tracking-widest text-sage-dark font-bold font-sans">
                  Trichology & Scalp Health
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
                  Hair Loss Evaluation & Scalp Analysis
                </h2>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
                  Hair thinning and scalp flaking require systematic evaluation. Using high-resolution digital trichoscopy, we inspect hair density, follicle openings, and sebum balance to identify the root cause of shedding.
                </p>
                <div className="pt-2">
                  <Link
                    to="/hair-scalp"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-sage text-white text-xs font-semibold rounded-full hover:bg-sage-dark transition-colors"
                  >
                    <span>Explore Hair & Scalp Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <ResponsiveImage
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                  alt="Dermatologist examining hair density under micro camera"
                  aspectRatio="aspect-[4/3]"
                  overlay={true}
                  overlayText="Digital Trichoscopy Scalp Suite"
                />
              </div>
            </div>

            {/* CUSTOM SVG ILLUSTRATION: HAIR CYCLE */}
            <HairCycleSVG />

          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 6: AESTHETIC DERMATOLOGY */}
        {/* ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
              Responsible Skin Rejuvenation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
              Aesthetic Dermatology
            </h2>
            <p className="text-xs text-charcoal/75 font-sans">
              Chemical peels, microneedling, hydration procedures, and texture refinement designed around skin health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENTS.filter(t => t.category === 'Aesthetic Dermatology').map((t) => (
              <TreatmentCard key={t.id} treatment={t} />
            ))}
          </div>

          <MedicalDisclaimer compact={true} />
        </section>

        {/* ================================================== */}
        {/* SECTION 7: LASER TREATMENTS */}
        {/* ================================================== */}
        <section className="bg-aubergine text-ivory-light py-16 my-8 border-y border-rosewood/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs uppercase tracking-widest text-champagne font-bold font-sans">
                Calibrated Technologies
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
                Laser Treatments & Energy Technologies
              </h2>
              <p className="text-xs text-champagne/80 font-sans font-light">
                Medical laser hair reduction, pigmentation lasers, and acne scar resurfacing with integrated skin cooling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TREATMENTS.filter(t => t.category === 'Laser Treatments').map((t) => (
                <div key={t.id} className="bg-aubergine-900 border border-rosewood/40 rounded-2xl overflow-hidden p-5 space-y-3">
                  <ResponsiveImage
                    src={t.image}
                    alt={t.name}
                    aspectRatio="aspect-[16/9]"
                  />
                  <h3 className="font-serif text-xl font-bold text-white">{t.name}</h3>
                  <p className="text-xs text-champagne/75 font-sans line-clamp-2">{t.shortDesc}</p>
                  <Link
                    to={`/treatments/${t.id}`}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-terracotta hover:underline font-sans pt-1"
                  >
                    <span>View Safety & Details →</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 8: DOCTOR PROFILE */}
        {/* ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-ivory-light border border-champagne/60 rounded-3xl p-8 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <ResponsiveImage
                src="https://images.unsplash.com/photo-1594824813571-2b533417e07f?auto=format&fit=crop&w=800&q=80"
                alt="Lead Dermatologist placeholder portrait"
                aspectRatio="aspect-[4/5]"
                overlay={true}
                badge="Lead Dermatologist Placeholder"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-peach/40 text-terracotta text-xs rounded-full font-sans font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Verified Clinical Leadership Placeholder</span>
              </div>

              <h2 className="font-serif text-3xl font-bold text-aubergine">
                Consultation Philosophy & Medical Leadership
              </h2>

              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
                Our dermatological approach centers on thorough patient education, barrier restoration, and evidence-based procedure selection. Every skin journey begins with active listening and clear diagnostic explanation.
              </p>

              <div className="p-3.5 bg-peach/20 rounded-xl border border-peach text-xs text-charcoal/80 font-sans italic">
                "Doctor profiles and credentials shown on this page are portfolio placeholders and must be replaced with verified client information."
              </div>

              <div className="pt-2">
                <Link
                  to="/doctor-profile"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-aubergine text-ivory text-xs font-semibold rounded-full hover:bg-aubergine-900 transition-colors font-sans"
                >
                  <span>View Doctor Profile & Credentials</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 9: PERSONAL CONSULTATION JOURNEY */}
        {/* ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
              Structured Clinical Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
              Your Personal Care Journey
            </h2>
            <p className="text-xs text-charcoal/75 font-sans">
              From your initial concern discovery to post-procedure aftercare guidance.
            </p>
          </div>

          <TreatmentProcessSVG />
        </section>

        {/* ================================================== */}
        {/* SECTION 10: SKIN ANALYSIS EXPERIENCE */}
        {/* ================================================== */}
        <section className="py-8 bg-ivory">
          <SkinAnalysisDemo />
        </section>

        {/* ================================================== */}
        {/* SECTION 11: BEFORE-AND-AFTER DEMO */}
        {/* ================================================== */}
        <section className="py-8 bg-ivory-dark border-y border-champagne/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
              <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
                Evidence Presentation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
                Before & After Visual Demo
              </h2>
              <p className="text-xs text-charcoal/75 font-sans">
                Drag the interactive slider to compare baseline assessments with targeted demonstration outcomes.
              </p>
            </div>

            <BeforeAfterSlider />
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 12: CLINIC EXPERIENCE GALLERY */}
        {/* ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
              Interior & Environment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
              The Aurelia Clinic Experience
            </h2>
            <p className="text-xs text-charcoal/75 font-sans">
              Warm ivory architecture designed for patient comfort, privacy, and serene clinical consultation.
            </p>
          </div>

          <ImageCollage />
        </section>

        {/* ================================================== */}
        {/* SECTION 13: INCLUSIVE SKIN CARE */}
        {/* ================================================== */}
        <section className="bg-peach/20 border-y border-peach/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs uppercase tracking-widest text-rosewood font-bold font-sans">
                  Fitzpatrick Diversity & Inclusion
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
                  Skin Care Should Reflect Every Kind of Skin
                </h2>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans font-light">
                  Different skin tones and ages present unique physiological traits. Deep skin tones require gentle energy parameters to prevent post-inflammatory hyperpigmentation, while mature skin benefits from barrier hydration alongside collagen stimulation.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                  <div className="p-3 bg-white rounded-xl border border-champagne/40">
                    <strong className="text-aubergine block font-serif">Deep Skin Tone Safety</strong>
                    <span className="text-charcoal/70 text-[11px]">Calibrated Nd:YAG laser wavelengths & mild peels.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-champagne/40">
                    <strong className="text-aubergine block font-serif">Men's Skin & Beard Care</strong>
                    <span className="text-charcoal/70 text-[11px]">Folliculitis barbae & thick sebum management.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-champagne/40">
                    <strong className="text-aubergine block font-serif">Mature Skin Health</strong>
                    <span className="text-charcoal/70 text-[11px]">Lipid replenishment & gentle collagen renewal.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-champagne/40">
                    <strong className="text-aubergine block font-serif">Adolescent Acne Care</strong>
                    <span className="text-charcoal/70 text-[11px]">Early barrier support to prevent pitted scarring.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <ResponsiveImage
                  src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
                  alt="Diverse patient skin health photography"
                  aspectRatio="aspect-[4/3]"
                  overlay={true}
                  overlayText="Inclusive Dermatology Protocols for All Skin Tones"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 14: PATIENT EDUCATION & ARTICLES */}
        {/* ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
                Skin Library & Education
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
                Medically Informed Patient Articles
              </h2>
              <p className="text-xs text-charcoal/75 font-sans">
                Evidence-based guides written for patient understanding and skin care literacy.
              </p>
            </div>
            <Link
              to="/skin-library"
              className="mt-4 md:mt-0 text-xs font-bold font-sans text-aubergine hover:text-terracotta flex items-center space-x-1"
            >
              <span>View All Skin Library Articles →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.slice(0, 3).map((art) => (
              <ArticleCard key={art.id} article={art} />
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 15: COMPARISON CONTENT (AEO & GEO) */}
        {/* ================================================== */}
        <section className="bg-ivory-dark py-16 border-y border-champagne/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
                Direct Answers & Comparisons
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
                Understand Your Skin Choices
              </h2>
              <p className="text-xs text-charcoal/75 font-sans">
                Clear comparative guides to help you make informed healthcare decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Table 1: Dermatologist vs Aesthetician */}
              <div className="bg-ivory-light border border-champagne p-6 rounded-2xl shadow-sm space-y-4">
                <h3 className="font-serif text-xl font-bold text-aubergine border-b border-champagne/50 pb-2">
                  Dermatologist vs. Aesthetician
                </h3>
                <div className="space-y-2 text-xs font-sans">
                  <div className="grid grid-cols-3 font-semibold text-terracotta border-b pb-1">
                    <span>Feature</span>
                    <span>Dermatologist</span>
                    <span>Aesthetician</span>
                  </div>
                  <div className="grid grid-cols-3 border-b pb-1">
                    <span>Qualification</span>
                    <span>Medical Degree (MD)</span>
                    <span>Cosmetology License</span>
                  </div>
                  <div className="grid grid-cols-3 border-b pb-1">
                    <span>Diagnosis</span>
                    <span>Medical Diagnosis</span>
                    <span>No Diagnosis</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span>Prescriptions</span>
                    <span>Authorized</span>
                    <span>Not Authorized</span>
                  </div>
                </div>
              </div>

              {/* Table 2: Laser vs Shaving */}
              <div className="bg-ivory-light border border-champagne p-6 rounded-2xl shadow-sm space-y-4">
                <h3 className="font-serif text-xl font-bold text-aubergine border-b border-champagne/50 pb-2">
                  Laser Reduction vs. Temporary Shaving
                </h3>
                <div className="space-y-2 text-xs font-sans">
                  <div className="grid grid-cols-3 font-semibold text-terracotta border-b pb-1">
                    <span>Aspect</span>
                    <span>Laser Hair Reduction</span>
                    <span>Shaving / Waxing</span>
                  </div>
                  <div className="grid grid-cols-3 border-b pb-1">
                    <span>Follicle Target</span>
                    <span>Disables Follicle Matrix</span>
                    <span>Cuts Surface Shaft</span>
                  </div>
                  <div className="grid grid-cols-3 border-b pb-1">
                    <span>Ingrown Hairs</span>
                    <span>Eliminates Ingrowns</span>
                    <span>Can Cause Ingrowns</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span>Maintenance</span>
                    <span>Long-term reduction</span>
                    <span>Daily / Weekly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* SECTION 16: FAQ ACCORDION */}
        {/* ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-aubergine font-bold">
              Common Questions About Dermatology Care
            </h2>
            <p className="text-xs text-charcoal/75 font-sans">
              Answers to common patient inquiries regarding appointments, safety, and procedures.
            </p>
          </div>

          <FAQAccordion limit={6} />
        </section>

        {/* ================================================== */}
        {/* PORTFOLIO SUPPORT BANNER (TARASAKA AGENCY) */}
        {/* ================================================== */}
        <PortfolioSupportBanner />

        {/* ================================================== */}
        {/* SECTION 17: FINAL EDITORIAL CTA */}
        {/* ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-aubergine text-ivory-light rounded-3xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-luxury border border-rosewood/40">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-champagne font-bold font-sans">
                Start Your Skin Health Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                Start With a Thoughtful Skin Consultation
              </h2>
              <p className="text-xs sm:text-sm text-champagne/90 leading-relaxed font-light font-sans">
                Share your skin, hair, or laser concern, explore relevant clinical services, and request a personalized consultation through our patient-friendly booking experience.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  to="/booking"
                  className="px-8 py-3.5 bg-terracotta text-white font-sans text-xs font-semibold rounded-full hover:bg-terracotta-hover transition-colors shadow-lg"
                >
                  Book In-Clinic Consultation
                </Link>

                <Link
                  to="/treatments"
                  className="px-6 py-3.5 border border-champagne text-champagne font-sans text-xs font-semibold rounded-full hover:bg-champagne/10 transition-colors"
                >
                  Explore All Treatments
                </Link>

                <a
                  href="https://wa.me/917600583156?text=Hello%20Aurelia%20Institute%2C%20I%20would%20like%20to%20enquire%20about%20a%20skin%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-sage text-white font-sans text-xs font-semibold rounded-full hover:bg-sage-dark transition-colors"
                >
                  WhatsApp Quick Desk
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
