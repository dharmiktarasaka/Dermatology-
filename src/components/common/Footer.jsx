import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldAlert, ExternalLink } from 'lucide-react';
import { LOCAL_SEO } from '../../data/localSeoData';

export default function Footer() {
  return (
    <footer className="bg-aubergine-950 text-white font-sans pt-16 pb-8 border-t-4 border-terracotta relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVE GLOW */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-champagne/20">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center font-serif text-xl font-bold shadow-md">
                A
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight block leading-none text-white">
                  Aurelia
                </span>
                <span className="text-[10px] tracking-widest uppercase text-champagne font-bold block mt-0.5">
                  Skin & Hair Institute
                </span>
              </div>
            </div>

            <p className="text-xs text-ivory leading-relaxed max-w-md font-normal">
              Science for Your Skin. Confidence for You. A modern dermatology and trichology institute offering evidence-based medical skin care, hair loss evaluations, laser procedures, and aesthetic skin health.
            </p>

            <div className="space-y-2.5 text-xs text-white pt-2 font-normal">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                <span className="text-ivory-light">{LOCAL_SEO.fictionalAddress.building}, {LOCAL_SEO.fictionalAddress.landmark}, {LOCAL_SEO.fictionalAddress.area}, {LOCAL_SEO.fictionalAddress.city}, {LOCAL_SEO.fictionalAddress.state} {LOCAL_SEO.fictionalAddress.pincode}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-terracotta flex-shrink-0" />
                <span className="text-ivory-light">{LOCAL_SEO.phonePlaceholder} (Clinic Desk)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-terracotta flex-shrink-0" />
                <span className="text-ivory-light">Mon – Sat: 10:00 AM – 7:30 PM | Sun: By Appointment</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CLINICAL SERVICES */}
          <div>
            <h4 className="font-serif text-lg text-champagne-light font-bold mb-4 border-b border-terracotta/40 pb-1 inline-block">
              Clinical Services
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-light font-normal">
              <li><Link to="/medical-dermatology" className="hover:text-terracotta transition-colors">Medical Dermatology</Link></li>
              <li><Link to="/hair-scalp" className="hover:text-terracotta transition-colors">Hair & Scalp Trichology</Link></li>
              <li><Link to="/aesthetic-dermatology" className="hover:text-terracotta transition-colors">Aesthetic Rejuvenation</Link></li>
              <li><Link to="/laser-treatments" className="hover:text-terracotta transition-colors">Laser Hair Reduction</Link></li>
              <li><Link to="/treatments" className="hover:text-terracotta transition-colors">Treatments Catalogue</Link></li>
              <li><Link to="/concerns" className="hover:text-terracotta transition-colors">Skin Concerns Index</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: PATIENT RESOURCES */}
          <div>
            <h4 className="font-serif text-lg text-champagne-light font-bold mb-4 border-b border-terracotta/40 pb-1 inline-block">
              Patient Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-light font-normal">
              <li><Link to="/booking" className="hover:text-terracotta transition-colors font-semibold text-champagne">Book Consultation</Link></li>
              <li><Link to="/patient-journey" className="hover:text-terracotta transition-colors">Patient Care Journey</Link></li>
              <li><Link to="/before-after" className="hover:text-terracotta transition-colors">Before & After Demo</Link></li>
              <li><Link to="/skin-library" className="hover:text-terracotta transition-colors">Skin Library & Articles</Link></li>
              <li><Link to="/about" className="hover:text-terracotta transition-colors">About Our Institute</Link></li>
              <li><Link to="/dermatologist-in-ahmedabad" className="hover:text-terracotta transition-colors">Ahmedabad Local SEO</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: LEGAL & GOVERNANCE */}
          <div>
            <h4 className="font-serif text-lg text-champagne-light font-bold mb-4 border-b border-terracotta/40 pb-1 inline-block">
              Legal & Governance
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-light font-normal">
              <li><Link to="/privacy" className="hover:text-terracotta transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-terracotta transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/medical-disclaimer" className="hover:text-terracotta transition-colors">Medical Disclaimer</Link></li>
              <li><Link to="/careers" className="hover:text-terracotta transition-colors">Careers at Aurelia</Link></li>
              <li><Link to="/contact" className="hover:text-terracotta transition-colors">Contact Clinic</Link></li>
            </ul>
          </div>

        </div>

        {/* FICTIONAL PORTFOLIO DISCLAIMER FOOTER TEXT */}
        <div className="py-6 border-b border-champagne/20 text-xs text-ivory leading-relaxed bg-aubergine-900/60 p-4 rounded-2xl my-6 border border-rosewood/30">
          <div className="flex items-center space-x-2 text-champagne mb-1 font-semibold font-serif text-sm">
            <ShieldAlert className="w-4 h-4 flex-shrink-0 text-terracotta" />
            <span>Fictional Portfolio Concept Disclosure</span>
          </div>
          <p className="text-[11px] text-ivory-light">
            This is a fictional dermatology and aesthetic-centre website concept created by <strong>TARASAKA DIGITAL Solutions</strong> for portfolio and demonstration purposes. Doctor profiles, qualifications, services, treatment suitability, pricing, outcomes, risks, preparation, recovery, equipment, facility information, patient images, testimonials, before-and-after results, and business details must be replaced with verified and client-approved information before production use.
          </p>
        </div>

        {/* DEVELOPER CREDIT AREA */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-champagne gap-4">
          <div>
            <span className="text-ivory-light">© {new Date().getFullYear()} Aurelia Skin & Hair Institute Concept. All rights reserved.</span>
          </div>

          {/* TARASAKA AGENCY CREDIT LINK */}
          <div className="bg-aubergine-900 border border-champagne/30 px-5 py-2.5 rounded-xl flex items-center space-x-4 shadow-sm">
            <div>
              <span className="block text-[10px] text-champagne uppercase font-bold tracking-wider">Designed & Developed by</span>
              <a 
                href="https://tarasaka.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-white hover:text-terracotta transition-colors flex items-center space-x-1"
              >
                <span>TARASAKA DIGITAL Solutions</span>
                <ExternalLink className="w-3 h-3 text-terracotta" />
              </a>
            </div>
            <div className="hidden sm:block text-[11px] border-l border-rosewood/40 pl-3 space-y-0.5 text-ivory">
              <div><a href="tel:+917600583156" className="hover:underline">+91 7600 583 156</a></div>
              <div><a href="mailto:info@tarasaka.com" className="hover:underline">info@tarasaka.com</a></div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
