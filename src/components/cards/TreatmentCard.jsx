import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import ResponsiveImage from '../ui/ResponsiveImage';

export default function TreatmentCard({ treatment }) {
  return (
    <div className="bg-ivory-light border border-champagne/50 rounded-2xl overflow-hidden shadow-editorial hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group">
      
      <div>
        <ResponsiveImage
          src={treatment.image}
          alt={treatment.name}
          aspectRatio="aspect-[16/10]"
          badge={treatment.category}
        />

        <div className="p-5 space-y-2">
          <div className="flex items-center space-x-1 text-[11px] text-sage-dark font-sans font-medium">
            <Sparkles className="w-3 h-3" />
            <span>Consultation Required</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-aubergine group-hover:text-terracotta transition-colors leading-snug">
            {treatment.name}
          </h3>

          <p className="text-xs text-charcoal/75 line-clamp-2 leading-relaxed font-sans">
            {treatment.shortDesc}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-2 border-t border-champagne/30 flex items-center justify-between">
        <Link
          to={`/treatments/${treatment.id}`}
          className="text-xs font-semibold font-sans text-aubergine group-hover:text-terracotta transition-colors flex items-center space-x-1"
        >
          <span>View Treatment Details</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
}
