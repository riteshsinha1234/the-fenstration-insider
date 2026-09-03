import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Leaf, 
  Menu, 
  X, 
  ChevronDown,
  Sparkles,
  Calendar,
  Briefcase,
  FolderKanban,
  Calculator,
  Award,
  Activity
} from 'lucide-react';
import { CategoryType } from '../types';

interface NavBarProps {
  selectedCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
  onOpenEvents: () => void;
  onOpenDirectory: () => void;
  onOpenProjects: () => void;
  onOpenCalculator: () => void;
  onOpenLeaders: () => void;
  onOpenMarket: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenEvents,
  onOpenDirectory,
  onOpenProjects,
  onOpenCalculator,
  onOpenLeaders,
  onOpenMarket
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navCategories: { id: CategoryType; label: string; count?: number }[] = [
    { id: 'all', label: 'All Intelligence', count: 18 },
    { id: 'facades', label: 'Façades & Curtain Walls', count: 6 },
    { id: 'windows-doors', label: 'Windows & Doors', count: 5 },
    { id: 'glass-glazing', label: 'Glass & VIG Tech', count: 4 },
    { id: 'hardware-automation', label: 'Hardware & Automation', count: 3 },
    { id: 'sustainability', label: 'Sustainability & LEED', count: 4 }
  ];

  return (
    <nav className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Desktop Horizontal Category Links with Geometric Underline Balance */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-bold uppercase tracking-widest overflow-x-auto no-scrollbar py-1">
            {navCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`whitespace-nowrap transition-all flex items-center gap-1.5 py-3 ${
                    isSelected
                      ? 'text-slate-950 dark:text-amber-400 border-b-2 border-amber-500 font-black'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.count && (
                    <span className={`text-[9px] font-mono px-1 rounded-xs font-bold ${
                      isSelected 
                        ? 'bg-amber-500 text-slate-950' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}>
                      {cat.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Secondary Quick Links (Events, Directory, Case Studies, Lab) */}
          <div className="hidden lg:flex items-center space-x-4 pl-4 border-l border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            <button
              onClick={onOpenProjects}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition"
            >
              Case Studies
            </button>
            <button
              onClick={onOpenEvents}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition"
            >
              Expos
            </button>
            <button
              onClick={onOpenDirectory}
              className="hover:text-amber-600 dark:hover:text-amber-400 transition"
            >
              Directory
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rotate-45"></span>
              <span>Category: {navCategories.find(c => c.id === selectedCategory)?.label || 'All Intelligence'}</span>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-200 dark:border-slate-800 space-y-1 bg-white dark:bg-slate-900">
            {navCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-sm flex items-center justify-between ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-black'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                {cat.count && <span className="text-[10px] opacity-75">({cat.count})</span>}
              </button>
            ))}

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wider">
              <button
                onClick={() => { onOpenProjects(); setMobileMenuOpen(false); }}
                className="p-2 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-sm text-center"
              >
                Case Studies
              </button>
              <button
                onClick={() => { onOpenEvents(); setMobileMenuOpen(false); }}
                className="p-2 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-sm text-center"
              >
                Expos 2026
              </button>
              <button
                onClick={() => { onOpenDirectory(); setMobileMenuOpen(false); }}
                className="p-2 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-sm text-center"
              >
                Supplier Directory
              </button>
              <button
                onClick={() => { onOpenCalculator(); setMobileMenuOpen(false); }}
                className="p-2 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-sm text-center"
              >
                Façade Lab
              </button>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};
