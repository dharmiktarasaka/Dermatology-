import React from 'react';
import { Link } from 'react-router-dom';
import { X, Calendar, Phone, MessageSquare, ChevronRight } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-aubergine text-ivory-light flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
      
      {/* HEADER BAR inside drawer */}
      <div className="flex items-center justify-between pb-6 border-b border-rosewood/40">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center font-serif text-lg font-bold">
            A
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">Aurelia Dermatology</span>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-rosewood/30 text-champagne hover:text-white"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* NAVIGATION LINKS LIST */}
      <nav className="my-6 space-y-4">
        {[
          { label: 'Home', path: '/' },
          { label: 'Skin Concerns Directory', path: '/concerns' },
          { label: 'Treatments Catalogue', path: '/treatments' },
          { label: 'Medical Dermatology', path: '/medical-dermatology' },
          { label: 'Hair & Scalp Care', path: '/hair-scalp' },
          { label: 'Aesthetic Rejuvenation', path: '/aesthetic-dermatology' },
          { label: 'Laser Treatments', path: '/laser-treatments' },
          { label: 'Before & After Demo', path: '/before-after' },
          { label: 'Patient Journey', path: '/patient-journey' },
          { label: 'About Aurelia', path: '/about' },
          { label: 'Skin Library & Education', path: '/skin-library' },
          { label: 'Dermatologist in Ahmedabad (Local)', path: '/dermatologist-in-ahmedabad' },
          { label: 'Contact Clinic', path: '/contact' }
        ].map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            onClick={onClose}
            className="flex items-center justify-between text-lg font-serif text-ivory/90 hover:text-terracotta transition-colors border-b border-rosewood/20 pb-2.5"
          >
            <span>{link.label}</span>
            <ChevronRight className="w-4 h-4 text-champagne/60" />
          </Link>
        ))}
      </nav>

      {/* ACTION BUTTONS & FOOTER */}
      <div className="space-y-3 pt-4 border-t border-rosewood/40">
        <Link
          to="/booking"
          onClick={onClose}
          className="w-full py-3 bg-terracotta text-white rounded-full font-sans font-semibold text-center flex items-center justify-center space-x-2 shadow-lg"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Skin Consultation</span>
        </Link>

        <a
          href="https://wa.me/917600583156?text=Hello%20Aurelia%20Institute%2C%20I%20would%20like%20to%20enquire%20about%20a%20skin%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 bg-sage-dark text-white rounded-full font-sans text-xs font-semibold text-center flex items-center justify-center space-x-2"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Quick Enquiry</span>
        </a>

        <div className="text-center text-[10px] text-champagne/60 font-sans pt-2">
          <span>Ahmedabad, Gujarat • Portfolio Concept by TARASAKA</span>
        </div>
      </div>

    </div>
  );
}
