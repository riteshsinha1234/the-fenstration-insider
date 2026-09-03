import React, { useState } from 'react';
import { 
  BookOpen, 
  Download, 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Sparkles, 
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';
import { DIGITAL_MAGAZINES } from '../data/fenestrationData';
import { DigitalMagazine } from '../types';

export const DigitalMagazineSection: React.FC = () => {
  const [selectedMagazine, setSelectedMagazine] = useState<DigitalMagazine>(DIGITAL_MAGAZINES[0]);

  return (
    <section id="digital-magazine" className="bg-slate-900 text-white py-12 border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-amber-500 rotate-45"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Bi-Monthly Digital Edition & Archival Papers
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              The Fenestration Insider Digital Magazine
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Access full digital editions featuring exclusive executive interviews, technical whitepapers, and international trade fair previews.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => alert(`Subscribed to print & digital edition! Welcome to The Fenestration Insider subscribers club.`)}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black uppercase text-xs tracking-wider rounded-sm shadow-md transition"
            >
              Get Print Subscription
            </button>
          </div>
        </div>

        {/* Magazine Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 p-6 sm:p-8 rounded-sm border border-slate-800 shadow-2xl">
          
          {/* Magazine Cover Visual (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-xs sm:max-w-sm">
              
              {/* Magazine Cover */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl border border-slate-700 transition-all duration-300 group-hover:scale-102">
                <img 
                  src={selectedMagazine.coverImage} 
                  alt={selectedMagazine.title}
                  className="w-full aspect-[3/4] object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Top Issue Badge */}
                <div className="absolute top-3 left-3 bg-red-600 text-white font-black text-[10px] uppercase px-2.5 py-0.5 rounded-sm shadow">
                  {selectedMagazine.volume}
                </div>

                {/* Bottom Cover Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] text-amber-400 font-mono block mb-0.5 font-bold">
                    {selectedMagazine.monthYear}
                  </span>
                  <h3 className="font-black text-lg leading-tight drop-shadow-md">
                    {selectedMagazine.title}
                  </h3>
                </div>
              </div>

              {/* Quick Reader Controls */}
              <div className="mt-4 flex items-center justify-between gap-2 w-full">
                <button
                  onClick={() => alert(`Opening Digital E-Reader for ${selectedMagazine.issueNumber}...`)}
                  className="flex-1 py-2 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-sm text-xs font-black uppercase tracking-wider transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Read Online</span>
                </button>

                <button
                  onClick={() => alert(`Downloading high-resolution PDF for ${selectedMagazine.issueNumber} (${selectedMagazine.pdfSize})...`)}
                  className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-sm text-xs font-bold uppercase tracking-wider border border-slate-700 transition flex items-center gap-1"
                  title="Download PDF"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>PDF ({selectedMagazine.pdfSize})</span>
                </button>
              </div>

            </div>
          </div>

          {/* Issue Contents & Highlights (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Volume Selector Tabs */}
            <div className="flex flex-wrap gap-2 pb-3 border-b border-slate-800">
              {DIGITAL_MAGAZINES.map((mag) => (
                <button
                  key={mag.id}
                  onClick={() => setSelectedMagazine(mag)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-black uppercase tracking-wider transition ${
                    selectedMagazine.id === mag.id
                      ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                  }`}
                >
                  {mag.issueNumber}
                </button>
              ))}
            </div>

            {/* Title & Metadata */}
            <div>
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-1 font-mono">
                <span>{selectedMagazine.monthYear}</span>
                <span>•</span>
                <span>{selectedMagazine.pageCount} Pages</span>
                <span>•</span>
                <span>Est. {selectedMagazine.readTime}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {selectedMagazine.title}
              </h3>
            </div>

            {/* Editor's Note */}
            <div className="p-4 bg-slate-900 rounded-sm border border-slate-800">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-1">
                From the Editor-in-Chief's Desk
              </span>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "{selectedMagazine.editorNote}"
              </p>
            </div>

            {/* Featured In This Issue Checklist */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2.5">
                Key Features & Technical Papers in this Issue:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedMagazine.featuredTopics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 bg-slate-900 rounded-sm border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-bold">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
