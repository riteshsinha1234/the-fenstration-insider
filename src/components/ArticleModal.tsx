import React, { useState } from "react";
import {
  X,
  Clock,
  Eye,
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Article } from "../types";

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onSelectRelatedArticle?: (article: Article) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const [comments, setComments] = useState<string[]>([
    "Outstanding breakdown of the 38mm polyamide strut geometry. We saw a similar 40% reduction in thermal transmittance on our Frankfurt high-rise project.",
    "Could you clarify the structural silicone adhesion performance on anodized vs PVDF coated mullions?",
  ]);

  const [newComment, setNewComment] = useState("");
  const [copiedShare, setCopiedShare] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");

  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);

      setTimeout(() => {
        setCopiedShare(false);
      }, 2000);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newComment.trim()) return;

    setComments([newComment.trim(), ...comments]);
    setNewComment("");
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs overflow-y-auto p-2 sm:p-4 md:p-6 flex justify-center items-start animate-in fade-in duration-200">
      {/* MODAL CARD */}

      <div className="bg-white dark:bg-slate-900 rounded-sm max-w-4xl w-full border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden my-6 transition-colors">
        {/* HEADER */}

        <div className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-5 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-sm">
              {article.categoryLabel}
            </span>

            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              • {article.date}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* FONT SIZE */}

            <button
              onClick={() =>
                setFontSize(fontSize === "normal" ? "large" : "normal")
              }
              className="p-1.5 rounded-sm text-xs font-black uppercase text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Toggle reading font size"
            >
              {fontSize === "normal" ? "A+" : "A-"}
            </button>

            {/* AUDIO */}

            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`p-1.5 rounded-sm text-xs flex items-center gap-1 transition ${
                isPlayingAudio
                  ? "bg-amber-500 text-slate-950 font-black"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
              title="Simulate audio podcast readout"
            >
              {isPlayingAudio ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}

              <span className="hidden md:inline font-bold uppercase text-[10px]">
                {isPlayingAudio ? "Stop Audio" : "Listen (8 min)"}
              </span>
            </button>

            {/* BOOKMARK */}

            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 rounded-sm transition ${
                isBookmarked
                  ? "bg-amber-500 text-slate-950"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
              title={isBookmarked ? "Saved" : "Save"}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>

            {/* SHARE */}

            <button
              onClick={handleShare}
              className="p-1.5 rounded-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Share"
            >
              {copiedShare ? (
                <span className="text-[10px] font-bold text-amber-500">
                  Copied
                </span>
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>

            {/* CLOSE */}

            <button
              onClick={onClose}
              className="p-1.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* AUDIO PLAYER */}

        {isPlayingAudio && (
          <div className="bg-amber-400 text-slate-950 px-5 py-2.5 flex items-center justify-between text-xs font-bold">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-900 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-900" />
              </span>

              <span>Audio Narration: Reading "{article.title}"</span>
            </div>

            <span className="font-mono text-[11px]">02:14 / 08:30</span>
          </div>
        )}

        {/* BODY */}

        <div className="p-6 sm:p-8 md:p-10 space-y-6 bg-white dark:bg-slate-900">
          {/* TITLE */}

          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-3 tracking-tight">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
                {article.subtitle}
              </p>
            )}
          </div>

          {/* AUTHOR */}

          <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-slate-100 dark:border-slate-700 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <UserRound className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </div>

              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">
                  {article.author.name}
                </p>

                <p className="text-slate-500 dark:text-slate-400">
                  {article.author.role + "Author Role"} •{" "}
                  {article.author.organization + "Author Organization"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                {article.readTime}
              </span>

              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-amber-500" />
                {article.views.toLocaleString()} Reads
              </span>

              <span className="flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
                {comments.length} Comments
              </span>
            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="rounded-sm overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-800">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full max-h-[420px] object-cover"
            />

            {article.imageCaption && (
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800 text-[11px] text-slate-500 dark:text-slate-300 italic text-center">
                {article.imageCaption}
              </div>
            )}
          </div>

          {/* KEY TAKEAWAYS */}

          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-5 bg-amber-50 dark:bg-amber-950/30 rounded-sm border border-amber-200 dark:border-amber-800/60">
              <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-black text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Executive Summary & Key Takeaways
              </div>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {article.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 font-black">▪</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TECH SPECS */}

          {article.techSpecs && article.techSpecs.length > 0 && (
            <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-sm border border-slate-200 dark:border-slate-700">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                Tested Engineering Specifications & Compliance Matrix
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {article.techSpecs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-2.5 bg-white dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-700"
                  >
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-black block">
                      {spec.label}
                    </span>

                    <span className="font-mono font-black text-slate-900 dark:text-amber-400 text-xs sm:text-sm">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ARTICLE CONTENT */}

          <div
            className={`prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed space-y-4 ${
              fontSize === "large"
                ? "text-base sm:text-lg"
                : "text-sm sm:text-base"
            }`}
          >
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {article.excerpt}
            </p>

            {article.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.trim().startsWith("###")) {
                return (
                  <h3
                    key={index}
                    className="text-xl font-black text-slate-900 dark:text-white pt-4"
                  >
                    {paragraph.replace("###", "").trim()}
                  </h3>
                );
              }

              if (paragraph.trim().startsWith("####")) {
                return (
                  <h4
                    key={index}
                    className="text-lg font-bold text-slate-800 dark:text-slate-200 pt-2"
                  >
                    {paragraph.replace("####", "").trim()}
                  </h4>
                );
              }

              return (
                <p key={index} className="leading-relaxed">
                  {paragraph.trim()}
                </p>
              );
            })}
          </div>

          {/* TAGS */}

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-700">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* COMMENTS */}

          <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
            <h4 className="font-black text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-500" />
              Technical Discussion & Peer Reviews ({comments.length})
            </h4>

            {/* ADD COMMENT */}

            <form onSubmit={handleAddComment} className="flex gap-2 mb-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share technical review, test queries or project feedback..."
                className="flex-1 px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-amber-500 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />

              <button
                type="submit"
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black uppercase text-xs rounded-sm flex items-center gap-1 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post</span>
              </button>
            </form>

            {/* COMMENT LIST */}

            <div className="space-y-2.5">
              {comments.map((comment, i) => (
                <div
                  key={i}
                  className="p-3 bg-slate-50 dark:bg-slate-800 rounded-sm border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300"
                >
                  <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-400 mb-1">
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                      Façade Engineering Peer #{i + 1}
                    </span>

                    <span className="font-mono text-slate-400 dark:text-slate-500">
                      Verified Consultant
                    </span>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300">
                    {comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
