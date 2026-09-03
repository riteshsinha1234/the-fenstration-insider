import React, { useState } from 'react';
import { 
  Building2, 
  Mail, 
  BookOpen, 
  CalendarDays, 
  Globe, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Award,
  Layers,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onOpenDigitalIssue: () => void;
  onOpenCalculator: () => void;
  onOpenEvents: () => void;
  onOpenDirectory: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDigitalIssue,
  onOpenCalculator,
  onOpenEvents,
  onOpenDirectory
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterEmail('');
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 transition-colors">
      
      {/* 1. Industry Strategic Partners Bar (Geometric Balance Signature) */}
      <div className="py-8 border-b border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[9px] font-black text-center text-slate-500 uppercase tracking-[0.4em] mb-5">
            Industry Strategic Partners & Testing Bodies
          </div>
          <div className="flex flex-wrap items-center justify-around gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="text-xl font-bold italic tracking-tighter text-white">REYNAERS</div>
            <div className="text-xl font-bold tracking-widest text-white">SCHÜCO</div>
            <div className="text-xl font-black text-white">VEKA</div>
            <div className="text-xl font-serif italic font-bold text-white">Saint-Gobain</div>
            <div className="text-xl font-black tracking-tighter text-white">PILKINGTON</div>
            <div className="text-xl font-bold uppercase text-white">Guardian</div>
            <div className="text-xl font-black uppercase text-white">Deceuninck</div>
          </div>
        </div>
      </div>

      {/* 2. Top Newsletter Bar */}
      <div className="border-b border-slate-850 bg-slate-900/90 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="text-center md:text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Weekly Industry Intelligence
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5 tracking-tight">
                Join 65,000+ Façade Engineers, Architects & Fabricators
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Receive weekly commodity price alerts, technical standards updates (CWCT / ASTM), and exclusive leader interviews.
              </p>
            </div>

            <div className="w-full md:w-auto">
              {newsletterSuccess ? (
                <div className="flex items-center gap-2 text-amber-400 bg-amber-950/60 border border-amber-800 px-4 py-2.5 rounded-sm font-bold uppercase text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Welcome to The Fenestration Insider Digest.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-md w-full">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your professional email..."
                    className="px-3.5 py-2.5 bg-slate-800 border border-slate-700 text-white rounded-l-sm text-xs focus:border-amber-500 focus:outline-none flex-1 min-w-[240px]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black uppercase text-xs tracking-wider rounded-r-sm transition shadow-md whitespace-nowrap flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Join</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* 3. Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-amber-500 flex items-center justify-center rounded-sm">
                <div className="w-4 h-4 border-2 border-slate-950 rotate-45"></div>
              </div>
              <h2 className="text-xl font-black text-white uppercase tracking-tighter">
                THE FENESTRATION <span className="text-amber-400">INSIDER</span>
              </h2>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-xs">
              The premier global digital publication, engineering knowledge hub, and market intelligence platform for Windows, Doors, Curtain Walls, Architectural Glass, and High-Performance Building Envelopes.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 space-y-1 font-mono">
              <div>ISSN 2456-8910 (Online) • Published Bi-Monthly in Print & Digital</div>
              <div>Certified Partner: CWCT & ift Rosenheim Technical Information Bureau</div>
            </div>
          </div>

          {/* Col 2: Editorial Sections */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Journal Sections
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-white transition">Façades & Unitized Envelopes</a></li>
              <li><a href="#" className="hover:text-white transition">Aluminium & uPVC Windows</a></li>
              <li><a href="#" className="hover:text-white transition">Architectural Glass & VIG</a></li>
              <li><a href="#" className="hover:text-white transition">Precision Hardware & Fittings</a></li>
              <li><a href="#" className="hover:text-white transition">Thermal Breaks & Interlayers</a></li>
              <li><a href="#" className="hover:text-white transition">LEED & Passive House Systems</a></li>
            </ul>
          </div>

          {/* Col 3: Engineering Tools & Services */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Tools & Intelligence
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li>
                <button onClick={onOpenCalculator} className="hover:text-white transition text-left">
                  Façade Performance & U-Value Lab
                </button>
              </li>
              <li>
                <button onClick={onOpenDigitalIssue} className="hover:text-white transition text-left">
                  Digital Magazine Archives
                </button>
              </li>
              <li>
                <button onClick={onOpenEvents} className="hover:text-white transition text-left">
                  2026 - 2027 Expos & Trade Fairs
                </button>
              </li>
              <li>
                <button onClick={onOpenDirectory} className="hover:text-white transition text-left">
                  Verified Vendor Directory
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition">LME Aluminium Price Tracker</a></li>
              <li><a href="#" className="hover:text-white transition">ASTM / CWCT Standards Guide</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate & Press */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">
              Editorial Board & PR
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li><a href="#" className="hover:text-white transition">About The Publication</a></li>
              <li><a href="#" className="hover:text-white transition">Editorial Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition">Submit Technical Press Release</a></li>
              <li><a href="#" className="hover:text-white transition">Media Kit & Advertising Rates</a></li>
              <li><a href="#" className="hover:text-white transition">Print Subscription Order</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Editorial Desk</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-10 pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} The Fenestration Insider Media Group. All rights reserved. Registered Trade Mark.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Cookie Settings</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-white ml-2 bg-slate-800 px-2 py-1 rounded-sm uppercase tracking-wider text-[10px] font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
