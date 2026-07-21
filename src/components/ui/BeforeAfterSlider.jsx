import React, { useState, useRef, useEffect } from 'react';
import { Sliders, ShieldAlert } from 'lucide-react';

const FALLBACK_BEFORE = 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80';
const FALLBACK_AFTER = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCategory, setActiveCategory] = useState('acne-scars');
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef(null);

  const samples = {
    'acne-scars': {
      title: 'Acne Scar Refinement Demo',
      category: 'Fractional & Microneedling Care',
      before: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
      note: 'Demonstration visual illustrating texture smoothing progression over 4 clinical sessions.'
    },
    'pigmentation': {
      title: 'Melasma & Tone Balancing Demo',
      category: 'Q-Switched Laser & Chemical Peel',
      before: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      note: 'Demonstration visual showcasing melanocyte stabilization and epidermal brightening.'
    },
    'hair-density': {
      title: 'Scalp Density Evaluation Demo',
      category: 'Trichology Support Protocol',
      before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80',
      note: 'Demonstration visual highlighting hair shaft caliper density improvement.'
    }
  };

  const currentSample = samples[activeCategory];
  const [beforeImg, setBeforeImg] = useState(currentSample.before);
  const [afterImg, setAfterImg] = useState(currentSample.after);

  // Update image state when category changes
  useEffect(() => {
    setBeforeImg(currentSample.before);
    setAfterImg(currentSample.after);
  }, [activeCategory]);

  // Keep track of container width for clip calculation
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleClick = (e) => {
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-8 bg-ivory-light border border-champagne/60 rounded-3xl p-6 shadow-luxury">
      
      {/* HEADER & CATEGORY TABS */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs uppercase tracking-wider text-terracotta font-bold font-sans">
            Interactive Visual Demonstration
          </span>
          <h3 className="font-serif text-2xl text-aubergine font-bold mt-0.5">
            {currentSample.title}
          </h3>
        </div>

        {/* Category Selector Buttons */}
        <div className="flex space-x-2 bg-ivory-dark p-1 rounded-full border border-champagne/40 text-xs font-sans">
          <button
            onClick={() => setActiveCategory('acne-scars')}
            className={`px-3.5 py-1.5 rounded-full transition-colors ${
              activeCategory === 'acne-scars' ? 'bg-terracotta text-white font-semibold' : 'text-charcoal/70 hover:text-aubergine'
            }`}
          >
            Acne Scars
          </button>
          <button
            onClick={() => setActiveCategory('pigmentation')}
            className={`px-3.5 py-1.5 rounded-full transition-colors ${
              activeCategory === 'pigmentation' ? 'bg-terracotta text-white font-semibold' : 'text-charcoal/70 hover:text-aubergine'
            }`}
          >
            Pigmentation
          </button>
          <button
            onClick={() => setActiveCategory('hair-density')}
            className={`px-3.5 py-1.5 rounded-full transition-colors ${
              activeCategory === 'hair-density' ? 'bg-terracotta text-white font-semibold' : 'text-charcoal/70 hover:text-aubergine'
            }`}
          >
            Hair Scalp
          </button>
        </div>
      </div>

      {/* COMPARISON SLIDER CANVAS */}
      <div
        ref={containerRef}
        onClick={handleClick}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl select-none cursor-ew-resize border border-rosewood/20 shadow-inner bg-stoneBg"
      >
        {/* AFTER IMAGE (Background - Right Side) */}
        <img
          src={afterImg}
          alt="After Procedure Outcome Demo"
          onError={() => setAfterImg(FALLBACK_AFTER)}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-aubergine text-white text-xs px-3.5 py-1.5 rounded-full font-serif font-bold z-10 border border-champagne/40 shadow-md">
          After: Target Outcome Demo
        </div>

        {/* BEFORE IMAGE (Clipped Foreground - Left Side) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImg}
            alt="Before Procedure Baseline Demo"
            onError={() => setBeforeImg(FALLBACK_BEFORE)}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerWidth > 0 ? `${containerWidth}px` : '100%' }}
          />
          <div className="absolute top-4 left-4 bg-terracotta text-white text-xs px-3.5 py-1.5 rounded-full font-serif font-bold z-10 border border-white/40 shadow-md">
            Before: Baseline Assessment
          </div>
        </div>

        {/* SLIDER DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-luxury z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center shadow-luxury border-2 border-white">
            <Sliders className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* MANDATORY DEMONSTRATION & SUITABILITY DISCLAIMER */}
      <div className="mt-4 p-3.5 bg-peach/30 rounded-2xl border border-peach text-xs text-charcoal/80 flex items-start space-x-2">
        <ShieldAlert className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-aubergine block">Demonstration Gallery Note:</span>
          <p className="text-[11px] leading-relaxed">
            {currentSample.note} <em>Images and clinical case results are for website portfolio demonstration only. Actual individual treatment outcomes vary based on biological response, baseline severity, and compliance. Guaranteed results are not provided.</em>
          </p>
        </div>
      </div>

    </div>
  );
}
