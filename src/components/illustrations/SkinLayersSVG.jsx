import React from 'react';

export default function SkinLayersSVG() {
  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-ivory-light border border-champagne/40 rounded-2xl shadow-editorial">
      <div className="text-center mb-6">
        <h4 className="font-serif text-2xl text-aubergine font-semibold">Anatomy of Human Skin Layers</h4>
        <p className="text-xs text-charcoal/70 mt-1 font-sans">Visualizing Epidermal barrier, Collagen Dermis, and Subcutaneous tissue.</p>
      </div>

      <svg viewBox="0 0 600 360" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Layer 1: EPIDERMIS */}
        <g>
          <path d="M 40 40 Q 300 25, 560 40 L 560 110 L 40 110 Z" fill="#F3D8CA" stroke="#D8C4A8" strokeWidth="1.5" />
          {/* Stratum Corneum lipid line */}
          <path d="M 40 45 Q 300 30, 560 45" stroke="#B8644F" strokeWidth="3" />
          <text x="60" y="80" fill="#3E243E" fontSize="14" fontFamily="Cormorant Garamond" fontWeight="700">1. EPIDERMIS (Protective Barrier)</text>
          <text x="60" y="96" fill="#87505B" fontSize="11" fontFamily="Manrope">Stratum Corneum, Keratinocytes, Melanocytes</text>
        </g>

        {/* Layer 2: DERMIS */}
        <g>
          <rect x="40" y="110" width="520" height="150" fill="#E7E0D8" stroke="#D8C4A8" strokeWidth="1.5" />
          {/* Collagen Fibers */}
          <path d="M 80 130 C 150 160, 200 120, 280 150 C 350 180, 420 130, 520 160" stroke="#82927A" strokeWidth="2.5" opacity="0.6" />
          <path d="M 70 180 C 180 150, 240 210, 360 170 C 440 220, 500 170, 540 200" stroke="#87505B" strokeWidth="2" opacity="0.5" />

          {/* Hair Follicle extending through dermis */}
          <path d="M 380 40 L 375 220 C 375 235, 395 235, 395 220 L 390 40 Z" fill="#3E243E" opacity="0.85" />
          <circle cx="385" cy="225" r="10" fill="#B8644F" />

          {/* Sebaceous Gland */}
          <ellipse cx="360" cy="140" rx="14" ry="20" fill="#D8C4A8" stroke="#3A302E" strokeWidth="1" />

          <text x="60" y="145" fill="#3E243E" fontSize="14" fontFamily="Cormorant Garamond" fontWeight="700">2. DERMIS (Collagen Matrix)</text>
          <text x="60" y="162" fill="#5F6F57" fontSize="11" fontFamily="Manrope">Collagen Fibers, Elastin, Hair Follicles, Sweat Glands</text>
        </g>

        {/* Layer 3: HYPODERMIS / SUBCUTANEOUS */}
        <g>
          <rect x="40" y="260" width="520" height="70" rx="0 0 16 16" fill="#FAF5EE" stroke="#D8C4A8" strokeWidth="1.5" />
          {/* Adipose fat lobules */}
          <circle cx="90" cy="295" r="14" fill="#F3D8CA" opacity="0.7" />
          <circle cx="120" cy="295" r="16" fill="#F3D8CA" opacity="0.7" />
          <circle cx="150" cy="295" r="14" fill="#F3D8CA" opacity="0.7" />
          <circle cx="450" cy="295" r="15" fill="#F3D8CA" opacity="0.7" />
          <circle cx="480" cy="295" r="16" fill="#F3D8CA" opacity="0.7" />

          <text x="60" y="295" fill="#3E243E" fontSize="14" fontFamily="Cormorant Garamond" fontWeight="700">3. HYPODERMIS (Subcutaneous Fat)</text>
          <text x="60" y="312" fill="#87505B" fontSize="11" fontFamily="Manrope">Adipose Tissue, Larger Blood Vessels, Insulation</text>
        </g>
      </svg>
    </div>
  );
}
