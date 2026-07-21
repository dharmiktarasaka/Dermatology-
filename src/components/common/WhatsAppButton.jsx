import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* QUICK ENQUIRY POPUP */}
      {open && (
        <div className="mb-3 w-80 bg-ivory-light border border-champagne rounded-2xl shadow-luxury p-4 animate-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-champagne/40">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center font-bold text-xs">
                AS
              </div>
              <div>
                <h5 className="font-serif font-bold text-aubergine text-sm">Aurelia WhatsApp Desk</h5>
                <span className="text-[10px] text-sage-dark block">Online • Rapid Response</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-charcoal/60 hover:text-charcoal">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-charcoal/80 space-y-2">
            <p className="bg-sage/10 p-2.5 rounded-xl border border-sage/20">
              👋 Hello! Welcome to Aurelia Skin & Hair Institute. How can our patient team assist you today?
            </p>
          </div>

          <a
            href="https://wa.me/917600583156?text=Hello%20Aurelia%20Institute%2C%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20enquire%20about%20a%20skin%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-sage text-white rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 hover:bg-sage-dark transition-colors shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Start WhatsApp Chat</span>
          </a>
          <span className="block text-[9px] text-center text-charcoal/50 mt-1.5 font-sans">
            Simulated enquiry for portfolio demonstration
          </span>
        </div>
      )}

      {/* FLOATING ACTION TRIGGER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-sage text-white shadow-luxury flex items-center justify-center hover:bg-sage-dark transition-all duration-300 transform hover:scale-105 group"
        aria-label="WhatsApp Quick Enquiry"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>

    </div>
  );
}
