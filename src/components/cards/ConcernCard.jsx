import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import ResponsiveImage from '../ui/ResponsiveImage';

export default function ConcernCard({ concern }) {
  return (
    <div className="bg-ivory-light border border-champagne/50 rounded-2xl overflow-hidden shadow-editorial hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group">
      
      <div>
        {/* IMAGE CONTAINER */}
        <ResponsiveImage
          src={concern.image}
          alt={concern.name}
          aspectRatio="aspect-[16/10]"
          badge={concern.category}
        />

        {/* CARD CONTENT */}
        <div className="p-5 space-y-2">
          <div className="flex items-center space-x-2 text-[11px] font-sans text-rosewood">
            <Tag className="w-3 h-3" />
            <span>{concern.targetGroup || 'General Skin'}</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-aubergine group-hover:text-terracotta transition-colors leading-snug">
            {concern.name}
          </h3>

          <p className="text-xs text-charcoal/75 line-clamp-2 leading-relaxed font-sans">
            {concern.shortDesc}
          </p>
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="px-5 pb-5 pt-2 border-t border-champagne/30 flex items-center justify-between">
        <Link
          to={`/concerns/${concern.id}`}
          className="text-xs font-semibold font-sans text-aubergine group-hover:text-terracotta transition-colors flex items-center space-x-1"
        >
          <span>Explore Concern</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
}
