import React from 'react';
import { Info } from 'lucide-react';

export default function PortfolioDisclaimer({ variant = 'banner' }) {
  if (variant === 'badge') {
    return (
      <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-aubergine text-ivory text-xs rounded-full font-sans tracking-wide">
        <Info className="w-3.5 h-3.5 text-champagne" />
        <span>TARASAKA DIGITAL Healthcare Portfolio Concept</span>
      </span>
    );
  }

  return (
    <div className="bg-aubergine text-ivory-light p-4 text-xs font-sans border-t border-rosewood/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <Info className="w-4 h-4 text-champagne flex-shrink-0" />
          <p className="leading-normal">
            <strong>Fictional Concept Notice:</strong> Aurelia Skin & Hair Institute is a fictional dermatology clinic concept designed by <strong>TARASAKA DIGITAL Solutions</strong> for portfolio & technical demonstration purposes.
          </p>
        </div>
        <a 
          href="https://tarasaka.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline hover:text-terracotta transition-colors flex-shrink-0 font-medium"
        >
          Build a Dermatology Website Like This →
        </a>
      </div>
    </div>
  );
}
