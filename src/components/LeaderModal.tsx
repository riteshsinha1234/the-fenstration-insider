import React from 'react';
import { 
  X, 
  Building2, 
  MapPin, 
  Calendar, 
  Globe, 
  Quote, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { IndustryLeader } from '../types';

interface LeaderModalProps {
  leader: IndustryLeader | null;
  onClose: () => void;
}

export const LeaderModal: React.FC<LeaderModalProps> = ({ leader, onClose }) => {
  if (!leader) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs p-4 flex items-center justify-center animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 rounded-sm max-w-2xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-start justify-between border-b border-slate-800">
          <div className="flex items-center gap-4">
            <img 
              src={leader.avatarUrl} 
              alt={leader.name}
              className="w-16 h-16 rounded-sm object-cover border-2 border-amber-400 shadow-lg"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg">{leader.flag}</span>
                <h3 className="font-black text-xl text-white">
                  {leader.name}
                </h3>
              </div>
              <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">{leader.role}</p>
              <p className="text-slate-300 text-xs font-mono">{leader.company} • Est. {leader.founded}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-sm bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          
          {/* Executive Vision Quote */}
          <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-sm border border-amber-200 dark:border-amber-800/60 relative">
            <Quote className="w-5 h-5 text-amber-500 mb-1" />
            <p className="italic text-slate-900 dark:text-amber-100 text-sm sm:text-base leading-relaxed font-serif">
              "{leader.quote}"
            </p>
          </div>

          {/* Key Specializations */}
          <div className="space-y-2">
            <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
              <span className="font-bold text-slate-500 uppercase text-[10px]">Core Engineering Domain:</span>
              <strong className="text-slate-900 dark:text-white">{leader.focusArea}</strong>
            </div>

            <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
              <span className="font-bold text-slate-500 uppercase text-[10px]">Flagship System Innovation:</span>
              <strong className="text-amber-600 dark:text-amber-400 font-bold">{leader.featuredProduct}</strong>
            </div>

            <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
              <span className="font-bold text-slate-500 uppercase text-[10px]">Global Headquarters:</span>
              <span className="text-slate-900 dark:text-white font-mono">{leader.headquarters}</span>
            </div>
          </div>

          {/* Verified Certifications */}
          <div>
            <span className="font-black text-xs uppercase tracking-wider text-slate-500 block mb-2">
              System Certifications & Audits:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {leader.certifications.map((cert) => (
                <span key={cert} className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs px-2.5 py-1 rounded-sm border border-slate-200 dark:border-slate-700 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-800">
            <a
              href={leader.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-black uppercase text-xs tracking-wider hover:underline"
            >
              <span>Visit {leader.company} Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white font-black uppercase text-xs rounded-sm hover:bg-slate-800"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
