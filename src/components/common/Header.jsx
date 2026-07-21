import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Sparkles, Phone, Calendar, Menu, Search, ChevronDown, 
  MapPin, X, ArrowRight, ShieldCheck, MessageSquare 
} from 'lucide-react';
import MobileMenu from './MobileMenu';
import { CONCERNS } from '../../data/concernsData';
import { TREATMENTS } from '../../data/treatmentsData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setSearchModalOpen(false);
  }, [location]);

  // Filter items for header search modal
  const searchResultsConcerns = searchQuery 
    ? CONCERNS.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 3) 
    : [];
  const searchResultsTreatments = searchQuery 
    ? TREATMENTS.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 3) 
    : [];

  return (
    <>
      {/* TOP LUXURY ANNOUNCEMENT & CONTACT STRIP */}
      <div className="bg-aubergine text-champagne py-2 px-4 sm:px-8 text-[11px] font-sans border-b border-rosewood/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-champagne/90">
              <Sparkles className="w-3 h-3 text-terracotta" />
              <strong className="font-semibold text-terracotta">TARASAKA Healthcare Portfolio:</strong>
              <span>Aurelia Skin & Hair Institute Concept</span>
            </span>
            <span className="text-rosewood/60">•</span>
            <span className="flex items-center space-x-1 text-champagne/80">
              <MapPin className="w-3 h-3 text-terracotta" />
              <span>Satellite, S.G. Highway, Ahmedabad</span>
            </span>
          </div>

          <div className="flex items-center space-x-5 text-champagne/90">
            <a 
              href="tel:+917940008899" 
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-terracotta" />
              <span>+91 (079) 4000 8899</span>
            </a>
            <span className="text-rosewood/60">•</span>
            <a 
              href="https://wa.me/917600583156" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1 text-sage-light hover:text-white transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-sage" />
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>

        </div>
      </div>

      {/* MAIN FLOATING CLASSIC TRENDY NAVIGATION CONTAINER */}
      <header className="fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6">
        <div className={`max-w-7xl mx-auto transition-all duration-300 ${
          scrolled 
            ? 'glass-header rounded-2xl shadow-luxury py-2.5 border border-champagne/50' 
            : 'bg-ivory/95 backdrop-blur-md rounded-2xl md:rounded-full py-3 border border-champagne/40 shadow-editorial'
        }`}>
          <div className="px-4 sm:px-6 flex items-center justify-between">
            
            {/* LOGO WITH CREST BADGE */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-aubergine text-champagne flex items-center justify-center font-serif text-xl font-bold tracking-tighter group-hover:bg-terracotta transition-all duration-300 shadow-md border border-champagne/30">
                  A
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-terracotta rounded-full border-2 border-ivory flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>

              <div>
                <span className="font-serif text-2xl font-bold text-aubergine tracking-tight block leading-none group-hover:text-terracotta transition-colors">
                  Aurelia
                </span>
                <span className="text-[9px] tracking-widest uppercase text-terracotta font-semibold font-sans block mt-0.5">
                  Skin & Hair Institute
                </span>
              </div>
            </Link>

            {/* DESKTOP TRENDY NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center space-x-1 text-xs font-semibold font-sans tracking-wide">
              
              {/* MEGA MENU DROPDOWN FOR CONCERNS */}
              <div 
                className="relative py-1"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <Link 
                  to="/concerns" 
                  className={`px-3.5 py-2 rounded-full transition-all flex items-center space-x-1 ${
                    location.pathname.startsWith('/concerns')
                      ? 'bg-aubergine text-champagne font-bold'
                      : 'text-charcoal/85 hover:text-terracotta hover:bg-peach/20'
                  }`}
                >
                  <span>Skin Concerns</span>
                  <ChevronDown className="w-3.5 h-3.5 text-rosewood" />
                </Link>

                {/* MEGA MENU CARD */}
                {megaMenuOpen && (
                  <div className="absolute top-full left-0 w-[520px] bg-ivory-light border border-champagne/70 rounded-3xl shadow-luxury p-6 grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 z-50">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-terracotta block mb-2.5 font-sans border-b border-champagne/40 pb-1">
                        Medical & Facial Skin
                      </span>
                      <ul className="space-y-2 text-xs font-sans text-charcoal/80">
                        <li><Link to="/concerns/acne-vulgaris" className="hover:text-terracotta block">Acne & Inflammatory Blemishes</Link></li>
                        <li><Link to="/concerns/hyperpigmentation-melasma" className="hover:text-terracotta block">Hyperpigmentation & Melasma</Link></li>
                        <li><Link to="/concerns/eczema-dermatitis" className="hover:text-terracotta block">Eczema & Barrier Care</Link></li>
                        <li><Link to="/concerns/rosacea-redness" className="hover:text-terracotta block">Rosacea & Facial Redness</Link></li>
                        <li><Link to="/concerns/psoriasis-management" className="hover:text-terracotta block">Psoriasis Management</Link></li>
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-sage-dark block mb-2.5 font-sans border-b border-champagne/40 pb-1">
                        Hair, Scalp & Laser
                      </span>
                      <ul className="space-y-2 text-xs font-sans text-charcoal/80">
                        <li><Link to="/concerns/hair-loss-thinning" className="hover:text-terracotta block">Pattern Hair Loss & Thinning</Link></li>
                        <li><Link to="/concerns/dandruff-scalp-care" className="hover:text-terracotta block">Dandruff & Scalp Dermatitis</Link></li>
                        <li><Link to="/concerns/unwanted-hair" className="hover:text-terracotta block">Laser Hair Reduction</Link></li>
                        <li>
                          <Link to="/concerns" className="inline-flex items-center space-x-1 font-serif text-sm font-bold text-aubergine hover:text-terracotta pt-2">
                            <span>Explore All 16+ Concerns</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/treatments" 
                className={`px-3.5 py-2 rounded-full transition-all ${
                  location.pathname === '/treatments' ? 'bg-aubergine text-champagne font-bold' : 'text-charcoal/85 hover:text-terracotta hover:bg-peach/20'
                }`}
              >
                Treatments
              </Link>

              <Link 
                to="/medical-dermatology" 
                className={`px-3.5 py-2 rounded-full transition-all ${
                  location.pathname === '/medical-dermatology' ? 'bg-aubergine text-champagne font-bold' : 'text-charcoal/85 hover:text-terracotta hover:bg-peach/20'
                }`}
              >
                Medical
              </Link>

              <Link 
                to="/hair-scalp" 
                className={`px-3.5 py-2 rounded-full transition-all ${
                  location.pathname === '/hair-scalp' ? 'bg-aubergine text-champagne font-bold' : 'text-charcoal/85 hover:text-terracotta hover:bg-peach/20'
                }`}
              >
                Hair & Scalp
              </Link>

              <Link 
                to="/aesthetic-dermatology" 
                className={`px-3.5 py-2 rounded-full transition-all ${
                  location.pathname === '/aesthetic-dermatology' ? 'bg-aubergine text-champagne font-bold' : 'text-charcoal/85 hover:text-terracotta hover:bg-peach/20'
                }`}
              >
                Aesthetics
              </Link>

              <Link 
                to="/laser-treatments" 
                className={`px-3.5 py-2 rounded-full transition-all ${
                  location.pathname === '/laser-treatments' ? 'bg-aubergine text-champagne font-bold' : 'text-charcoal/85 hover:text-terracotta hover:bg-peach/20'
                }`}
              >
                Laser Tech
              </Link>

              <Link 
                to="/skin-library" 
                className={`px-3.5 py-2 rounded-full transition-all ${
                  location.pathname.startsWith('/skin-library') ? 'bg-aubergine text-champagne font-bold' : 'text-charcoal/85 hover:text-terracotta hover:bg-peach/20'
                }`}
              >
                Skin Library
              </Link>

              <Link 
                to="/about" 
                className={`px-3.5 py-2 rounded-full transition-all ${
                  location.pathname === '/about' ? 'bg-aubergine text-champagne font-bold' : 'text-charcoal/85 hover:text-terracotta hover:bg-peach/20'
                }`}
              >
                About
              </Link>

            </nav>

            {/* RIGHT SEARCH TRIGGER & GLOWING BOOKING CTA */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="w-9 h-9 rounded-full bg-ivory-dark border border-champagne text-aubergine flex items-center justify-center hover:bg-terracotta hover:text-white transition-all shadow-sm"
                title="Search Concerns & Treatments"
              >
                <Search className="w-4 h-4" />
              </button>

              <Link
                to="/booking"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-terracotta text-white rounded-full font-sans text-xs font-semibold hover:bg-terracotta-hover transition-all duration-300 shadow-md hover:shadow-luxury transform hover:-translate-y-0.5 border border-terracotta-light"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 text-aubergine hover:text-terracotta focus:outline-none"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                to="/booking"
                className="sm:hidden px-3.5 py-1.5 bg-terracotta text-white rounded-full font-sans text-xs font-semibold shadow-sm"
              >
                Book
              </Link>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-aubergine hover:text-terracotta focus:outline-none"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* QUICK SEARCH MODAL OVERLAY */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-aubergine/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-ivory-light border border-champagne rounded-3xl shadow-luxury p-6 space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-champagne/40">
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-terracotta" />
                <h4 className="font-serif text-xl font-bold text-aubergine">Search Aurelia Institute</h4>
              </div>
              <button 
                onClick={() => setSearchModalOpen(false)}
                className="p-1 rounded-full text-charcoal/60 hover:text-aubergine"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                autoFocus
                placeholder="Type concern, condition, or treatment (acne, laser, hair loss, peel)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3.5 bg-white border border-champagne rounded-2xl text-sm font-sans focus:outline-none focus:border-terracotta shadow-sm"
              />
            </div>

            {/* RESULTS LIST */}
            {searchQuery && (
              <div className="space-y-4 max-h-80 overflow-y-auto pt-2">
                {searchResultsConcerns.length > 0 && (
                  <div>
                    <span className="text-[10px] uppercase font-bold text-terracotta tracking-wider block mb-1">
                      Skin & Hair Concerns
                    </span>
                    <div className="space-y-1">
                      {searchResultsConcerns.map(c => (
                        <Link
                          key={c.id}
                          to={`/concerns/${c.id}`}
                          onClick={() => setSearchModalOpen(false)}
                          className="p-2.5 bg-white rounded-xl border border-champagne/40 block text-xs hover:border-terracotta font-sans text-aubergine font-semibold"
                        >
                          {c.name} <span className="text-charcoal/60 font-normal">({c.category})</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {searchResultsTreatments.length > 0 && (
                  <div>
                    <span className="text-[10px] uppercase font-bold text-sage-dark tracking-wider block mb-1">
                      Clinical Procedures
                    </span>
                    <div className="space-y-1">
                      {searchResultsTreatments.map(t => (
                        <Link
                          key={t.id}
                          to={`/treatments/${t.id}`}
                          onClick={() => setSearchModalOpen(false)}
                          className="p-2.5 bg-white rounded-xl border border-champagne/40 block text-xs hover:border-terracotta font-sans text-aubergine font-semibold"
                        >
                          {t.name} <span className="text-charcoal/60 font-normal">({t.category})</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {searchResultsConcerns.length === 0 && searchResultsTreatments.length === 0 && (
                  <div className="p-4 text-center text-xs text-charcoal/60 font-sans">
                    No direct match found. <Link to="/concerns" onClick={() => setSearchModalOpen(false)} className="text-terracotta underline font-semibold">Browse full directory</Link>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* MOBILE FULL-SCREEN DRAWER */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
