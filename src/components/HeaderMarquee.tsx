import React, { useState } from 'react';
import { 
  Flame, 
  Pause, 
  Play, 
  ChevronRight, 
  ChevronLeft, 
  SlidersHorizontal,
  ExternalLink 
} from 'lucide-react';
import { BREAKING_NEWS_ITEMS } from '../data/fenestrationData';

interface HeaderMarqueeProps {
  onSelectArticle: (id: string) => void;
}

export const HeaderMarquee: React.FC<HeaderMarqueeProps> = ({ onSelectArticle }) => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [speed, setSpeed] = useState<'slow' | 'normal' | 'fast'>('slow');
  const [currentManualIndex, setCurrentManualIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentManualIndex((prev) => (prev + 1) % BREAKING_NEWS_ITEMS.length);
    onSelectArticle(BREAKING_NEWS_ITEMS[(currentManualIndex + 1) % BREAKING_NEWS_ITEMS.length].articleId);
  };

  const handlePrev = () => {
    setCurrentManualIndex((prev) => (prev - 1 + BREAKING_NEWS_ITEMS.length) % BREAKING_NEWS_ITEMS.length);
    onSelectArticle(BREAKING_NEWS_ITEMS[(currentManualIndex - 1 + BREAKING_NEWS_ITEMS.length) % BREAKING_NEWS_ITEMS.length].articleId);
  };

  return (
    <div className="relative bg-slate-900 text-white border-b border-slate-700 h-9 flex items-center px-4 overflow-hidden z-20">
      <div className="w-full flex items-center justify-between">
        
        {/* Left Sticky Label: Live Updates Badge in Geometric Balance Style */}
        <div className="flex-shrink-0 flex items-center space-x-2 bg-slate-900 pr-3 z-10 border-r border-slate-700">
          <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-sm tracking-tighter uppercase flex items-center gap-1 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            LIVE UPDATES
          </span>
          <span className="hidden xl:inline text-[9px] font-bold text-slate-400 uppercase tracking-widest">
            Newswire
          </span>
        </div>

        {/* Scrolling News Stream */}
        <div 
          className="flex-1 overflow-hidden relative mx-3 cursor-pointer select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`animate-marquee-top flex whitespace-nowrap space-x-12 ${isPaused ? 'paused' : ''}`}
            style={{
              animationDuration: speed === 'slow' ? '65s' : speed === 'normal' ? '40s' : '22s'
            }}
          >
            {/* Duplicated list for seamless infinite loop */}
            {[...BREAKING_NEWS_ITEMS, ...BREAKING_NEWS_ITEMS].map((news, idx) => (
              <div
                key={`${news.id}-${idx}`}
                onClick={() => onSelectArticle(news.articleId)}
                className="inline-flex items-center space-x-3 text-xs sm:text-sm font-medium hover:text-amber-400 transition-colors group"
              >
                <span className="text-[10px] font-mono text-amber-400 font-bold tracking-tighter">[{news.timestamp}]</span>
                <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-slate-800 text-slate-300 border border-slate-700">
                  {news.category}
                </span>
                <span className="text-slate-100 group-hover:text-amber-400 group-hover:underline decoration-amber-400 underline-offset-4">
                  {news.text}
                </span>
                <span className="text-slate-600 font-bold text-xs">◆</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Controls: Speed selection & pause */}
        <div className="flex-shrink-0 flex items-center space-x-1.5 pl-3 bg-slate-900 border-l border-slate-700 z-10">
          
          {/* Pause / Play Toggle */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 rounded-sm text-slate-400 hover:text-white hover:bg-slate-800 transition"
            title={isPaused ? "Resume Live Feed" : "Pause Live Feed"}
          >
            {isPaused ? <Play className="w-3 h-3 text-amber-400" /> : <Pause className="w-3 h-3" />}
          </button>

          {/* Speed Selector (Geometric style) */}
          <div className="hidden sm:flex items-center space-x-1 bg-slate-800 rounded-sm p-0.5 border border-slate-700 text-[9px] font-bold uppercase tracking-tighter">
            <button
              onClick={() => setSpeed('slow')}
              className={`px-1.5 py-0.5 rounded-xs transition ${speed === 'slow' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'}`}
            >
              Slow
            </button>
            <button
              onClick={() => setSpeed('normal')}
              className={`px-1.5 py-0.5 rounded-xs transition ${speed === 'normal' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'}`}
            >
              Med
            </button>
          </div>

          {/* Previous / Next Arrow buttons */}
          <div className="flex items-center">
            <button
              onClick={handlePrev}
              className="p-1 rounded-sm text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Previous Story"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              className="p-1 rounded-sm text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Next Story"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
