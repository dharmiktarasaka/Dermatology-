import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="flex items-center space-x-2 text-xs text-charcoal/70 font-sans my-4 overflow-x-auto py-1">
      <Link to="/" className="hover:text-terracotta flex items-center space-x-1">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3.5 h-3.5 text-rosewood/50 flex-shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-terracotta whitespace-nowrap">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-aubergine whitespace-nowrap">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
