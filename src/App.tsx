import { useState, useEffect } from "react";
import { TopBar } from "./components/TopBar";
import { HeaderMarquee } from "./components/HeaderMarquee";
import { Masthead } from "./components/Masthead";
import { NavBar } from "./components/NavBar";
import { MarketMarquee } from "./components/MarketMarquee";
import { IndustryLeadersMarquee } from "./components/IndustryLeadersMarquee";
import { HeroEditorial } from "./components/HeroEditorial";
import { FacadePerformanceLab } from "./components/FacadePerformanceLab";
import { ArticleGrid } from "./components/ArticleGrid";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { DigitalMagazineSection } from "./components/DigitalMagazineSection";
import { EventsCalendar } from "./components/EventsCalendar";
import { DirectorySection } from "./components/DirectorySection";
import { ArticleModal } from "./components/ArticleModal";
import { LeaderModal } from "./components/LeaderModal";
import { MarketModal } from "./components/MarketModal";
import { SubmitPressReleaseModal } from "./components/SubmitPressReleaseModal";
import { Footer } from "./components/Footer";
import { API_BASE_URL } from "./config/api";

import {
  FEATURED_ARTICLES,
  MARKET_INDICES,
  INDUSTRY_LEADERS,
} from "./data/fenestrationData";

import { Article, CategoryType, IndustryLeader, MarketItem } from "./types";
import { Bookmark, X, Trash2 } from "lucide-react";

export default function App() {
  const [currentEdition, setCurrentEdition] = useState<string>("Global");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [themeMode, setThemeMode] = useState<"light" | "dark" | "blueprint">(
    "light",
  );
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  // Backend published articles
  const [articles, setArticles] = useState<Article[]>([]);
  // Loading state for articles
  const [articlesLoading, setArticlesLoading] = useState<boolean>(true);

  // Fetch published articles from backend
  useEffect(() => {
    const fetchPublishedArticles = async () => {
      try {
        setArticlesLoading(true);

        const response = await fetch(`${API_BASE_URL}/articles/published`);

        const data = await response.json();

        if (!response.ok) {
          console.error("Failed to fetch published articles:", data);
          return;
        }

        const formattedArticles: Article[] = (data.articles || []).map(
          (article: any) => {
            let articleDate = "";

            if (article.createdAt?._seconds) {
              articleDate = new Date(
                article.createdAt._seconds * 1000,
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
            } else {
              articleDate = new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
            }

            const allowedCategories: CategoryType[] = [
              "facades",
              "windows-doors",
              "glass-glazing",
              "hardware-automation",
              "sustainability",
              "market-prices",
              "projects",
              "interviews",
            ];

            const normalizedCategory = String(
              article.category || "",
            ).toLowerCase();

            const safeCategory: CategoryType = allowedCategories.includes(
              normalizedCategory as CategoryType,
            )
              ? (normalizedCategory as CategoryType)
              : "all";

            return {
              id: article.id || "",
              title: article.title || "",
              subtitle: "",
              excerpt: article.excerpt || "",
              content: article.content || "",
              category: safeCategory,
              categoryLabel:
                article.categoryLabel || article.category || "Article",

              author: {
                name: article.authorName || "Fenestration Insider",
                role: "",
                avatar: "",
                organization: "",
              },

              date: articleDate,
              readTime: article.readTime || "",

              imageUrl:
                "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1600&q=80",

              imageCaption: "",
              tags: [],
              isBreaking: false,
              isFeatured: Boolean(article.featured),
              isEditorChoice: false,
              isTrending: false,
              views: 0,
              commentsCount: 0,
              techSpecs: [],
              keyTakeaways: [],
              pdfDownloadUrl: "",
            };
          },
        );

        setArticles(formattedArticles);
      } catch (error) {
        console.error("Fetch published articles error:", error);
      } finally {
        setArticlesLoading(false);
      }
    };

    fetchPublishedArticles();
  }, []);

  // Bookmarks state with localStorage persistence
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("fenestration_bookmarks");

      return saved ? new Set(JSON.parse(saved)) : new Set(["art-1", "art-2"]);
    } catch {
      return new Set(["art-1", "art-2"]);
    }
  });

  // Modals state
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const [activeLeader, setActiveLeader] = useState<IndustryLeader | null>(null);

  const [activeMarketItem, setActiveMarketItem] = useState<MarketItem | null>(
    null,
  );

  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);

  const [isBookmarksModalOpen, setIsBookmarksModalOpen] =
    useState<boolean>(false);

  // Sync dark/blueprint classes on document html
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark", "blueprint-theme");

    if (themeMode === "dark") {
      root.classList.add("dark");
    } else if (themeMode === "blueprint") {
      root.classList.add("dark", "blueprint-theme");
    }
  }, [themeMode]);

  // Persist bookmarks
  const toggleBookmark = (articleId: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);

      if (next.has(articleId)) {
        next.delete(articleId);
      } else {
        next.add(articleId);
      }

      try {
        localStorage.setItem(
          "fenestration_bookmarks",
          JSON.stringify(Array.from(next)),
        );
      } catch (e) {
        // Fallback
      }

      return next;
    });
  };

  /*
    OLD STATIC VERSION:

    const handleSelectArticleById = (articleId: string) => {
      const found =
        FEATURED_ARTICLES.find((a) => a.id === articleId) ||
        FEATURED_ARTICLES[0];

      setActiveArticle(found);
    };
  */

  const handleSelectArticleById = (articleId: string) => {
    const found = articles.find((article) => article.id === articleId);

    if (found) {
      setActiveArticle(found);
      return;
    }

    /*
      Temporary fallback so your existing HeaderMarquee
      with art-1 / art-2 etc. still works.
    */
    const staticArticle = FEATURED_ARTICLES.find(
      (article) => article.id === articleId,
    );

    if (staticArticle) {
      setActiveArticle(staticArticle);
    }
  };

  // Font size scale class
  const fontSizeClass = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  }[fontSize];

  /*
    OLD STATIC BOOKMARK LIST:

    const savedArticles = FEATURED_ARTICLES.filter((a) =>
      bookmarkedIds.has(a.id),
    );
  */

  const savedArticles = articles.filter((article) =>
    bookmarkedIds.has(article.id),
  );

  return (
    <div
      className={`min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 ${fontSizeClass}`}
    >
      {/* 1. TOP UTILITY BAR */}
      <TopBar
        currentEdition={currentEdition}
        onSelectEdition={setCurrentEdition}
        bookmarksCount={bookmarkedIds.size}
        onOpenBookmarks={() => setIsBookmarksModalOpen(true)}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        themeMode={themeMode}
        onToggleTheme={setThemeMode}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
      />

      {/* 2. TOP HEADER BREAKING NEWS MARQUEE */}
      <HeaderMarquee onSelectArticle={handleSelectArticleById} />

      {/* 3. MASTHEAD BRANDING & SEARCH BAR */}
      <Masthead
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenDigitalIssue={() => {
          const el = document.getElementById("digital-magazine");

          el?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onOpenCalculator={() => {
          const el = document.getElementById("performance-lab");

          el?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onOpenNewsletter={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
        onOpenEvents={() => {
          const el = document.getElementById("events-calendar");

          el?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      />

      {/* 4. STICKY CATEGORY NAVIGATION BAR */}
      <NavBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onOpenEvents={() => {
          const el = document.getElementById("events-calendar");

          el?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onOpenDirectory={() => {
          const el = document.getElementById("directory-section");

          el?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onOpenProjects={() => {
          const el = document.getElementById("projects-section");

          el?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onOpenCalculator={() => {
          const el = document.getElementById("performance-lab");

          el?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onOpenLeaders={() => {
          setActiveLeader(INDUSTRY_LEADERS[0]);
        }}
        onOpenMarket={() => {
          setActiveMarketItem(MARKET_INDICES[0]);
        }}
      />

      {/* 5. MARKET MARQUEE */}
      <MarketMarquee onSelectMarketItem={(item) => setActiveMarketItem(item)} />

      {/* 6. INDUSTRY LEADERS MARQUEE */}
      <IndustryLeadersMarquee
        onSelectLeader={(leader) => setActiveLeader(leader)}
      />

      <main>
        {/*
          OLD STATIC HERO:

          <HeroEditorial
            leadArticle={FEATURED_ARTICLES[0]}
            secondaryArticles={FEATURED_ARTICLES.slice(1, 4)}
            onSelectArticle={(art) => setActiveArticle(art)}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={toggleBookmark}
          />
        */}

        {/* Backend Hero */}
        {articles.length > 0 && (
          <HeroEditorial
            leadArticle={articles[0]}
            secondaryArticles={articles.slice(1, 4)}
            onSelectArticle={(art) => setActiveArticle(art)}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={toggleBookmark}
          />
        )}

        {/* Temporary loading text */}
        {articlesLoading && (
          <div className="flex items-center justify-center min-h-[300px] px-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Loading published articles...
            </p>
          </div>
        )}

        {/* 8. FAÇADE PERFORMANCE LAB */}
        <FacadePerformanceLab />

        {/*
          OLD STATIC GRID:

          <ArticleGrid
            articles={FEATURED_ARTICLES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectArticle={(art) => setActiveArticle(art)}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={toggleBookmark}
            searchQuery={searchQuery}
          />
        */}

        {/* Backend Article Grid */}
        <ArticleGrid
          articles={articles}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectArticle={(art) => setActiveArticle(art)}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={toggleBookmark}
          searchQuery={searchQuery}
        />

        {/* 10. ARCHITECTURAL FAÇADE BIM & PROJECT CASE STUDIES */}
        <ProjectShowcase />

        {/* 11. DIGITAL MAGAZINE */}
        <DigitalMagazineSection />

        {/* 12. EVENTS */}
        <EventsCalendar />

        {/* 13. DIRECTORY */}
        <DirectorySection />
      </main>

      {/* 14. FOOTER */}
      <Footer
        onOpenDigitalIssue={() => {
          const el = document.getElementById("digital-magazine");

          el?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onOpenCalculator={() => {
          const el = document.getElementById("performance-lab");

          el?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onOpenEvents={() => {
          const el = document.getElementById("events-calendar");

          el?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        onOpenDirectory={() => {
          const el = document.getElementById("directory-section");

          el?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      />

      {/* MODAL 1 */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        isBookmarked={
          activeArticle ? bookmarkedIds.has(activeArticle.id) : false
        }
        onToggleBookmark={toggleBookmark}
      />

      {/* MODAL 2 */}
      <LeaderModal
        leader={activeLeader}
        onClose={() => setActiveLeader(null)}
      />

      {/* MODAL 3 */}
      <MarketModal
        item={activeMarketItem}
        onClose={() => setActiveMarketItem(null)}
      />

      {/* MODAL 4 */}
      <SubmitPressReleaseModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />

      {/* MODAL 5 */}
      {isBookmarksModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs p-4 flex items-center justify-center animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-sm max-w-xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl p-6 overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-amber-500 fill-current" />

                <h3 className="font-black uppercase tracking-wider text-base text-slate-900 dark:text-white">
                  Saved Technical Papers ({savedArticles.length})
                </h3>
              </div>

              <button
                onClick={() => setIsBookmarksModalOpen(false)}
                className="p-1 rounded-sm text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {savedArticles.length === 0 ? (
              <p className="text-slate-500 text-xs py-8 text-center">
                You have no saved articles yet. Click the bookmark icon on any
                article to save it for offline reading.
              </p>
            ) : (
              <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
                {savedArticles.map((art) => (
                  <div
                    key={art.id}
                    className="p-3 bg-slate-50 dark:bg-slate-850 rounded-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs"
                  >
                    <div
                      onClick={() => {
                        setActiveArticle(art);
                        setIsBookmarksModalOpen(false);
                      }}
                      className="cursor-pointer flex-1"
                    >
                      <span className="text-[9px] font-black bg-amber-500 text-slate-950 uppercase px-1.5 py-0.5 rounded-sm">
                        {art.categoryLabel}
                      </span>

                      <h4 className="font-bold text-slate-900 dark:text-white line-clamp-1 hover:text-amber-600 dark:hover:text-amber-400 mt-1">
                        {art.title}
                      </h4>

                      <span className="text-[10px] text-slate-400 font-mono">
                        {art.readTime} • By {art.author.name}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleBookmark(art.id)}
                      className="p-1.5 text-slate-400 hover:text-red-500"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
