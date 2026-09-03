import React from 'react';
import { 
  Clock, 
  Eye, 
  Bookmark, 
  Share2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Activity,
  Flame
} from 'lucide-react';
import { Article } from '../types';

interface HeroEditorialProps {
  leadArticle: Article;
  secondaryArticles: Article[];
  onSelectArticle: (article: Article) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string) => void;
}

export const HeroEditorial: React.FC<HeroEditorialProps> = ({
  leadArticle,
  secondaryArticles,
  onSelectArticle,
  bookmarkedIds,
  onToggleBookmark
}) => {
  return (
    <section className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-8 py-0 sm:py-6">
        
        {/* Geometric Balance Grid (Col 8 / Col 4 with precise 1px borders) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-y sm:border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
          
          {/* Main Lead Story (Col 8 - Geometric Balance Featured Report) */}
          <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 relative group overflow-hidden bg-slate-900 flex flex-col justify-end min-h-[480px] lg:min-h-[580px]">
            
            {/* Background High-Resolution Facade Image */}
            <div className="absolute inset-0 bg-slate-800">
              <img 
                src={leadArticle.imageUrl} 
                alt={leadArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
            </div>

            {/* Top Tag & Bookmark */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-xs inline-block">
                  Featured Report
                </span>
                <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm border border-slate-700">
                  {leadArticle.categoryLabel}
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(leadArticle.id);
                }}
                className={`p-2 rounded-sm backdrop-blur-md transition ${
                  bookmarkedIds.has(leadArticle.id)
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-900/80 text-white hover:bg-slate-900'
                }`}
                title="Save Article"
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>
            </div>

            {/* Bottom Hero Content in Geometric Balance Typography */}
            <div className="relative z-20 p-6 sm:p-8 lg:p-10 cursor-pointer" onClick={() => onSelectArticle(leadArticle)}>
              
              <div className="flex items-center space-x-3 text-xs text-amber-400 font-mono mb-2">
                <span>By {leadArticle.author.name}</span>
                <span>•</span>
                <span>{leadArticle.readTime}</span>
                <span>•</span>
                <span className="text-slate-300">{leadArticle.date}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-2xl mb-4 group-hover:text-amber-300 transition-colors tracking-tight">
                {leadArticle.title}
              </h2>

              <p className="text-slate-200 max-w-xl text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                {leadArticle.excerpt}
              </p>

              {/* Technical Spec Chips */}
              {leadArticle.techSpecs && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {leadArticle.techSpecs.slice(0, 3).map((spec, i) => (
                    <div key={i} className="bg-slate-900/90 border border-slate-700 px-2.5 py-1 rounded-sm text-[11px] font-mono text-slate-200">
                      <span className="text-slate-400 mr-1.5">{spec.label}:</span>
                      <strong className="text-amber-400">{spec.value}</strong>
                    </div>
                  ))}
                </div>
              )}

              {/* Read Full Analysis Button */}
              <div className="inline-flex items-center space-x-2 text-white font-black uppercase text-xs tracking-widest border-b-2 border-amber-500 pb-1 group-hover:border-white transition-colors">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>

          </div>

          {/* Aside Column (Col 4 - Geometric Balance Latest Headlines & Pulse) */}
          <aside className="lg:col-span-4 bg-slate-50 dark:bg-slate-900/70 p-6 flex flex-col justify-between">
            
            <div>
              {/* Aside Header */}
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center">
                <span className="w-8 h-px bg-amber-500 mr-3"></span>
                Latest Headlines & Insights
              </h3>

              {/* Stack of secondary articles */}
              <div className="space-y-6">
                {secondaryArticles.map((article) => {
                  const isSaved = bookmarkedIds.has(article.id);
                  return (
                    <article 
                      key={article.id}
                      onClick={() => onSelectArticle(article)}
                      className="flex space-x-4 group cursor-pointer border-b border-slate-200 dark:border-slate-800 pb-5 last:border-b-0 last:pb-0"
                    >
                      {/* Square Thumbnail */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-200 dark:bg-slate-800 flex-shrink-0 rounded-sm overflow-hidden border border-slate-300 dark:border-slate-700 relative">
                        <img 
                          src={article.imageUrl} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-[9px] font-bold text-amber-600 dark:text-amber-400 uppercase mb-1">
                          <span>{article.categoryLabel}</span>
                          <span className="text-slate-400 font-mono">{article.readTime}</span>
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                          {article.title}
                        </h4>

                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                          By {article.author.name} • {article.date}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Bottom Weekly Market Pulse Mini Box (Geometric Balance Signature) */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="bg-slate-900 text-white p-4 rounded-sm text-center shadow-xs">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-200 mb-2">
                  Subscribe to Weekly Market Pulse
                </p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Work Email Address" 
                    className="flex-1 text-[10px] px-3 py-2 bg-slate-800 border border-slate-700 text-white outline-none focus:border-amber-500 rounded-l-sm"
                  />
                  <button 
                    onClick={() => alert("Subscribed to Weekly Market Pulse!")}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 font-black text-[10px] uppercase tracking-wider rounded-r-sm transition"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>

          </aside>

        </div>

      </div>
    </section>
  );
};
