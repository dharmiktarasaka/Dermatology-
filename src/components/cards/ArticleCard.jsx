import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import ResponsiveImage from '../ui/ResponsiveImage';

export default function ArticleCard({ article }) {
  return (
    <article className="bg-ivory-light border border-champagne/50 rounded-2xl overflow-hidden shadow-editorial hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group">
      <div>
        <ResponsiveImage
          src={article.image}
          alt={article.title}
          aspectRatio="aspect-[16/9]"
          badge={article.category}
        />

        <div className="p-5 space-y-2">
          {/* E-E-A-T BADGES */}
          <div className="flex items-center space-x-3 text-[10px] text-charcoal/60 font-sans">
            <span className="flex items-center space-x-1">
              <Clock className="w-3 h-3 text-rosewood" />
              <span>{article.readTime}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1 text-sage-dark font-medium">
              <ShieldCheck className="w-3 h-3" />
              <span>Medically Reviewed</span>
            </span>
          </div>

          <h3 className="font-serif text-xl font-bold text-aubergine group-hover:text-terracotta transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-xs text-charcoal/75 line-clamp-2 leading-relaxed font-sans">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-2 border-t border-champagne/30 flex items-center justify-between">
        <span className="text-[10px] text-charcoal/50 font-sans">
          Updated: {article.updatedDate}
        </span>
        <Link
          to={`/skin-library/${article.slug}`}
          className="text-xs font-semibold font-sans text-aubergine group-hover:text-terracotta transition-colors flex items-center space-x-1"
        >
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
