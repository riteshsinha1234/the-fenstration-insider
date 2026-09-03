import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Upload, 
  CheckCircle2, 
  Send, 
  Building2, 
  Layers, 
  Sparkles 
} from 'lucide-react';

interface SubmitPressReleaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitPressReleaseModal: React.FC<SubmitPressReleaseModalProps> = ({
  isOpen,
  onClose
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    category: 'Façades & Envelopes',
    author: '',
    email: '',
    excerpt: '',
    pressBody: '',
    attachmentName: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs p-4 flex items-center justify-center animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 rounded-sm max-w-xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 my-6">
        
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-black text-lg text-white">
                Submit News & Press Release
              </h3>
              <p className="text-[11px] text-slate-300 font-mono">The Fenestration Insider Editorial Desk</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-sm bg-slate-800 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="font-black text-xl text-slate-900 dark:text-white">
                Submission Received!
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Thank you! Our technical editorial board will review your press release and notify you once scheduled for publication.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold uppercase tracking-wider text-[11px] text-slate-700 dark:text-slate-300 mb-1">
                  Article / Press Release Title *
                </label>
                <input
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Next-Gen 0.65 W/m²K Minimalist Sliding System Launched"
                  className="w-full p-2.5 rounded-sm border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[11px] text-slate-700 dark:text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Alumil Systems"
                    className="w-full p-2 rounded-sm border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-[11px] text-slate-700 dark:text-slate-300 mb-1">
                    Primary Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2 rounded-sm border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white uppercase font-bold"
                  >
                    <option>Façades & Envelopes</option>
                    <option>Windows & Doors</option>
                    <option>Architectural Glass</option>
                    <option>Hardware & Automation</option>
                    <option>Sustainability & LEED</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[11px] text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="e.g. Marcus Vance"
                    className="w-full p-2 rounded-sm border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-[11px] text-slate-700 dark:text-slate-300 mb-1">
                    Press Contact Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="press@company.com"
                    className="w-full p-2 rounded-sm border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-[11px] text-slate-700 dark:text-slate-300 mb-1">
                  Summary / Key Specifications *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.pressBody}
                  onChange={(e) => setFormData({ ...formData, pressBody: e.target.value })}
                  placeholder="Paste your technical press release, product test reports (ift Rosenheim / CWCT / ASTM), or project case study details here..."
                  className="w-full p-2.5 rounded-sm border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-sm bg-amber-500 hover:bg-amber-400 text-slate-950 font-black uppercase text-xs tracking-wider flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Press Release</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
