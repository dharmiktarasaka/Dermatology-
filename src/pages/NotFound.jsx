import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <SEOHead 
        title="Page Not Found | Aurelia Dermatology"
        description="The requested page could not be found."
      />

      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 font-sans space-y-4">
        <span className="font-serif text-7xl font-bold text-terracotta">404</span>
        <h1 className="font-serif text-3xl font-bold text-aubergine">Page Not Found</h1>
        <p className="text-xs text-charcoal/70 max-w-md">
          The dermatological service page or article you are searching for does not exist or has been relocated.
        </p>

        <div className="pt-4 flex items-center space-x-3">
          <Link
            to="/"
            className="px-6 py-2.5 bg-terracotta text-white rounded-full text-xs font-semibold hover:bg-terracotta-hover transition-colors shadow-md flex items-center space-x-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/concerns"
            className="px-5 py-2.5 border border-aubergine text-aubergine rounded-full text-xs font-semibold hover:bg-aubergine/5 transition-colors"
          >
            <span>Browse Concerns</span>
          </Link>
        </div>
      </div>
    </>
  );
}
