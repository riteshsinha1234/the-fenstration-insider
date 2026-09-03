import React, { useState } from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Search, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { DIRECTORY_VENDORS } from '../data/fenestrationData';
import { VendorItem } from '../types';

export const DirectorySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inquiryVendor, setInquiryVendor] = useState<VendorItem | null>(null);

  const categories = ['All', 'Aluminium Systems', 'Architectural Glass', 'Hardware & Fittings', 'uPVC Profiles', 'Sealants & Interlayers'];

  const filteredVendors = DIRECTORY_VENDORS.filter((v) => {
    const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory;
    const matchesSearch = 
      !searchQuery ||
      v.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.products.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      v.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="directory-section" className="bg-slate-50 dark:bg-slate-900/60 py-12 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-amber-500 rotate-45"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Verified Industry Supplier Directory
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Fenestration Supplier & Fabricator Directory
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Connect directly with tier-1 aluminium extruders, coated glass manufacturers, and precision hardware suppliers.
            </p>
          </div>

          {/* Search bar inside directory */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search vendor or system..."
              className="w-full pl-9 pr-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-sm text-xs focus:border-amber-500 focus:outline-none text-slate-900 dark:text-white font-medium"
            />
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-sm text-xs font-black uppercase tracking-wider transition ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-amber-400 dark:bg-amber-500 dark:text-slate-950 shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vendor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-800 p-5 shadow-2xs hover:border-amber-500 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Banner */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-black text-slate-900 dark:text-white text-base">
                        {vendor.companyName}
                      </h3>
                      {vendor.verified && (
                        <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" title="Verified System Supplier" />
                      )}
                    </div>
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-tight">
                      {vendor.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 px-2 py-0.5 rounded-sm text-xs font-black text-amber-900 dark:text-amber-300 font-mono">
                    <Star className="w-3 h-3 fill-current text-amber-500" />
                    <span>{vendor.rating}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-2 mb-3">
                  {vendor.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{vendor.location}</span>
                </div>

                {/* Core Products List */}
                <div className="space-y-1 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                    Key Product Lines:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {vendor.products.map((prod) => (
                      <span key={prod} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-sm border border-slate-200 dark:border-slate-700">
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <a
                  href={vendor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 font-bold uppercase text-[11px]"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Website</span>
                </a>

                <button
                  onClick={() => setInquiryVendor(vendor)}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950 font-black uppercase text-[11px] tracking-wider rounded-sm transition shadow-xs"
                >
                  Request Specs
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiry Modal */}
        {inquiryVendor && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 rounded-sm max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl animate-in zoom-in-95">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-black text-xl text-slate-900 dark:text-white">
                    Inquire with {inquiryVendor.companyName}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">{inquiryVendor.location} • Category: {inquiryVendor.category}</p>
                </div>
                <button
                  onClick={() => setInquiryVendor(null)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Thank you! Your specification inquiry has been routed to ${inquiryVendor.companyName}. A technical sales engineer will contact you shortly.`);
                  setInquiryVendor(null);
                }}
                className="space-y-3 text-xs"
              >
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Your Name / Architectural Firm</label>
                  <input required placeholder="e.g. Elena V., Foster & Partners" className="w-full p-2 rounded-sm border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Work Email</label>
                  <input required type="email" placeholder="elena@firm.com" className="w-full p-2 rounded-sm border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Project Requirements / Glass & Profile Specs</label>
                  <textarea rows={3} placeholder="We require 4,000 m² of triple-silver Low-E unitized curtain wall profiles with Uw < 0.70 W/m²K for a commercial tower in London..." className="w-full p-2 rounded-sm border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setInquiryVendor(null)}
                    className="px-4 py-2 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-sm bg-amber-500 hover:bg-amber-400 text-slate-950 font-black uppercase tracking-wider"
                  >
                    Send Direct Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
