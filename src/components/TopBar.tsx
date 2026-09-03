import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Calendar, 
  Clock, 
  CloudSun, 
  Bookmark, 
  FileText, 
  Sun, 
  Moon, 
  Sparkles
} from 'lucide-react';

interface TopBarProps {
  currentEdition: string;
  onSelectEdition: (edition: string) => void;
  bookmarksCount: number;
  onOpenBookmarks: () => void;
  onOpenSubmitModal: () => void;
  themeMode: 'light' | 'dark' | 'blueprint';
  onToggleTheme: (mode: 'light' | 'dark' | 'blueprint') => void;
  fontSize: 'sm' | 'base' | 'lg';
  onChangeFontSize: (size: 'sm' | 'base' | 'lg') => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentEdition,
  onSelectEdition,
  bookmarksCount,
  onOpenBookmarks,
  onOpenSubmitModal,
  themeMode,
  onToggleTheme,
  fontSize,
  onChangeFontSize
}) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setCurrentDate(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }));
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const editions = [
    { id: 'Global', label: 'Global Edition' },
    { id: 'Europe', label: 'Europe / DACH' },
    { id: 'North America', label: 'North America' },
    { id: 'Middle East', label: 'Middle East & Gulf' },
    { id: 'Asia-Pacific', label: 'Asia-Pacific / India' }
  ];

  return (
    <header className="bg-slate-900 text-slate-300 text-[11px] border-b border-slate-800 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-1.5 gap-2">
          
          {/* Left section: Date, Live Time & Weather with Geometric Sharpness */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-slate-300 font-bold uppercase tracking-wider">
              <Calendar className="w-3 h-3 text-amber-400" />
              <span>{currentDate || 'Aug 19, 2026'}</span>
            </div>

            <div className="hidden sm:flex items-center space-x-1.5 text-slate-400 font-mono text-[10px]">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>{currentTime || '12:34:56 UTC'}</span>
            </div>

            <div className="hidden md:flex items-center space-x-2 text-slate-400 border-l border-slate-700 pl-3 uppercase tracking-tighter text-[10px]">
              <CloudSun className="w-3 h-3 text-amber-400" />
              <span>Frankfurt: 22°C | London: 19°C | Dubai: 36°C</span>
            </div>
          </div>

          {/* Right section: Edition Selector, Bookmarks, Theme & Actions */}
          <div className="flex items-center space-x-2 ml-auto">
            
            {/* Edition Dropdown */}
            <div className="flex items-center space-x-1 bg-slate-800 px-2 py-0.5 rounded-sm border border-slate-700">
              <Globe className="w-3 h-3 text-amber-400" />
              <select 
                value={currentEdition}
                onChange={(e) => onSelectEdition(e.target.value)}
                className="bg-transparent text-slate-200 font-bold uppercase tracking-tighter focus:outline-none cursor-pointer text-[10px]"
                title="Select Regional Edition"
              >
                {editions.map((ed) => (
                  <option key={ed.id} value={ed.id} className="bg-slate-900 text-slate-200">
                    {ed.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Font Size Selector */}
            <div className="hidden lg:flex items-center bg-slate-800 rounded-sm border border-slate-700 p-0.5 text-[10px] uppercase font-bold">
              <span className="px-1 text-slate-400">Scale:</span>
              <button 
                onClick={() => onChangeFontSize('sm')} 
                className={`px-1.5 py-0.5 rounded-xs transition ${fontSize === 'sm' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-300 hover:text-white'}`}
              >
                S
              </button>
              <button 
                onClick={() => onChangeFontSize('base')} 
                className={`px-1.5 py-0.5 rounded-xs transition ${fontSize === 'base' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-300 hover:text-white'}`}
              >
                M
              </button>
              <button 
                onClick={() => onChangeFontSize('lg')} 
                className={`px-1.5 py-0.5 rounded-xs transition ${fontSize === 'lg' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-300 hover:text-white'}`}
              >
                L
              </button>
            </div>

            {/* Theme Mode Selector */}
            <div className="flex items-center bg-slate-800 rounded-sm border border-slate-700 p-0.5">
              <button
                onClick={() => onToggleTheme('light')}
                className={`px-1.5 py-0.5 rounded-xs flex items-center gap-1 transition ${themeMode === 'light' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                title="Editorial Light"
              >
                <Sun className="w-2.5 h-2.5" />
                <span className="hidden xl:inline text-[9px] uppercase font-bold tracking-tighter">Light</span>
              </button>
              <button
                onClick={() => onToggleTheme('dark')}
                className={`px-1.5 py-0.5 rounded-xs flex items-center gap-1 transition ${themeMode === 'dark' ? 'bg-slate-950 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                title="Dark Mode"
              >
                <Moon className="w-2.5 h-2.5" />
                <span className="hidden xl:inline text-[9px] uppercase font-bold tracking-tighter">Dark</span>
              </button>
              <button
                onClick={() => onToggleTheme('blueprint')}
                className={`px-1.5 py-0.5 rounded-xs flex items-center gap-1 transition ${themeMode === 'blueprint' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
                title="Blueprint"
              >
                <Sparkles className="w-2.5 h-2.5" />
                <span className="hidden xl:inline text-[9px] uppercase font-bold tracking-tighter">Blueprint</span>
              </button>
            </div>

            {/* Bookmarks Button */}
            <button
              onClick={onOpenBookmarks}
              className="flex items-center space-x-1 bg-slate-800 hover:bg-slate-750 text-slate-200 px-2 py-0.5 rounded-sm border border-slate-700 transition uppercase font-bold text-[10px] tracking-tighter"
            >
              <Bookmark className="w-3 h-3 text-amber-400" />
              <span>Saved</span>
              {bookmarksCount > 0 && (
                <span className="bg-amber-500 text-slate-950 font-black px-1 rounded-xs text-[9px]">
                  {bookmarksCount}
                </span>
              )}
            </button>

            {/* Submit Press Release Button */}
            <button
              onClick={onOpenSubmitModal}
              className="hidden sm:flex items-center space-x-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-sm uppercase tracking-tighter text-[10px] transition"
            >
              <FileText className="w-3 h-3" />
              <span>Submit News</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};
