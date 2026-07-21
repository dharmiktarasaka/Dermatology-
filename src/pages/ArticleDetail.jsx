import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { ARTICLES } from '../data/articlesData';
import { Clock, ShieldCheck, User, Calendar, Tag } from 'lucide-react';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = ARTICLES.find(a => a.slug === id || a.id === id) || ARTICLES[0];

  return (
    <>
      <SEOHead 
        title={`${article.title} | Aurelia Skin Library`}
        description={article.excerpt}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-8 font-sans">
        <Breadcrumbs items={[
          { label: 'Skin Library', path: '/skin-library' },
          { label: article.title }
        ]} />

        {/* ARTICLE HEADER */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal/70">
            <span className="px-3 py-1 bg-peach/40 text-terracotta rounded-full font-semibold">
              {article.category}
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-rosewood" />
              <span>{article.readTime}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1 text-sage-dark font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Reviewed by: {article.medicalReviewer}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-aubergine leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center space-x-4 text-xs text-charcoal/60 pt-1 border-b border-champagne pb-4">
            <span>Author: {article.author}</span>
            <span>Published: {article.publishedDate}</span>
            <span>Last Updated: {article.updatedDate}</span>
          </div>
        </div>

        {/* FEATURED IMAGE */}
        <ResponsiveImage
          src={article.image}
          alt={article.title}
          aspectRatio="aspect-[16/9]"
          overlay={true}
          badge={article.category}
        />

        {/* ARTICLE CONTENT BODY */}
        <div className="prose prose-stone max-w-none text-xs sm:text-sm text-charcoal/85 leading-relaxed space-y-4 pt-4">
          <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-champagne">
          <Tag className="w-3.5 h-3.5 text-rosewood" />
          {article.tags?.map((t, i) => (
            <span key={i} className="px-2.5 py-1 bg-ivory-dark text-charcoal/70 text-[11px] rounded-full border border-champagne/40">
              #{t}
            </span>
          ))}
        </div>

        <MedicalDisclaimer />

        <div className="pt-4 text-center">
          <Link
            to="/booking"
            className="px-8 py-3 bg-terracotta text-white rounded-full text-xs font-semibold hover:bg-terracotta-hover transition-colors shadow-md inline-block"
          >
            Schedule Consultation for Related Concerns
          </Link>
        </div>
      </article>
    </>
  );
}
