import React from 'react';

export default function HairCycleSVG() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-ivory-light border border-champagne/40 rounded-2xl shadow-editorial">
      <div className="text-center mb-6">
        <h4 className="font-serif text-2xl text-aubergine font-semibold">The Hair Growth Cycle Explained</h4>
        <p className="text-xs text-charcoal/70 mt-1 font-sans">Understanding active growth (Anagen), transition (Catagen), and resting (Telogen) phases.</p>
      </div>

      <svg viewBox="0 0 800 320" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid Lines */}
        <line x1="50" y1="220" x2="750" y2="220" stroke="#E7E0D8" strokeWidth="2" strokeDasharray="4 4" />
        <text x="50" y="240" fill="#87505B" fontSize="12" fontFamily="Manrope" fontWeight="600">Dermal Papilla Layer</text>

        {/* PHASE 1: ANAGEN (Active Growth) */}
        <g transform="translate(80, 20)">
          <rect x="0" y="0" width="200" height="260" rx="16" fill="#FFFDF9" stroke="#82927A" strokeWidth="1.5" />
          <text x="100" y="30" textAnchor="middle" fill="#3E243E" fontSize="14" fontFamily="Cormorant Garamond" fontWeight="700">1. ANAGEN (Growth)</text>
          <text x="100" y="48" textAnchor="middle" fill="#82927A" fontSize="11" fontFamily="Manrope" fontWeight="600">85% - 90% of Follicles (2–6 Yrs)</text>
          
          {/* Deep Follicle */}
          <path d="M90 200 C 90 220, 110 220, 110 200 L 106 100 L 94 100 Z" fill="#87505B" opacity="0.8" />
          <circle cx="100" cy="210" r="10" fill="#B8644F" />
          {/* Hair Shaft extending upwards */}
          <rect x="97" y="55" width="6" height="135" fill="#3E243E" rx="3" />
          
          <text x="100" y="240" textAnchor="middle" fill="#242020" fontSize="10" fontFamily="Manrope">Deep attachment to blood supply</text>
        </g>

        {/* Connective Arrow 1 */}
        <path d="M 290 140 Q 315 120 340 140" stroke="#B8644F" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />

        {/* PHASE 2: CATAGEN (Transition) */}
        <g transform="translate(350, 20)">
          <rect x="0" y="0" width="200" height="260" rx="16" fill="#FFFDF9" stroke="#D8C4A8" strokeWidth="1.5" />
          <text x="100" y="30" textAnchor="middle" fill="#3E243E" fontSize="14" fontFamily="Cormorant Garamond" fontWeight="700">2. CATAGEN (Regressing)</text>
          <text x="100" y="48" textAnchor="middle" fill="#B8644F" fontSize="11" fontFamily="Manrope" fontWeight="600">1% of Follicles (2–3 Wks)</text>
          
          {/* Detaching Follicle */}
          <path d="M92 170 C 92 185, 108 185, 108 170 L 104 90 L 96 90 Z" fill="#87505B" opacity="0.5" />
          <circle cx="100" cy="205" r="6" fill="#CBD3C7" />
          <rect x="97" y="55" width="6" height="110" fill="#3E243E" rx="3" />
          
          <text x="100" y="240" textAnchor="middle" fill="#242020" fontSize="10" fontFamily="Manrope">Follicle shrinks & detaches</text>
        </g>

        {/* Connective Arrow 2 */}
        <path d="M 560 140 Q 585 120 610 140" stroke="#B8644F" strokeWidth="2" fill="none" />

        {/* PHASE 3: TELOGEN (Resting & Shedding) */}
        <g transform="translate(620, 20)">
          <rect x="0" y="0" width="160" height="260" rx="16" fill="#FFFDF9" stroke="#87505B" strokeWidth="1.5" />
          <text x="80" y="30" textAnchor="middle" fill="#3E243E" fontSize="14" fontFamily="Cormorant Garamond" fontWeight="700">3. TELOGEN (Resting)</text>
          <text x="80" y="48" textAnchor="middle" fill="#87505B" fontSize="11" fontFamily="Manrope" fontWeight="600">10% - 15% (3–4 Mos)</text>
          
          {/* Shedding Hair */}
          <rect x="77" y="45" width="6" height="80" fill="#87505B" rx="3" opacity="0.7" transform="rotate(12 80 85)" />
          <circle cx="80" cy="180" r="8" fill="#82927A" />
          
          <text x="80" y="240" textAnchor="middle" fill="#242020" fontSize="10" fontFamily="Manrope">Old hair sheds; new bulb forms</text>
        </g>
      </svg>
    </div>
  );
}
