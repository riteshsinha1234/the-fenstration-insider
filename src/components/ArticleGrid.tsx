import React, { useState } from 'react';
import { 
  Grid, 
  List, 
  Clock, 
  Eye, 
  Bookmark, 
  ArrowUpDown, 
  Search, 
  Check, 
  Layers, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { Article, CategoryType } from '../types';

interface ArticleGridProps {
  articles: Article[];
  selectedCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
  onSelectArticle: (article: Article) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string) => void;
  searchQuery: string;
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
  selectedCategory,
  onSelectCategory,
  onSelectArticle,
  bookmarkedIds,
  onToggleBookmark,
  searchQuery
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'trending'>('latest');

  // Filter by category and search query
  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    const matchesSearch = 
      !searchQuery ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === 'popular') return b.views - a.views;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section className="bg-white dark:bg-slate-950 py-12 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & View Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-amber-500 rotate-45"></span>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                Editorial Dispatch & Technical Papers
              </h3>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Curtain Walls, Windows & Glass Dossier
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            
            {/* Sort Selector */}
            <div className="flex items-center space-x-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-sm border border-slate-200 dark:border-slate-800 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-tighter focus:outline-none cursor-pointer"
              >
                <option value="latest" className="bg-white dark:bg-slate-900">Latest First</option>
                <option value="popular" className="bg-white dark:bg-slate-900">Most Read</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-sm border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-xs transition ${viewMode === 'grid' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                title="Grid Layout"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-xs transition ${viewMode === 'list' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                title="List Layout"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Empty State */}
        {sortedArticles.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-800 p-8">
            <p className="text-base font-bold text-slate-700 dark:text-slate-300">
              No technical articles found matching "{searchQuery}".
            </p>
            <button
              onClick={() => onSelectCategory('all')}
              className="mt-3 text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:underline"
            >
              Reset Category Filters
            </button>
          </div>
        ) : (
          /* Grid vs List Display */
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'space-y-4'
          }>
            {sortedArticles.map((article) => {
              const isSaved = bookmarkedIds.has(article.id);

              if (viewMode === 'list') {
                return (
                  <article
                    key={article.id}
                    onClick={() => onSelectArticle(article)}
                    className="bg-white dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-800 p-4 sm:p-5 hover:border-amber-500 transition-all flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between cursor-pointer group shadow-2xs"
                  >
                    <div className="flex gap-4 items-start sm:items-center flex-1 min-w-0">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 bg-slate-100 dark:bg-slate-800 rounded-sm overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                        <img 
                          src={article.imageUrl} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="bg-amber-500 text-slate-950 text-[9px] font-black uppercase px-2 py-0.5 rounded-sm">
                            {article.categoryLabel}
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono">{article.date}</span>
                        </div>

                        <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                          {article.title}
                        </h3>

                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1 font-mono">
                          <span>By {article.author.name}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.views.toLocaleString()} reads</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(article.id);
                        }}
                        className={`p-2 rounded-sm transition border ${
                          isSaved 
                            ? 'bg-amber-500 text-slate-950 border-amber-500' 
                            : 'bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 hover:text-slate-900'
                        }`}
                        title="Bookmark"
                      >
                        <Bookmark className="w-4 h-4 fill-current" />
                      </button>

                      <span className="p-2 rounded-sm bg-slate-900 dark:bg-slate-800 text-white group-hover:bg-amber-500 group-hover:text-slate-950 transition">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                );
              }

              // Card Grid View
              return (
                <article
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="bg-white dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-800 hover:border-amber-500 transition-all flex flex-col justify-between overflow-hidden cursor-pointer group shadow-2xs"
                >
                  <div>
                    {/* Image Header with Badge */}
                    <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-xs">
                          {article.categoryLabel}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(article.id);
                        }}
                        className={`absolute top-3 right-3 p-1.5 rounded-sm transition ${
                          isSaved
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-slate-900/80 text-white hover:bg-slate-900'
                        }`}
                        title="Save article"
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="font-black text-slate-900 dark:text-white text-base leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                      By {article.author.name}
                    </span>
                    <span className="font-black text-amber-600 dark:text-amber-400 text-[11px] uppercase tracking-wider group-hover:underline flex items-center gap-1">
                      Read Analysis <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>

                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
