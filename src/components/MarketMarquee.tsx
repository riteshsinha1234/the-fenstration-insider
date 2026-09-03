import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Pause, 
  Play, 
  Info,
  DollarSign,
  Activity,
  Layers
} from 'lucide-react';
import { MARKET_INDICES } from '../data/fenestrationData';
import { MarketItem } from '../types';

interface MarketMarqueeProps {
  onSelectMarketItem: (item: MarketItem) => void;
}

export const MarketMarquee: React.FC<MarketMarqueeProps> = ({ onSelectMarketItem }) => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [speedMode, setSpeedMode] = useState<'ultra-slow' | 'slow' | 'normal'>('slow');

  return (
    <section 
      className="bg-amber-400 text-slate-900 border-b border-amber-500 h-10 flex items-center px-4 overflow-hidden relative select-none z-10 transition-colors"
      aria-label="Raw Material & Commodity Ticker"
    >
      <div className="w-full flex items-center justify-between">
        
        {/* Left Sticky Label: "Market Pulse" (Geometric Balance Signature) */}
        <div className="flex-shrink-0 flex items-center space-x-2 bg-amber-400 pr-3 z-10 border-r border-amber-500/80">
          <div className="flex items-center space-x-1.5 font-black uppercase text-[10px] tracking-tight">
            <Activity className="w-3.5 h-3.5 text-slate-900" />
            <span>MARKET PULSE:</span>
          </div>
          <span className="hidden xl:inline text-[9px] font-bold text-slate-800 uppercase tracking-widest">
            Commodity Wire
          </span>
        </div>

        {/* Scrolling Continuous Commodity Ticker (Slow Paced) */}
        <div 
          className="flex-1 overflow-hidden relative mx-3 cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex whitespace-nowrap space-x-8 text-xs font-bold ${
              speedMode === 'ultra-slow' 
                ? 'animate-marquee-market-ultraslow' 
                : speedMode === 'slow' 
                ? 'animate-marquee-market-slow' 
                : 'animate-marquee-top'
            } ${isPaused ? 'paused' : ''}`}
            style={{
              animationDuration: speedMode === 'ultra-slow' ? '85s' : speedMode === 'slow' ? '55s' : '35s'
            }}
          >
            {[...MARKET_INDICES, ...MARKET_INDICES].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => onSelectMarketItem(item)}
                className="inline-flex items-center space-x-2 hover:bg-amber-500/50 px-2 py-0.5 rounded-sm transition cursor-pointer group"
                title="Click for historical price trends & procurement advisory"
              >
                {/* Material & Symbol */}
                <span className="text-slate-900 font-bold uppercase text-[11px]">
                  {item.name}
                </span>

                {/* Price & Unit */}
                <span className="font-mono font-black text-slate-950 text-xs">
                  {item.price}
                </span>

                {/* Change delta in High Contrast Red/Green */}
                <span className={`inline-flex items-center text-[10px] font-black font-mono ${
                  item.isPositive ? 'text-emerald-900 bg-emerald-300/60 px-1 rounded-xs' : 'text-red-900 bg-red-300/60 px-1 rounded-xs'
                }`}>
                  {item.isPositive ? '+' : ''}{item.changePercent}%
                </span>

                <span className="text-amber-600/70 font-bold text-xs ml-2">|</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Controls: Pacing Toggle */}
        <div className="flex-shrink-0 flex items-center space-x-1 pl-3 bg-amber-400 border-l border-amber-500/80 z-10">
          
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 text-slate-900 hover:bg-amber-500 rounded-sm transition"
            title={isPaused ? "Resume Ticker" : "Pause Ticker"}
          >
            {isPaused ? <Play className="w-3 h-3 text-slate-950" /> : <Pause className="w-3 h-3 text-slate-900" />}
          </button>

          <div className="hidden sm:flex items-center space-x-0.5 bg-amber-500/60 rounded-sm p-0.5 text-[9px] font-black uppercase">
            <button
              onClick={() => setSpeedMode('ultra-slow')}
              className={`px-1.5 py-0.5 rounded-xs transition ${speedMode === 'ultra-slow' ? 'bg-slate-900 text-white' : 'text-slate-900 hover:bg-amber-500'}`}
              title="Ultra-Slow Pacing"
            >
              Ultra
            </button>
            <button
              onClick={() => setSpeedMode('slow')}
              className={`px-1.5 py-0.5 rounded-xs transition ${speedMode === 'slow' ? 'bg-slate-900 text-white' : 'text-slate-900 hover:bg-amber-500'}`}
              title="Slow Pacing"
            >
              Slow
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
