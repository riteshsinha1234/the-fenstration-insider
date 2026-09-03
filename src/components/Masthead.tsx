import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  Calculator, 
  CalendarDays, 
  Bell, 
  FileText,
  Sliders,
  TrendingUp,
  Building2,
  X
} from 'lucide-react';

interface MastheadProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenDigitalIssue: () => void;
  onOpenCalculator: () => void;
  onOpenNewsletter: () => void;
  onOpenEvents: () => void;
}

export const Masthead: React.FC<MastheadProps> = ({
  searchQuery,
  onSearchChange,
  onOpenDigitalIssue,
  onOpenCalculator,
  onOpenNewsletter,
  onOpenEvents
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Masthead Bar (Geometric Balance Header) */}
        <div className="h-20 flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Brand Logo with Geometric Diamond Symbol */}
          <div className="flex items-center space-x-3.5 shrink-0">
            <div className="w-10 h-10 bg-slate-900 dark:bg-amber-500 flex items-center justify-center rounded-sm shadow-sm">
              <div className="w-5 h-5 border-2 border-white dark:border-slate-950 rotate-45 transition-transform group-hover:rotate-90"></div>
            </div>
            <div>
              <a href="#" className="inline-block">
                <h1 className="text-xl sm:text-2xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
                  THE FENESTRATION
                </h1>
              </a>
              <div className="flex items-center space-x-2 mt-0.5">
                <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 dark:text-slate-400 uppercase">
                  Insider & Industry Report
                </span>
                <span className="hidden sm:inline bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 text-[9px] font-black px-1.5 py-0.2 rounded-xs uppercase tracking-tighter border border-amber-300/60">
                  Global
                </span>
              </div>
            </div>
          </div>

          {/* Center Search Input (Directly accessible & geometric) */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search technical papers, U-value specs, glass suppliers..."
                className="w-full pl-9 pr-8 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition font-medium"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Action Icons & Subscribe CTA */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Quick Tools Buttons */}
            <button
              onClick={onOpenCalculator}
              className="hidden lg:flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition"
              title="Façade U-Value & Thermal Lab"
            >
              <Calculator className="w-4 h-4 text-amber-500" />
              <span className="text-[11px]">Façade Lab</span>
            </button>

            <button
              onClick={onOpenDigitalIssue}
              className="hidden lg:flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition"
              title="Bi-Monthly Digital Magazine"
            >
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span className="text-[11px]">E-Magazine</span>
            </button>

            {/* Subscribe Button in Geometric Balance Signature Style */}
            <button
              onClick={onOpenNewsletter}
              className="bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950 font-black uppercase text-xs tracking-widest px-4 py-2 rounded-sm shadow-xs transition"
            >
              Subscribe
            </button>

          </div>

        </div>

        {/* Mobile Search Bar Expansion */}
        <div className="md:hidden py-2 pb-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search façade specs, glass, systems..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-500 text-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2" />
          </div>
        </div>

      </div>
    </div>
  );
};
