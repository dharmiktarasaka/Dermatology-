import React, { useState, useEffect } from 'react';

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1512290900673-04879654157a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
];

export default function ResponsiveImage({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = 'aspect-[4/3]',
  overlay = false,
  overlayText = '',
  badge = null
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(FALLBACK_IMAGES[Math.floor(Math.random() * FALLBACK_IMAGES.length)]);
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-stoneBg ${aspectRatio} ${className}`}>
      
      {/* Crisp High Visibility Image */}
      <img
        src={imgSrc || src}
        alt={alt || 'Aurelia Dermatology Clinical Photography'}
        loading="eager"
        onError={handleError}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />

      {/* Category / Status Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 bg-aubergine/90 text-champagne text-[10px] font-sans font-semibold rounded-full tracking-wider uppercase shadow-md border border-champagne/20">
            {badge}
          </span>
        </div>
      )}

      {/* Soft Bottom-Only Gradient Overlay for Overlay Text Readability */}
      {overlay && overlayText && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-aubergine/90 via-aubergine/40 to-transparent p-5 z-10 pt-12">
          <p className="font-serif text-white text-base sm:text-lg font-bold leading-snug drop-shadow-md">
            {overlayText}
          </p>
        </div>
      )}
    </div>
  );
}
