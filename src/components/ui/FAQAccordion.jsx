import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { FAQS } from '../../data/faqsData';

export default function FAQAccordion({ limit = null, categoryFilter = null }) {
  const [openId, setOpenId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter || 'All');

  const categories = ['All', 'General Dermatology', 'Consultation & Booking', 'Medical Dermatology', 'Hair & Scalp', 'Laser & Technology', 'Safety & Disclaimers', 'Technical Integration'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const displayFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  return (
    <div className="w-full max-w-4xl mx-auto my-8 space-y-6">
      
      {/* SEARCH & CATEGORY FILTER BAR (Only if not limited) */}
      {!limit && (
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-rosewood absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search dermatology FAQs (e.g., laser, acne, scalp, appointment)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-champagne rounded-2xl text-xs font-sans focus:outline-none focus:border-terracotta shadow-sm"
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans whitespace-nowrap transition-colors ${
                  selectedCategory === cat ? 'bg-aubergine text-champagne font-semibold' : 'bg-ivory-dark text-charcoal/70 hover:text-aubergine'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ACCORDION ITEMS */}
      <div className="space-y-3">
        {displayFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-ivory-light border border-champagne/50 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full p-4 text-left flex items-center justify-between space-x-3 focus:outline-none hover:bg-peach/10"
              >
                <div className="flex items-center space-x-2.5">
                  <HelpCircle className="w-4 h-4 text-terracotta flex-shrink-0" />
                  <span className="font-serif text-lg font-bold text-aubergine leading-snug">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-rosewood flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-terracotta' : ''
                }`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-charcoal/80 leading-relaxed font-sans border-t border-champagne/30 animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}

        {displayFaqs.length === 0 && (
          <div className="p-8 text-center bg-ivory-dark rounded-2xl text-xs text-charcoal/60 font-sans">
            No matching questions found for your query. Please contact our clinic desk directly.
          </div>
        )}
      </div>

    </div>
  );
}
