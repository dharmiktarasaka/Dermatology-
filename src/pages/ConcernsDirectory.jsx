import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ConcernCard from '../components/cards/ConcernCard';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { CONCERNS } from '../data/concernsData';
import { Search } from 'lucide-react';

export default function ConcernsDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Medical', 'Hair & Scalp', 'Aesthetic', 'Laser'];

  const filtered = CONCERNS.filter(c => {
    const matchesCat = selectedCat === 'All' || c.category === selectedCat;
    const matchesQuery = searchQuery === '' || 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <>
      <SEOHead 
        title="Skin, Hair and Scalp Concerns Directory | Aurelia Dermatology"
        description="Filter and search dermatological skin, hair, scalp, and nail concerns. Learn common symptoms and when to consult a specialist."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-8">
        <Breadcrumbs items={[{ label: 'Skin Concerns Directory' }]} />

        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-terracotta font-bold font-sans">
            Comprehensive Directory
          </span>
          <h1 className="font-serif text-4xl font-bold text-aubergine">
            Skin, Hair & Scalp Concerns
          </h1>
          <p className="text-xs text-charcoal/75 font-sans">
            Search or filter by specialty category to understand clinical pathways and consultation processes.
          </p>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-rosewood absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search concern (acne, hyperpigmentation, hair thinning, eczema)..."
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

        {/* CONCERNS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filtered.map(c => (
            <ConcernCard key={c.id} concern={c} />
          ))}
        </div>

        <MedicalDisclaimer />
      </div>
    </>
  );
}
