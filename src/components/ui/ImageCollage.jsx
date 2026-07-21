import React from 'react';
import ResponsiveImage from './ResponsiveImage';

export default function ImageCollage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-8">
      {/* Main Large Editorial Frame */}
      <div className="md:col-span-7">
        <ResponsiveImage
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
          alt="Dermatologist consultation in progress"
          aspectRatio="aspect-[4/3]"
          overlay={true}
          overlayText="Clinical Dermoscopy & Patient Consultation Room"
          badge="Aurelia Portfolio Interior"
        />
      </div>

      {/* Side Stacked Frames */}
      <div className="md:col-span-5 grid grid-cols-1 gap-4">
        <ResponsiveImage
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
          alt="Close up skincare texture formulation"
          aspectRatio="aspect-[16/9]"
          overlay={true}
          overlayText="Barrier-Active Botanical Formulations"
        />
        <ResponsiveImage
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
          alt="Scalp analysis trichoscopy session"
          aspectRatio="aspect-[16/9]"
          overlay={true}
          overlayText="Digital Trichoscopy Hair & Scalp Suite"
        />
      </div>
    </div>
  );
}
