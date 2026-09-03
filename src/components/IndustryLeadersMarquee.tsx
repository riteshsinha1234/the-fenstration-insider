import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Pause, 
  Play, 
  ExternalLink,
  Award,
  Sparkles,
  Quote
} from 'lucide-react';
import { INDUSTRY_LEADERS } from '../data/fenestrationData';
import { IndustryLeader } from '../types';

interface IndustryLeadersMarqueeProps {
  onSelectLeader: (leader: IndustryLeader) => void;
}

export const IndustryLeadersMarquee: React.FC<IndustryLeadersMarqueeProps> = ({
  onSelectLeader
}) => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [speedMode, setSpeedMode] = useState<'ultra-slow' | 'slow' | 'normal'>('slow');

  return (
    <section 
      className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-2.5 px-4 overflow-hidden relative select-none transition-colors"
      aria-label="Industry Leaders & Global System Houses"
    >
      <div className="w-full flex items-center justify-between">
        
        {/* Left Sticky Label: "Industry Strategic Partners" */}
        <div className="flex-shrink-0 flex items-center space-x-2 bg-slate-100 dark:bg-slate-900 pr-3 z-10 border-r border-slate-300 dark:border-slate-700">
          <div className="flex items-center space-x-1 text-slate-800 dark:text-slate-200 text-[10px] font-black uppercase tracking-[0.2em]">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>INDUSTRY LEADERS</span>
          </div>
        </div>

        {/* Scrolling Leaders Carousel (Slow Glide) */}
        <div 
          className="flex-1 overflow-hidden relative mx-3 cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex whitespace-nowrap space-x-8 ${
              speedMode === 'ultra-slow' 
                ? 'animate-marquee-leaders-ultraslow' 
                : speedMode === 'slow' 
                ? 'animate-marquee-leaders-slow' 
                : 'animate-marquee-top'
            } ${isPaused ? 'paused' : ''}`}
            style={{
              animationDuration: speedMode === 'ultra-slow' ? '80s' : speedMode === 'slow' ? '50s' : '30s'
            }}
          >
            {[...INDUSTRY_LEADERS, ...INDUSTRY_LEADERS].map((leader, idx) => (
              <div
                key={`${leader.id}-${idx}`}
                onClick={() => onSelectLeader(leader)}
                className="inline-flex items-center space-x-3 bg-white dark:bg-slate-800 hover:border-amber-500 dark:hover:border-amber-400 px-3 py-1 rounded-sm border border-slate-200 dark:border-slate-700 transition shadow-2xs group cursor-pointer"
                title={`Click for ${leader.company} profile & technical leadership paper`}
              >
                {/* Avatar / Logo */}
                <img 
                  src={leader.avatarUrl} 
                  alt={leader.company}
                  className="w-6 h-6 rounded-full object-cover border border-slate-200 dark:border-slate-600"
                />

                {/* Company & Flag */}
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1 text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400">
                    <span>{leader.company}</span>
                    <span className="text-[10px]">{leader.flag}</span>
                  </div>
                  <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                    {leader.focusArea}
                  </span>
                </div>

                {/* Verified Badge */}
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                
                <span className="text-slate-300 dark:text-slate-600 font-bold text-xs pl-1">|</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Pacing Controls */}
        <div className="flex-shrink-0 flex items-center space-x-1.5 pl-3 bg-slate-100 dark:bg-slate-900 border-l border-slate-300 dark:border-slate-700 z-10">
          
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 rounded-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
            title={isPaused ? "Resume Leaders" : "Pause Leaders"}
          >
            {isPaused ? <Play className="w-3 h-3 text-amber-500" /> : <Pause className="w-3 h-3" />}
          </button>

          <div className="hidden sm:flex items-center space-x-0.5 bg-slate-200 dark:bg-slate-800 rounded-sm p-0.5 text-[9px] font-black uppercase tracking-tighter">
            <button
              onClick={() => setSpeedMode('ultra-slow')}
              className={`px-1.5 py-0.5 rounded-xs transition ${speedMode === 'ultra-slow' ? 'bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950' : 'text-slate-600 dark:text-slate-400'}`}
              title="Ultra-Slow Pacing"
            >
              Ultra
            </button>
            <button
              onClick={() => setSpeedMode('slow')}
              className={`px-1.5 py-0.5 rounded-xs transition ${speedMode === 'slow' ? 'bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950' : 'text-slate-600 dark:text-slate-400'}`}
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
