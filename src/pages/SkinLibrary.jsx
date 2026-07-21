import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ArticleCard from '../components/cards/ArticleCard';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { ARTICLES } from '../data/articlesData';
import { Search } from 'lucide-react';

export default function SkinLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Medical Dermatology', 'Skin Education', 'Hair & Scalp', 'Laser & Technology'];

  const filtered = ARTICLES.filter(art => {
    const matchesCat = selectedCat === 'All' || art.category === selectedCat;
    const matchesQuery = searchQuery === '' || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <>
      <SEOHead 
        title="Skin Library & Educational Articles | Aurelia Dermatology"
        description="Medically informed patient education articles covering acne biology, pigmentation, hair loss, laser photothermolysis, and barrier health."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-8">
        <Breadcrumbs items={[{ label: 'Skin Library' }]} />

        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
            Patient Education Hub
          </span>
          <h1 className="font-serif text-4xl font-bold text-aubergine">
            The Aurelia Skin Library
          </h1>
          <p className="text-xs text-charcoal/75 font-sans">
            Medically reviewed guides written to empower patients with dermatological literacy.
          </p>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-rosewood absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search skin library articles (acne, pigmentation, hair loss, laser)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-champagne rounded-2xl text-xs font-sans focus:outline-none focus:border-terracotta shadow-sm"
            />
          </div>

          <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-sans whitespace-nowrap transition-all ${
                  selectedCat === cat 
                    ? 'bg-aubergine text-champagne font-semibold' 
                    : 'bg-ivory-dark text-charcoal/75 hover:text-aubergine'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filtered.map(art => (
            <ArticleCard key={art.id} article={art} />
          ))}
        </div>

        <MedicalDisclaimer />
      </div>
    </>
  );
}
