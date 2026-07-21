import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import PortfolioDisclaimer from '../components/common/PortfolioDisclaimer';
import { LOCAL_SEO } from '../data/localSeoData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <SEOHead 
        title="Contact Aurelia Skin & Hair Institute | Ahmedabad Clinic"
        description="Contact Aurelia Skin & Hair Institute in Satellite, Ahmedabad for clinical dermatology, hair trichology, and laser consultation inquiries."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl font-bold text-aubergine">
            Contact Aurelia Institute
          </h1>
          <p className="text-xs text-charcoal/75 font-sans">
            Our patient coordination team is available to answer inquiries and schedule consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CONTACT INFO CARD */}
          <div className="lg:col-span-5 bg-aubergine text-ivory-light p-8 rounded-3xl space-y-6 shadow-luxury">
            <h2 className="font-serif text-2xl font-bold text-white">Clinic Details</h2>

            <div className="space-y-4 text-xs font-sans text-champagne/90">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-serif text-sm">Address</strong>
                  <span>{LOCAL_SEO.fictionalAddress.building}, {LOCAL_SEO.fictionalAddress.landmark}, {LOCAL_SEO.fictionalAddress.area}, {LOCAL_SEO.fictionalAddress.city}, {LOCAL_SEO.fictionalAddress.state} {LOCAL_SEO.fictionalAddress.pincode}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-serif text-sm">Phone Enquiry</strong>
                  <span>{LOCAL_SEO.phonePlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-serif text-sm">Email Desk</strong>
                  <span>{LOCAL_SEO.emailPlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-serif text-sm">Operating Hours</strong>
                  <span>Mon – Sat: 10:00 AM – 7:30 PM<br />Sun: By Appointment</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-rosewood/40">
              <a
                href="https://wa.me/917600583156?text=Hello%20Aurelia%20Institute%2C%20I%20would%20like%20to%20enquire%20about%20a%20skin%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-sage text-white rounded-full font-sans text-xs font-semibold flex items-center justify-center space-x-2 hover:bg-sage-dark transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect via WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* SIMULATED ENQUIRY FORM */}
          <div className="lg:col-span-7 bg-ivory-light border border-champagne p-8 rounded-3xl space-y-4 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-aubergine">Send a General Enquiry</h2>
            <p className="text-xs text-charcoal/70 font-sans">
              Have a question about services or availability? Fill out this general message form.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert('Enquiry form submitted in demonstration mode.'); }} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Your Name *</label>
                  <input type="text" required placeholder="Name" className="w-full p-2.5 bg-white border border-champagne rounded-xl" />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Phone Number *</label>
                  <input type="tel" required placeholder="Phone" className="w-full p-2.5 bg-white border border-champagne rounded-xl" />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Email Address *</label>
                <input type="email" required placeholder="Email" className="w-full p-2.5 bg-white border border-champagne rounded-xl" />
              </div>

              <div>
                <label className="block font-semibold mb-1">Your Message or Query *</label>
                <textarea rows="4" required placeholder="Type your message here..." className="w-full p-2.5 bg-white border border-champagne rounded-xl" />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-terracotta text-white rounded-full font-semibold hover:bg-terracotta-hover transition-colors shadow-md flex items-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

        <PortfolioDisclaimer />
        <MedicalDisclaimer />
      </div>
    </>
  );
}
